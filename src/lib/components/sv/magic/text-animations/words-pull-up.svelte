<script lang="ts">
	import { cn } from '$lib/utils';
	import { Motion } from 'motion-start';

	interface Props {
		words?: string;
		wrapperFramerProps?: any;
		framerProps?: any;
		class?: any;
	}

	let {
		words = 'Pull Up',
		wrapperFramerProps = {
			hidden: { opacity: 0 },
			show: {
				opacity: 1,
				transition: {
					staggerChildren: 0.25
				}
			}
		},
		framerProps = {
			hidden: { y: 20, opacity: 0 },
			show: { y: 0, opacity: 1 }
		},
		class: className = ''
	}: Props = $props();

	let wordSplit = $derived(words.split(' '));
</script>

<Motion.div
	class={cn(
		'font-display text-center text-4xl leading-[5rem] font-bold tracking-[-0.02em] drop-shadow-sm',
		className
	)}
	variants={wrapperFramerProps}
	initial="hidden"
	animate="show"
>
	{#each wordSplit as word, i}
		<Motion.span variants={framerProps} class="inline-block pr-[8px]">
			{#if word === ''}
				<span>&nbsp;</span>
			{:else}
				{word}
			{/if}
		</Motion.span>
	{/each}
</Motion.div>
