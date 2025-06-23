<script lang="ts">
	import { cn } from '$lib/utils';
	import { AnimatePresence, Motion } from 'motion-start';

	interface Props {
		word?: string;
		duration?: number;
		delayMultiple?: number;
		framerProps?: any;
		class?: any;
	}

	let {
		word = 'Flip Text',
		duration = 0.5,
		delayMultiple = 0.08,
		framerProps = {
			hidden: { rotateX: -90, opacity: 0 },
			visible: { rotateX: 0, opacity: 1 }
		},
		class: className = ''
	}: Props = $props();

	let wordsspilit = $derived(word.split(''));
</script>

<div class="flex justify-center space-x-2">
	<AnimatePresence list={[{ key: wordsspilit }]}>
		{#each wordsspilit as letter, i}
			<Motion.span
				initial="hidden"
				animate="visible"
				exit="hidden"
				variants={framerProps}
				transition={{
					duration: duration,
					delay: i * delayMultiple
				}}
				class={cn('origin-center drop-shadow-sm', className)}
			>
				{letter}
			</Motion.span>
		{/each}
	</AnimatePresence>
</div>
