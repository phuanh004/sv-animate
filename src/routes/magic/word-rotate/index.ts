import type { MagicComponent } from '$lib/components/setup/magic/types';
import WordRotate from '$lib/components/sv/magic/text-animations/word-rotate.svelte';
import WordRotateCode from '$lib/components/sv/magic/text-animations/word-rotate.svelte?raw';
import WordRotateExample from './examples/word-rotate-example.svelte';
import WordRotateExampleCode from './examples/word-rotate-example.svelte?raw';

export let magic: MagicComponent = {
	name: 'Words Rotate',
	desc: 'Rotate words in a sentence with a fade-in effect.',
	previewComp: WordRotateExample,
	previewCode: {
		filename: 'word-rotate-example.svelte',
		filecode: WordRotateExampleCode,
		lang: 'svelte'
	},
  component: WordRotate,
  code:{
    filename: 'word-rotate.svelte',
    filecode: WordRotateCode,
    lang: 'svelte'
  }
};
