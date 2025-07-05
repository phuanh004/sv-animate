<script lang="ts">
	import LineShadowText from '$lib/components/sv/magic/text-animations/line-shadow-text.svelte';
	import { mode } from 'mode-watcher';
</script>

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
