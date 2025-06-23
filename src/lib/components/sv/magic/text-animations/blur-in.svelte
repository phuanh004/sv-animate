<script lang="ts">
	import { cn } from '$lib/utils';
	import { Motion } from 'motion-start';

	interface Props {
		word?: string;
		variant?: {
			hidden: { filter: string; opacity: number };
			visible: { filter: string; opacity: number };
		};
		duration?: number;
		class?: string;
	}

	let {
		word = 'Blur In',
		variant = {
			hidden: { filter: 'blur(10px)', opacity: 0 },
			visible: { filter: 'blur(0px)', opacity: 1 }
		},
		duration = 1,
		class: className = ''
	}: Props = $props();

	let defaultVariants = {
		hidden: { filter: 'blur(10px)', opacity: 0 },
		visible: { filter: 'blur(0px)', opacity: 1 }
	};
	let combinedVariants = variant || defaultVariants;
</script>

<Motion.h1
	initial="hidden"
	animate="visible"
	transition={{ duration }}
	variants={combinedVariants}
	class={cn(
		className,
		'font-display text-center text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]'
	)}
>
	{word}
</Motion.h1>
