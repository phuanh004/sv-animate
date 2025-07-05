<script lang="ts">
	import { cn } from '$lib/utils';
	import { Motion, useMotionValue, useSpring, useTransform } from 'motion-start';

	interface Props {
		magnification?: number;
		distance?: number;
		mouseX?: number;
		class?: string | undefined;
		children?: import('svelte').Snippet;
	}

	let {
		magnification = 60,
		distance = 160,
		mouseX = 0,
		class: className = '',
		children
	}: Props = $props();

	let mint = useMotionValue(mouseX);

	let iconElement: HTMLDivElement | null = $state(null);

	let distanceCalc = useTransform(mint, (val: number) => {
		const bounds = iconElement?.getBoundingClientRect() ?? { x: 0, width: 0 };
		return val - bounds.x - bounds.width / 2;
	});

	let widthSync = useTransform(distanceCalc, [-distance, 0, distance], [38, magnification, 38]);

	let width = useSpring(widthSync, {
		mass: 0.1,
		stiffness: 150,
		damping: 12
	});

	let iconClass = cn(
		'flex aspect-square cursor-pointer items-center justify-center rounded-full',
		className
	);
	$effect(() => {
		mint.set(mouseX);
	});

	const children_render = $derived(children);
</script>

<Motion.div style={{ width: width }}>
	<div bind:this={iconElement} class={iconClass}>
		{@render children_render?.()}
	</div>
</Motion.div>
