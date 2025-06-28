import type { MagicComponent } from '$lib/components/setup/magic/types';
import BlurFade from '$lib/components/sv/magic/blur-fade/blur-fade.svelte';
import BlurFadeCode from '$lib/components/sv/magic/blur-fade/blur-fade.svelte?raw';
import BlurFadeExample from './examples/blur-fade-example.svelte';
import BlurFadeExampleCode from './examples/blur-fade-example.svelte?raw';
import ImageBlurFadeExample from './examples/image-blur-fade-example.svelte';
import ImageBlurFadeExampleCode from './examples/image-blur-fade-example.svelte?raw';

export let blur_fade: MagicComponent = {
	name: 'Blur Fade',
	desc: 'A simple blur and fade animation that can be used to create a smooth transition effect.',
	code: {
		filecode: BlurFadeCode,
		filename: 'blur-fade.svelte',
		lang: 'svelte'
	},
	component: BlurFade,
	previewCode: {
		filecode: BlurFadeExampleCode,
		filename: 'blur-fade-example.svelte',
		lang: 'svelte'
	},
	previewComp: BlurFadeExample,
	examples: [
		{
			name: 'Image Blur Fade',
			component: ImageBlurFadeExample,
			code: {
				filecode: ImageBlurFadeExampleCode,
				filename: 'image-blur-fade-example.svelte',
				lang: 'svelte'
			}
		},
		{
			name: 'Blur Fade Example',
			component: BlurFadeExample,
			code: {
				filecode: BlurFadeExampleCode,
				filename: 'blur-fade-example.svelte',
				lang: 'svelte'
			}
		}
	]
};
