import type { MagicComponent } from '$lib/components/setup/magic/types';
import BorderBeam from '$lib/components/sv/magic/special-effects/border-beam/border-beam.svelte';
import BorderBeamExample from './examples/border-beam-example.svelte';
import BorderBeamExampleCode from './examples/border-beam-example.svelte?raw';
import BorderBeamCode from '$lib/components/sv/magic/special-effects/border-beam/border-beam.svelte?raw';

export let magic: MagicComponent = {
	name: 'Border Beam',
	desc: 'A border beam is a button that shows a border beam effect when hovered over.',
	previewComp: BorderBeamExample,
	previewCode: {
		filecode: BorderBeamExampleCode,
		filename: 'border-beam-example.svelte',
		lang: 'svelte'
	},
	component: BorderBeam,
	code: {
		filecode: BorderBeamCode,
		filename: 'border-beam.svelte',
		lang: 'svelte'
	},
	tailwind: `@theme inline {
	--animate-border-beam: border-beam calc(var(--duration) * 1s) linear infinite;

	@keyframes border-beam {
		100% {
			offset-distance: 100%;
		}
	}
}	`
};
