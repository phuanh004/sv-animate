<script>
	import GridPattern from '$lib/components/sv/magic/backgrounds/GridPattern.svelte';
	import { cn } from '$lib/utils';
</script>

<div
	class="bg-background relative flex h-fit w-full max-w-[36rem] items-center justify-center overflow-hidden rounded-lg border p-20 md:shadow-xl"
>
	<p
		class="z-10 text-center text-5xl font-medium tracking-tighter whitespace-pre-wrap text-black dark:text-white"
	>
		Grid Pattern
	</p>
	<GridPattern
		width={20}
		height={20}
		x={-1}
		y={-1}
		class={cn('[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] ')}
	/>
</div>
