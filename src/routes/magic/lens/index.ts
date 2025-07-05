import type { MagicComponent } from '$lib/components/setup/magic/types';
import Lens from '$lib/components/sv/magic/components/lens.svelte';
import LensExample from './examples/lens-example.svelte';
import LensExampleCode from './examples/lens-example.svelte?raw';
import LensCode from '$lib/components/sv/magic/components/lens.svelte?raw';

export let magic: MagicComponent = {
	name: 'Lens',
	desc: 'Lens is a component that allows you to create a lens effect.',
	previewComp: LensExample,
	previewCode: {
		filecode: LensExampleCode,
		lang: 'svelte',
		filename: 'LensExample.svelte'
	},
	code: {
		filecode: LensCode,
		lang: 'svelte',
		filename: 'Lens.svelte'
	}
};
