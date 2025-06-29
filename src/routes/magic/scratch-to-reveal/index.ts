import type { MagicComponent } from '$lib/components/setup/magic/types';
import ScratchToRevealExample from './examples/scratch-to-reveal-example.svelte';
import ScratchToRevealExampleCode from './examples/scratch-to-reveal-example.svelte?raw';
import ScratchToReveal from '$lib/components/sv/magic/special-effects/scratch-to-reveal.svelte';
import ScratchToRevealCode from '$lib/components/sv/magic/special-effects/scratch-to-reveal.svelte?raw';
export let magic: MagicComponent = {
	name: 'Scratch to Reveal',
	desc: 'A scratch to reveal is a component that reveals content when scratched.',
	previewComp: ScratchToRevealExample,
	previewCode: {
		filecode: ScratchToRevealExampleCode,
		filename: 'scratch-to-reveal-example.svelte',
		lang: 'svelte'
	},
	code: {
		filecode: ScratchToRevealCode,
		filename: 'scratch-to-reveal.svelte',
		lang: 'svelte'
	},
	component: ScratchToReveal
};
