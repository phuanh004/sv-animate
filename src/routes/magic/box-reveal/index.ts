import type { MagicComponent } from '$lib/components/setup/magic/types';
import BoxReveal from '$lib/components/sv/magic/text-animations/box-reveal.svelte';
import BoxRevealCode from '$lib/components/sv/magic/text-animations/box-reveal.svelte?raw';
import BoxRevealExample from './examples/box-reveal-example.svelte';
import BoxRevealExampleCode from './examples/box-reveal-example.svelte?raw';

export let magic: MagicComponent = {
	name: 'Box Reveal',
	desc: 'Reveal a box with a smooth animation effect.',
	previewComp: BoxRevealExample,
	previewCode: {
		filename: 'box-reveal-example.svelte',
		filecode: BoxRevealExampleCode,
		lang: 'svelte'
	},
	component: BoxReveal,
	code: {
		filename: 'box-reveal.svelte',
		filecode: BoxRevealCode,
		lang: 'svelte'
	}
};
