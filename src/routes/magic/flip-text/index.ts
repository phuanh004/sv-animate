import type { MagicComponent } from '$lib/components/setup/magic/types';
import FlipText from '$lib/components/sv/magic/text-animations/flip-text.svelte';
import FlipTextCode from '$lib/components/sv/magic/text-animations/flip-text.svelte?raw';
import FlipTextExample from './examples/flip-text-example.svelte';
import FlipTextExampleCode from './examples/flip-text-example.svelte?raw';

export let magic: MagicComponent = {
	name: 'Gradual Spacing',
	desc: 'Animate letters in a word to gradually increase spacing with a bounce effect.',
	previewComp: FlipTextExample,
	previewCode: {
		filename: 'flip-text-example.svelte',
		filecode: FlipTextExampleCode,
		lang: 'svelte'
	},
	component: FlipText,
	code: {
		filename: 'flip-text.svelte',
		filecode: FlipTextCode,
		lang: 'svelte'
	}
};
