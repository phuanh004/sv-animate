<script lang="ts">
	import AuroraText from '$lib/components/sv/magic/text-animations/aurora-text.svelte';
	import LineShadowText from '$lib/components/sv/magic/text-animations/line-shadow-text.svelte';
	import { mode } from 'mode-watcher';
</script>

<div class="flex h-screen items-center justify-center">
	<!-- <h1 class="text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl">
		Ship <AuroraText>beautiful</AuroraText>
	</h1> -->
	<h1
		class="text-5xl leading-none font-semibold tracking-tighter text-balance sm:text-6xl md:text-7xl lg:text-8xl"
	>
		Ship
		<LineShadowText
			text="Svelte"
			class="italic"
			shadowColor={mode.current === 'dark' ? 'white' : 'black'}
		></LineShadowText>
	</h1>
</div>
