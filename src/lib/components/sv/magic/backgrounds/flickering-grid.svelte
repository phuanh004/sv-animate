<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { writable } from 'svelte/store';

	interface Props {
		squareSize?: number;
		gridGap?: number;
		flickerChance?: number;
		color?: string;
		width: number;
		height: number;
		class?: string;
		maxOpacity?: number;
	}

	let {
		squareSize = 4,
		gridGap = 6,
		flickerChance = 0.3,
		color = 'rgb(0, 0, 0)',
		width,
		height,
		class: className = '',
		maxOpacity = 0.3
	}: Props = $props();

	let canvas: HTMLCanvasElement = $state();
	let isInView = writable(false);

	let memoizedColor: any;

	function toRGBA(color: string) {
		if (typeof window === 'undefined') {
			return `rgba(0, 0, 0,`;
		}
		const canvas = document.createElement('canvas');
		canvas.width = canvas.height = 1;
		const ctx = canvas.getContext('2d');
		if (!ctx) return 'rgba(255, 0, 0,';
		ctx.fillStyle = color;
		ctx.fillRect(0, 0, 1, 1);
		const [r, g, b] = ctx.getImageData(0, 0, 1, 1).data;
		return `rgba(${r}, ${g}, ${b},`;
	}

	memoizedColor = toRGBA(color);

	function setupCanvas() {
		const canvasWidth = width || canvas.clientWidth;
		const canvasHeight = height || canvas.clientHeight;
		const dpr = window.devicePixelRatio || 1;
		canvas.width = canvasWidth * dpr;
		canvas.height = canvasHeight * dpr;
		canvas.style.width = `${canvasWidth}px`;
		canvas.style.height = `${canvasHeight}px`;
		const cols = Math.floor(canvasWidth / (squareSize + gridGap));
		const rows = Math.floor(canvasHeight / (squareSize + gridGap));

		const squares = new Float32Array(cols * rows);
		for (let i = 0; i < squares.length; i++) {
			squares[i] = Math.random() * maxOpacity;
		}

		return { canvasWidth, canvasHeight, cols, rows, squares, dpr };
	}

	function updateSquares(squares: Float32Array, deltaTime: number) {
		for (let i = 0; i < squares.length; i++) {
			if (Math.random() < flickerChance * deltaTime) {
				squares[i] = Math.random() * maxOpacity;
			}
		}
	}

	function drawGrid(
		ctx: CanvasRenderingContext2D,
		width: number,
		height: number,
		cols: number,
		rows: number,
		squares: Float32Array,
		dpr: number
	) {
		ctx.clearRect(0, 0, width, height);
		ctx.fillStyle = 'transparent';
		ctx.fillRect(0, 0, width, height);

		for (let i = 0; i < cols; i++) {
			for (let j = 0; j < rows; j++) {
				const opacity = squares[i * rows + j];
				ctx.fillStyle = `${memoizedColor}${opacity})`;
				ctx.fillRect(
					i * (squareSize + gridGap) * dpr,
					j * (squareSize + gridGap) * dpr,
					squareSize * dpr,
					squareSize * dpr
				);
			}
		}
	}

	let animationFrameId = $state(0);

	onMount(() => {
		console.log('canvas', canvas);
		if (canvas) {
			console.log('canvas', canvas);
		}
		if (!canvas) {
			return;
		}
		const ctx = canvas.getContext('2d');
		if (!ctx) {
			return;
		}
		let { canvasWidth, canvasHeight, cols, rows, squares, dpr } = setupCanvas();
		console.log(ctx, 'ctx');

		let lastTime = 0;

		const animate = (time: number) => {
			if ($isInView === false) return;
			const deltaTime = (time - lastTime) / 1000;
			lastTime = time;

			updateSquares(squares, deltaTime);
			drawGrid(ctx, canvasWidth * dpr, canvasHeight * dpr, cols, rows, squares, dpr);
			animationFrameId = requestAnimationFrame(animate);
		};

		const handleResize = () => {
			({ canvasWidth, canvasHeight, cols, rows, squares, dpr } = setupCanvas());
		};

		const observer = new IntersectionObserver(
			([entry]) => {
				console.log(entry.isIntersecting);
				isInView.set(entry.isIntersecting);
			},
			{ threshold: 0 }
		);

		observer.observe(canvas);

		window.addEventListener('resize', handleResize);

		const unsubscribe = isInView.subscribe((inView) => {
			if (inView) {
				animationFrameId = requestAnimationFrame(animate);
			}
		});

		return () => {
			window.removeEventListener('resize', handleResize);
			cancelAnimationFrame(animationFrameId);
			observer.disconnect();
			unsubscribe();
		};
	});

	//   onDestroy(() => {
	//     cancelAnimationFrame(animationFrameId);
	//   });
</script>

<canvas
	bind:this={canvas}
	class="pointer-events-none size-full {className}"
	style="width: {width || '100%'}; height: {height || '100%'};"
></canvas>
