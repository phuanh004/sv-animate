<script lang="ts">
	import { cn } from '$lib/utils';
	import { onMount, tick } from 'svelte';
	import { M } from 'motion-start';
	import { watch } from 'runed';

	interface Props {
		class?: any;
		containerRef: any;
		fromRef: any;
		toRef: any;
		curvature?: number;
		reverse?: boolean; // Include the reverse pro;
		duration?: any;
		delay?: number;
		pathColor?: string;
		pathWidth?: number;
		pathOpacity?: number;
		gradientStartColor?: string;
		gradientStopColor?: string;
		startXOffset?: number;
		startYOffset?: number;
		endXOffset?: number;
		endYOffset?: number;
	}

	let {
		class: className = '',
		containerRef = $bindable(null),
		fromRef = $bindable(null),
		toRef = $bindable(null),
		curvature = 0,
		reverse = false,
		duration = Math.random() * 3 + 4,
		delay = 0,
		pathColor = 'gray',
		pathWidth = 2,
		pathOpacity = 0.2,
		gradientStartColor = '#ffaa40',
		gradientStopColor = '#9c40ff',
		startXOffset = 0,
		startYOffset = 0,
		endXOffset = 0,
		endYOffset = 0
	}: Props = $props();

	let id = 'gradient';
	let pathD = $state('');
	let svgDimensions = $state({ width: 0, height: 0 });

	// Calculate the gradient coordinates based on the reverse prop
	let gradientCoordinates = $derived(
		reverse
			? {
					x1: ['90%', '-10%'],
					x2: ['100%', '0%'],
					y1: ['0%', '0%'],
					y2: ['0%', '0%']
				}
			: {
					x1: ['10%', '110%'],
					x2: ['0%', '100%'],
					y1: ['0%', '0%'],
					y2: ['0%', '0%']
				}
	);

	let updatePath = () => {
		if (!containerRef || !fromRef || !toRef) return;
		let containerRect = containerRef?.getBoundingClientRect();
		let rectA = fromRef?.getBoundingClientRect();
		let rectB = toRef?.getBoundingClientRect();
		console.log(containerRect, rectA, rectB, 'Maths');
		let svgWidth = containerRect.width;
		let svgHeight = containerRect.height;
		svgDimensions.width = svgWidth;
		svgDimensions.height = svgHeight;

		let startX = rectA.left - containerRect.left + rectA.width / 2 + startXOffset;
		let startY = rectA.top - containerRect.top + rectA.height / 2 + startYOffset;
		let endX = rectB.left - containerRect.left + rectB.width / 2 + endXOffset;
		let endY = rectB.top - containerRect.top + rectB.height / 2 + endYOffset;

		let controlY = startY - curvature;
		let d = `M ${startX},${startY} Q ${(startX + endX) / 2},${controlY} ${endX},${endY}`;
		pathD = d;
	};
	let init = () => {
		updatePath();

		const resizeObserver = new ResizeObserver((entries) => {
			// For all entries, recalculate the path
			for (let entry of entries) {
				updatePath();
			}
		});

		// Observe the container element
		if (containerRef) {
			resizeObserver.observe(containerRef);
		}

		// Call the updatePath initially to set the initial path
	};
	onMount(async () => {
		await tick();
		init();
	});

</script>

<svg
	fill="none"
	width={svgDimensions.width}
	height={svgDimensions.height}
	xmlns="http://www.w3.org/2000/svg"
	class={cn('pointer-events-none absolute top-0 left-0 transform-gpu stroke-2', className)}
	viewBox={`0 0 ${svgDimensions.width} ${svgDimensions.height}`}
>
	<path
		d={pathD}
		stroke={pathColor}
		stroke-width={pathWidth}
		stroke-opacity={pathOpacity}
		stroke-linecap="round"
	/>
	<path
		d={pathD}
		stroke-width={pathWidth}
		stroke={`url(#${id})`}
		stroke-opacity="1"
		stroke-linecap="round"
	/>
	<defs>
		<M.linearGradient
			class="transform-gpu"
			{id}
			gradientUnits={'userSpaceOnUse'}
			initial={{
				x1: '0%',
				x2: '0%',
				y1: '0%',
				y2: '0%'
			}}
			animate={{
				x1: gradientCoordinates.x1,
				x2: gradientCoordinates.x2,
				y1: gradientCoordinates.y1,
				y2: gradientCoordinates.y2
			}}
			transition={{
				delay,
				duration,
				ease: [0.16, 1, 0.3, 1], // https://easings.net/#easeOutExpo
				repeat: Infinity,
				repeatDelay: 0
			}}
		>
			<stop stop-color={gradientStartColor} stop-opacity="0"></stop>
			<stop stop-color={gradientStartColor}></stop>
			<stop offset="32.5%" stop-color={gradientStopColor}></stop>
			<stop offset="100%" stop-color={gradientStopColor} stop-opacity="0"></stop>
		</M.linearGradient>
	</defs>
</svg>
