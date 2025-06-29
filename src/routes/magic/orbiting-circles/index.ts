import type { MagicComponent } from '$lib/components/setup/magic/types';
import OrbitingCircles from '$lib/components/sv/magic/orbiting-circles/orbiting-circles.svelte';
import OrbitingCirclesCode from '$lib/components/sv/magic/orbiting-circles/orbiting-circles.svelte?raw';
import OrbitingCirclesExample from './examples/orbiting-circles-example.svelte';
import OrbitingCirclesExampleCode from './examples/orbiting-circles-example.svelte?raw';

export let magic: MagicComponent = {
	name: 'Orbiting Circles',
	desc: 'A orbiting circles is a button that shows a orbiting circles effect when hovered over.',
	previewComp: OrbitingCirclesExample,
	previewCode: {
		filecode: OrbitingCirclesExampleCode,
		filename: 'orbiting-circles-example.svelte',
		lang: 'svelte'
	},
	component: OrbitingCircles,
	code: {
		filecode: OrbitingCirclesCode,
		filename: 'orbiting-circles.svelte',
		lang: 'svelte'
	}
};
