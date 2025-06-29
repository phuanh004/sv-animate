import type { MagicComponent } from '$lib/components/setup/magic/types';
import WordsPullUp from '$lib/components/sv/magic/text-animations/words-pull-up.svelte';
import WordsPullUpCode from '$lib/components/sv/magic/text-animations/words-pull-up.svelte?raw';
import WordsPullUpExample from './examples/words-pull-up-example.svelte';
import WordsPullUpExampleCode from './examples/words-pull-up-example.svelte?raw';

export let magic: MagicComponent = {
	name: 'Words Pull Up',
	desc: 'A simple animation that pulls up words with a fade effect.',
	previewComp: WordsPullUpExample,
	previewCode: {
		filecode: WordsPullUpExampleCode,
		lang: 'svelte',
		filename: 'words-pull-up-example.svelte',
		isExpand: false
	},
	component: WordsPullUp,
	code: {
		filecode: WordsPullUpCode,
		lang: 'svelte',
		filename: 'words-pull-up.svelte'
	}
};
