<script>
	import Particles from '$lib/components/sv/magic/special-effects/particles.svelte';
	import { mode } from 'mode-watcher';
	import { watch } from 'runed';
	let color = $state('#ffffff');
	watch(
		() => mode.current,
		() => {
			if (mode.current === 'dark') {
				color = '#ffffff';
			} else {
				color = '#000000';
			}
		}
	);
</script>

<div
	class="bg-background relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border md:shadow-xl"
>
	<span
		class="pointer-events-none bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl leading-none font-semibold whitespace-pre-wrap text-transparent dark:from-white dark:to-slate-900/10"
	>
		Svelte Particles
	</span>
	<Particles {color} class="absolute inset-0"/>
</div>
