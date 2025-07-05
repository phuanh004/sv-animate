<script lang="ts">
	import { onMount } from 'svelte';

	interface Props {
		class?: string;
		borderSize?: number;
		borderRadius?: number;
		neonColors?: any;
		children?: import('svelte').Snippet;
	}

	let {
		class: className = '',
		borderSize = 2,
		borderRadius = 20,
		neonColors = {
			firstColor: '#ff00aa',
			secondColor: '#00FFF1'
		},
		children
	}: Props = $props();

	let containerRef: HTMLDivElement | null = $state(null);
	let width = $state(0);
	let height = $state(0);

	function updateDimensions() {
		if (containerRef) {
			width = containerRef.offsetWidth;
			height = containerRef.offsetHeight;
		}
	}

	onMount(() => {
		updateDimensions();
		window.addEventListener('resize', updateDimensions);
		return () => window.removeEventListener('resize', updateDimensions);
	});
</script>

<div
	bind:this={containerRef}
	style="--border-size: {borderSize}px;
		--border-radius: {borderRadius}px;
		--neon-first-color: {neonColors.firstColor};
		--neon-second-color: {neonColors.secondColor};
		--card-width: {width}px;
		--card-height: {height}px;
		--card-content-radius: {borderRadius - borderSize}px;
		--pseudo-element-background-image: linear-gradient(0deg, {neonColors.firstColor}, {neonColors.secondColor});
		--pseudo-element-width: {width + borderSize * 2}px;
		--pseudo-element-height: {height + borderSize * 2}px;
		--after-blur: {width / 3}px;"
	class={['relative z-10 size-full rounded-[var(--border-radius)]', className]}
>
	<div
		class="
      before:animate-background-position-spin after:animate-background-position-spin relative size-full min-h-[inherit] rounded-[var(--card-content-radius)]
      bg-gray-100 p-6 before:absolute before:-top-[var(--border-size)] before:-left-[var(--border-size)]
      before:-z-10 before:block before:h-[var(--pseudo-element-height)] before:w-[var(--pseudo-element-width)]
      before:rounded-[var(--border-radius)] before:bg-[linear-gradient(0deg,var(--neon-first-color),var(--neon-second-color))]
      before:bg-[length:100%_200%]
      before:content-[''] after:absolute after:-top-[var(--border-size)] after:-left-[var(--border-size)] after:-z-10
      after:block after:h-[var(--pseudo-element-height)] after:w-[var(--pseudo-element-width)] after:rounded-[var(--border-radius)] after:bg-[linear-gradient(0deg,var(--neon-first-color),var(--neon-second-color))]
      after:bg-[length:100%_200%] after:opacity-80 after:blur-[var(--after-blur)]
      after:content-['']
      dark:bg-neutral-900
    "
	>
		{@render children?.()}
	</div>
</div>
