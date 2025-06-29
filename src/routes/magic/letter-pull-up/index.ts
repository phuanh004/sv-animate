import type { MagicComponent } from '$lib/components/setup/magic/types';
import LetterPullUp from '$lib/components/sv/magic/text-animations/letter-pull-up.svelte';
import LetterPullUpCode from '$lib/components/sv/magic/text-animations/letter-pull-up.svelte?raw';
import LetterPullUpExample from './examples/letter-pull-up-example.svelte';
import LetterPullUpExampleCode from './examples/letter-pull-up-example.svelte?raw';

export let magic: MagicComponent = {
	name: 'Letter Pull Up',
	desc: 'Animate letters in a word to pull up with a bounce effect.',
	previewComp: LetterPullUpExample,
	previewCode: {
		filecode: LetterPullUpExampleCode,
		filename: 'letter-pull-up-example.svelte',
		lang: 'svelte'
	},
	component: LetterPullUp,
	code: {
		filename: 'letter-pull-up.svelte',
		filecode: LetterPullUpCode,
		lang: 'svelte'
	}
};
