<script lang="ts">
	import { cn } from '$lib/utils';
	import { AnimatePresence, Motion, type MotionProps } from 'motion-start';
	import { onMount, onDestroy } from 'svelte';

	interface Props {
		words?: string[];
		duration?: number;
		motionProps?: MotionProps;
		className?: string;
	}

	let {
		words = [],
		duration = 2000,
		motionProps = {
			initial: { opacity: 0, y: -50 },
			animate: { opacity: 1, y: 0 },
			exit: { opacity: 0, y: 50 },
			transition: { duration: 0.25, easing: 'ease-out' }
		},
		className = ''
	}: Props = $props();

	let index = $state(0);
	let interval: ReturnType<typeof setInterval>;

	onMount(() => {
		interval = setInterval(() => {
			index = (index + 1) % words.length;
		}, duration);
	});

	onDestroy(() => {
		clearInterval(interval);
	});
</script>

<div class="relative w-full py-2">
	<AnimatePresence list={[{ key: index }]} let:item>
		<!-- initial={{ opacity: 0, y: -50 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: 50 }}
			transition={{ duration: 0.25, easing: 'ease-out' }} -->
		<Motion.h1
			initial={motionProps.initial}
			animate={motionProps.animate}
			exit={motionProps.exit}
			transition={motionProps.transition}
		>
			<span
				class={[
					'absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-2',
					className
				]}
			>
				{words[item.key]}
			</span>
		</Motion.h1>
	</AnimatePresence>
</div>
