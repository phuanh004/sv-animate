import type { MagicComponent } from '$lib/components/setup/magic/types';
import BlurFade from '$lib/components/sv/magic/blur-fade/blur-fade.svelte';
import BlurFadeCode from '$lib/components/sv/magic/blur-fade/blur-fade.svelte?raw';
import BlurFadeExample from './examples/blur-fade-example.svelte';

export let blur_fade: MagicComponent = {
	name: 'Blur Fade',
	desc: 'A simple blur and fade animation that can be used to create a smooth transition effect.',
	code: {
		filecode: BlurFadeCode,
		filename: 'blur-fade.svelte',
		lang: 'svelte'
	},
  component: BlurFadeExample,
};
