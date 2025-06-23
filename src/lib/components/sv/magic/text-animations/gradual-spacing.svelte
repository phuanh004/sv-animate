<script lang="ts">
	import { cn } from '$lib/utils';
	import { AnimatePresence, Motion } from 'motion-start';

	interface Props {
		class?: any;
		words?: string;
		duration?: number;
		delayMultiple?: number;
		framerProps?: any;
	}

	let {
		class: className = 'Gradual Spacing',
		words = 'Gradual Spacing',
		duration = 0.5,
		delayMultiple = 0.04,
		framerProps = {
			hidden: { opacity: 0, x: -20 },
			visible: { opacity: 1, x: 0 }
		}
	}: Props = $props();
	let wordsspilit = $derived(words.split(''));
</script>

<div class="flex justify-center space-x-1">
	<AnimatePresence list={[{ key: wordsspilit }]}>
		{#each wordsspilit as char, i}
			<Motion.span
				initial="hidden"
				animate="visible"
				exit="hidden"
				variants={framerProps}
				transition={{
					duration: duration,
					delay: i * delayMultiple
				}}
				class={cn('drop-shadow-sm', className)}
			>
				{#if char === ' '}
					<span>&nbsp;</span>
				{:else}
					{char}
				{/if}
			</Motion.span>
		{/each}
	</AnimatePresence>
</div>
