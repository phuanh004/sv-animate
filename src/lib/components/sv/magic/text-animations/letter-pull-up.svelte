<script lang="ts">
	import { cn } from '$lib/utils';
	import { Motion } from 'motion-start';

	interface Props {
		words?: string;
		delay?: number;
		class?: any;
	}

	let { words = 'Letter Pull Up', delay = 0.05, class: className = '' }: Props = $props();

	let pullupVariant = {
		hidden: { y: 100, opacity: 0 },
		visible: (i: any) => ({
			y: 0,
			opacity: 1,
			transition: { delay: i * delay }
		})
	};
	let letters = $derived(words.split(''));
</script>

<div class="flex justify-center">
	{#each letters as letter, i}
		<Motion.h1
			variants={pullupVariant}
			initial="hidden"
			animate="visible"
			custom={i}
			class={cn(
				'font-display text-center text-4xl font-bold tracking-[-0.02em] text-black drop-shadow-sm md:text-4xl md:leading-[5rem] dark:text-white',
				className
			)}
		>
			{#if letter === ' '}
				<span>&nbsp;</span>
			{:else}
				{letter}
			{/if}
		</Motion.h1>
	{/each}
</div>
