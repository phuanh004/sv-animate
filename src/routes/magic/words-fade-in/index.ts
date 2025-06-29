import type { MagicComponent } from '$lib/components/setup/magic/types';
import WordsFadeIn from '$lib/components/sv/magic/text-animations/words-fade-in.svelte';
import WordsFadeInCode from '$lib/components/sv/magic/text-animations/words-fade-in.svelte?raw';
import WordsFadeInExample from './examples/words-fade-in-example.svelte';
import WordsFadeInExampleCode from './examples/words-fade-in-example.svelte?raw';

export let magic: MagicComponent = {
	name: 'Words Fade In',
	desc: 'A simple animation that fades in words with a smooth transition.',
	previewComp: WordsFadeInExample,
	previewCode: {
		filecode: WordsFadeInExampleCode,
		lang: 'svelte',
		filename: 'words-fade-in-example.svelte',
		isExpand: false
	},
  component: WordsFadeIn,
  code:{
    filecode: WordsFadeInCode,
    lang: 'svelte',
    filename: 'words-fade-in.svelte'
  }
};
