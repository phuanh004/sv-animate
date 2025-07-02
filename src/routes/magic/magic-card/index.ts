import type { MagicComponent } from '$lib/components/setup/magic/types';
import MagicCardExample from './examples/magic-card-simple.svelte';
import MagicCardExampleCode from './examples/magic-card-simple.svelte?raw';
import MagicCard from '$lib/components/sv/magic/backgrounds/magic-card.svelte';
import MagicCardCode from '$lib/components/sv/magic/backgrounds/magic-card.svelte?raw';

export let magic: MagicComponent = {
	name: 'Magic Card',
	desc: 'A card that displays a magic effect.',
	previewComp: MagicCardExample,
	previewCode: {
		filecode: MagicCardExampleCode,
		filename: 'magic-card-example.svelte',
		lang: 'svelte',
		highlight: [
			[2, 2],
			[11, 33]
		]
	},
	component: MagicCard,
	code: {
		filecode: MagicCardCode,
		filename: 'magic-card.svelte',
		lang: 'svelte'
	}
};
