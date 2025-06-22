<script lang="ts">
	import { Motion, AnimatePresence } from 'motion-start';
	import { inview } from 'svelte-inview';
	import { cn } from '$lib/utils';

	let isInView = $state('hidden');

	interface Props {
		duration?: number;
		delay?: number;
		yOffset?: number;
		inViewMargin?: string;
		blur?: string;
		id?: any;
		once?: boolean;
		class?: string;
		children?: import('svelte').Snippet;
	}

	let {
		duration = 0.4,
		delay = 0,
		yOffset = 6,
		inViewMargin = '-50px',
		blur = '6px',
		id = crypto.randomUUID().slice(0, 8),
		once = false,
		class: className = '',
		children
	}: Props = $props();

	let defaultVariants = {
		hidden: { opacity: 0, y: yOffset, filter: `blur(${blur})` },
		visible: { opacity: 1, y: 0, filter: `blur(0px)` }
	};
</script>

<AnimatePresence list={[{ key: id }]}>
	<Motion.div
		initial="hidden"
		animate={isInView}
		exit="hidden"
		variants={defaultVariants}
		transition={{
			delay: 0.04 + delay,
			duration,
			ease: 'easeOut'
		}}
	>
		<div
			use:inview={{ rootMargin: inViewMargin, unobserveOnEnter: once }}
			oninview_change={({ detail }) => {
				isInView = detail.inView ? 'visible' : 'hidden';
			}}
			class={cn(className)}
		>
			{#if children}
				{@render children()}
			{:else}
				Default
			{/if}
		</div>
	</Motion.div>
</AnimatePresence>
