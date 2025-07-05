import type { MagicComponent } from '$lib/components/setup/magic/types';
import AuroraText from '$lib/components/sv/magic/text-animations/aurora-text.svelte';
import AuroraTextCode from '$lib/components/sv/magic/text-animations/aurora-text.svelte?raw';
import AuroraTextExample from './examples/aurora-text-example.svelte';
import AuroraTextExampleCode from './examples/aurora-text-example.svelte?raw';

export let magic: MagicComponent = {
	name: 'Aurora Text',
	desc: 'Aurora Text is a component that allows you to create an aurora text.',
	previewComp: AuroraTextExample,
	previewCode: {
		filecode: AuroraTextExampleCode,
		lang: 'svelte',
		filename: 'AuroraTextExample.svelte'
	},
  code: {
    filename: 'AuroraText.svelte',
    filecode: AuroraTextCode,
    lang: 'svelte'
  }
};
