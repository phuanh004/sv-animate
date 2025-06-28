<script>
	import FlickeringGrid from '$lib/components/sv/magic/backgrounds/flickering-grid.svelte';

	// Scroll down to see the original component
</script>

<div
	class="bg-background relative mx-auto h-64 w-full overflow-hidden rounded-lg border md:h-[400px] md:w-[60%]"
>
	<FlickeringGrid
		class="absolute inset-0 z-0 size-full"
		squareSize={4}
		gridGap={6}
		color="#6B7280"
		maxOpacity={0.5}
		flickerChance={0.1}
		width={630}
		height={400}
	/>
</div>
