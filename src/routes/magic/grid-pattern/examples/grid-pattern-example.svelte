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
		squares={[
			[4, 4],
			[5, 1],
			[8, 2],
			[5, 3],
			[5, 5],
			[10, 10],
			[12, 15],
			[15, 10],
			[10, 15],
			[15, 10],
			[10, 15],
			[15, 10]
		]}
		class={cn(
			'[mask-image:radial-gradient(200px_circle_at_center,white,transparent)]',
			'inset-x-0 inset-y-[-30%] h-[200%] skew-y-12'
		)}
		fillColor="rgb(156 163 175 / 0.3)"
	/>
</div>
