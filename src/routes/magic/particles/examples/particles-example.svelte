<script>
	import Particles from '$lib/components/sv/magic/special-effects/particles.svelte';
</script>

<div
	class="bg-background relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border md:shadow-xl"
>
	<span
		class="pointer-events-none bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl leading-none font-semibold whitespace-pre-wrap text-transparent dark:from-white dark:to-slate-900/10"
	>
		Svelte Particles
	</span>
	<Particles className="absolute inset-0" refresh={true} />
</div>
