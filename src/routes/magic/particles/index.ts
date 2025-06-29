import type { MagicComponent } from '$lib/components/setup/magic/types';
import Particles from '$lib/components/sv/magic/special-effects/particles.svelte';
import ParticlesCode from '$lib/components/sv/magic/special-effects/particles.svelte?raw';
import ParticlesExample from './examples/particles-example.svelte';
import ParticlesExampleCode from './examples/particles-example.svelte?raw';

Particles;
export let magic: MagicComponent = {
	name: 'Particles',
	desc: 'A particles is a button that shows a particles effect when hovered over.',
	previewComp: ParticlesExample,
	previewCode: {
		filecode: ParticlesExampleCode,
		filename: 'particles-example.svelte',
		lang: 'svelte'
	},
	component: Particles,
	code: {
		filecode: ParticlesCode,
		filename: 'particles.svelte',
		lang: 'svelte'
	}
};
