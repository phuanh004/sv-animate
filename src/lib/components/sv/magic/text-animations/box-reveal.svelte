<script lang="ts">
	import { inview } from 'svelte-inview';
	import { Motion, useAnimation } from 'motion-start';
	import type { Snippet } from 'svelte';
	type Props = {
		width?: string;
		boxColor?: string;
		duration?: number;
		children?: Snippet;
	};

	let { width = 'fit-content', boxColor = '#5046e6', duration = 0.5, children }: Props = $props();

	//   Animation Controls
	let mainControls = useAnimation();
	let sideControls = useAnimation();

	let viewEnter = () => {
		// console.log("view entered");
		mainControls.start('visible');
		sideControls.start('visible');
	};
	let viewLeave = () => {
		// console.log("view exited");
		mainControls.start('hidden');
		sideControls.start('hidden');
	};
</script>

<div
	class="relative overflow-hidden"
	style="width:{width}"
	use:inview
	oninview_enter={viewEnter}
	oninview_leave={viewLeave}
>
	<Motion.div
		variants={{
			hidden: { opacity: 0, y: 75 },
			visible: { opacity: 1, y: 0 }
		}}
		initial="hidden"
		animate={mainControls}
		transition={{ duration: duration ? duration : 0.5, delay: 0.25 }}
	>
		{#if children}
			{@render children()}
		{:else}
			Default
		{/if}
	</Motion.div>
	<Motion.div
		variants={{
			hidden: { left: 0 },
			visible: { left: '100%' }
		}}
		initial="hidden"
		animate={sideControls}
		transition={{ duration: duration ? duration : 0.5, ease: 'easeIn' }}
		style={{
			background: boxColor
		}}
		class="absolute top-[4px] right-0 bottom-[4px] left-0 z-40"
	>
		<div
			style="background:{boxColor}"
			class="absolute top-[4px] right-0 bottom-[4px] left-0 z-40"
		></div>
	</Motion.div>
</div>
