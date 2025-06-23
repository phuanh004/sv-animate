<script lang="ts">
	import { cn } from '$lib/utils';
	import { Motion } from 'motion-start';

	interface Props {
		class?: any;
		words?: string;
		delay?: number;
		variants?: any;
	}

	let {
		class: className = '',
		words = 'Fade In',
		delay = 0.19,
		variants = {
			hidden: { opacity: 0 },
			visible: (i: any) => ({
				y: 0,
				opacity: 1,
				transition: { delay: i * delay }
			})
		}
	}: Props = $props();
	let wordsspilit = words.split(' ');
</script>

<Motion.h1
	{variants}
	initial="hidden"
	animate="visible"
	class={cn(
		'font-display text-center text-4xl font-bold tracking-[-0.02em] text-black drop-shadow-sm md:text-7xl md:leading-[5rem] dark:text-white',
		className
	)}
>
	{#each wordsspilit as word, i}
		<Motion.span {variants} custom={i}>
			{word}
		</Motion.span>
	{/each}
</Motion.h1>
