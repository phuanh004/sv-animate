import type { MagicComponent } from '$lib/components/setup/magic/types';
import AnimatedGradientText from '$lib/components/sv/magic/text-animations/animated-gradient-text.svelte';
import AnimatedGradientTextCode from '$lib/components/sv/magic/text-animations/animated-gradient-text.svelte?raw';
import AnimatedGradientTextExample from './example/animated-gradient-text-example.svelte';
import AnimatedGradientTextExampleCode from './example/animated-gradient-text-example.svelte?raw';

export let magic: MagicComponent = {
	name: 'Animated Gradient Text',
	desc: 'Create a text effect with animated gradient colors that change over time, giving a vibrant and dynamic look.',
	previewComp: AnimatedGradientTextExample,
	previewCode: {
		filename: 'animated-gradient-text-example.svelte',
		filecode: AnimatedGradientTextExampleCode,
		lang: 'svelte'
	},
	component: AnimatedGradientText,
	code: {
		filename: 'animated-gradient-text.svelte',
		filecode: AnimatedGradientTextCode,
		lang: 'svelte'
	},
	tailwind: `@theme inline {
	--animate-gradient: gradient 6s linear infinite;

	@keyframes gradient {
		to {
			background-position: 200% center;
		}
	}
}`
};
