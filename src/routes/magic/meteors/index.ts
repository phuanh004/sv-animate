import type { MagicComponent } from '$lib/components/setup/magic/types';
import Meteors from '$lib/components/sv/magic/special-effects/meteors/meteors.svelte';
import MeteorsCode from '$lib/components/sv/magic/special-effects/meteors/meteors.svelte?raw';
import MeteorsExample from './examples/meteors-example.svelte';
import MeteorsExampleCode from './examples/meteors-example.svelte?raw';

export let magic: MagicComponent = {
	name: 'Meteors',
	desc: 'A meteors is a button that shows a meteors effect when hovered over.',
	previewComp: MeteorsExample,
	previewCode: {
		filecode: MeteorsExampleCode,
		filename: 'meteors-example.svelte',
		lang: 'svelte'
	},
	component: Meteors,
	code: {
		filecode: MeteorsCode,
		filename: 'meteors.svelte',
		lang: 'svelte'
	}
};
