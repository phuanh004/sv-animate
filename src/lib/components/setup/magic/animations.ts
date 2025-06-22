import type { MagicComponent } from './types';
import ImageFadeExample from '$lib/components/examples/magic/image-fade-example.svelte';
import ImageFadeExampleCode from '$lib/components/examples/magic/image-fade-example.svelte?raw';
import TextFadeExample from '$lib/components/examples/magic/text-fade-example.svelte';
import TextFadeExampleCode from '$lib/components/examples/magic/text-fade-example.svelte?raw';
import BlurFadeCode from '$lib/components/sv/magic/blur-fade/blur-fade.svelte?raw';

export let magicAnimations: MagicComponent[] = [
	{
		id: 'blur-fade',
		name: 'Blur Fade',
		desc: 'Blur Fade is a simple animation that fades in and out with a blur effect.',
		link: '/magic/blur-fade',
		previewComp: TextFadeExample,
		previewCode: TextFadeExampleCode,
		code: {
			filename: 'BlurFade.svelte',
			filecode: BlurFadeCode
		},
		examples: [
			{
				id: 1,
				name: 'Text Fade',
				fileName: 'TextFade.svelte',
				component: TextFadeExample,
				code: TextFadeExampleCode,
				showDots: true
			},
			{
				id: 2,
				name: 'Image Fade',
				fileName: 'ImageFade.svelte',
				component: ImageFadeExample,
				code: ImageFadeExampleCode
			}
		]
	}
];
