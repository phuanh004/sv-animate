<script>
	import DotPattern from '$lib/components/sv/magic/backgrounds/dot-pattern.svelte';
</script>

<div
	class="bg-background relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg border p-20 md:shadow-xl"
>
	<!-- Just Delete this P tag for Viewing the Dot Center Pattern -->
	<p class="z-10 text-center text-5xl font-medium whitespace-pre-wrap text-black dark:text-white">
		Svelte
	</p>
	<DotPattern class="[mask-image:radial-gradient(200px_circle_at_center,white,transparent)]" />
</div>
