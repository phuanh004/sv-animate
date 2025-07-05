<script lang="ts">
	import { Motion } from 'motion-start';
	import { type VariantProps, tv } from 'tailwind-variants';
	import { cn } from '$lib/utils';
	import type { Snippet } from 'svelte';

	let dockVariants = tv({
		base: 'mx-auto w-max mt-8 h-[58px] p-2 flex gap-2 rounded-2xl border supports-backdrop-blur:bg-white/10 supports-backdrop-blur:dark:bg-black/10 backdrop-blur-md'
	});

	interface DockProps extends VariantProps<typeof dockVariants> {
		className?: string;
		magnification?: number;
		distance?: number;
		direction?: 'top' | 'middle' | 'bottom';
	}

	interface Props {
		class?: DockProps['className'];
		magnification?: DockProps['magnification'];
		distance?: DockProps['distance'];
		direction?: DockProps['direction'];
		child?: Snippet<[{ mouseX: number; magnification: number; distance: number }]>;
	}

	let {
		class: className = undefined,
		magnification = 60,
		distance = 140,
		direction = 'middle',
		child
	}: Props = $props();

	let dockElement: HTMLDivElement | null = $state(null);
	let mouseX = $state(Infinity);
	function handleMouseMove(e: MouseEvent) {
		mouseX = e.pageX;
	}

	function handleMouseLeave() {
		mouseX = Infinity;
	}

	let dockClass = cn(dockVariants({ className }), {
		'items-start': direction === 'top',
		'items-center': direction === 'middle',
		'items-end': direction === 'bottom'
	});
</script>

<Motion.div>
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div
		bind:this={dockElement}
		onmousemove={(e: MouseEvent) => handleMouseMove(e)}
		onmouseleave={handleMouseLeave}
		class={dockClass}
	>
		{#if child}
			{@render child({ mouseX, magnification, distance })}
		{:else}
			<!-- Your Content -->
			Default
		{/if}
	</div>
</Motion.div>
