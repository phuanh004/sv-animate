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
	},
	tailwind: `@theme inline {
	--animate-orbit: orbit calc(var(--duration) * 1s) linear infinite;

	@keyframes orbit {
		0% {
			transform: rotate(0deg) translateY(calc(var(--radius) * 1px)) rotate(0deg);
		}
		100% {
			transform: rotate(360deg) translateY(calc(var(--radius) * 1px)) rotate(-360deg);
		}
	}
}`
};
