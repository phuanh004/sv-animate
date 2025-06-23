<script>
	import DotPattern from '$lib/components/sv/magic/backgrounds/dot-pattern.svelte';
</script>

<div
	class="bg-background relative mx-3 flex h-52 w-full items-center justify-center overflow-hidden rounded-lg border p-20 md:mx-0 md:shadow-xl lg:w-3/5"
>
	<p
		class="z-10 text-center text-5xl font-medium tracking-tighter whitespace-pre-wrap text-black dark:bg-gradient-to-br dark:from-white dark:via-neutral-400 dark:to-neutral-700 dark:bg-clip-text dark:text-transparent"
	>
		Gradient Dots
	</p>
	<DotPattern
		width={20}
		height={20}
		cx={10}
		cy={10}
		cr={1}
		class="[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] "
	/>
</div>
