import type { MagicComponent } from '$lib/components/setup/magic/types';
import BlurIn from '$lib/components/sv/magic/text-animations/blur-in.svelte';
import BlurInCode from '$lib/components/sv/magic/text-animations/blur-in.svelte?raw';
import BlurInExample from './examples/blur-in-example.svelte';
import BlurInExampleCode from './examples/blur-in-example.svelte?raw';

export let magic: MagicComponent = {
	name: 'Blur In',
	desc: 'Animate text to blur in with a fade effect.',
	previewComp: BlurInExample,
	previewCode: {
		filename: 'blur-in-example.svelte',
		filecode: BlurInExampleCode,
		lang: 'svelte'
	},
	component: BlurIn,
	code: {
		filename: 'blur-in.svelte',
		filecode: BlurInCode,
		lang: 'svelte'
	}
};
