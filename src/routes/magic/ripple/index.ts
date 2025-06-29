import type { MagicComponent } from '$lib/components/setup/magic/types';
import Ripple from '$lib/components/sv/magic/backgrounds/ripple.svelte';
import RippleCode from '$lib/components/sv/magic/backgrounds/ripple.svelte?raw';
import RippleExample from './examples/ripple-example.svelte';
import RippleExampleCode from './examples/ripple-example.svelte?raw';

export let magic: MagicComponent = {
	name: 'Ripple',
	desc: 'A ripple effect is a visual effect that creates a ripple animation when an element is clicked or hovered over.',
	previewComp: RippleExample,
	previewCode: {
		filecode: RippleExampleCode,
		filename: 'ripple-example.svelte',
		lang: 'svelte'
	},
	component: Ripple,
	code: {
		filecode: RippleCode,
		filename: 'ripple.svelte',
		lang: 'svelte'
	},
  tailwind: `@theme inline {
  --animate-ripple: ripple var(--duration, 2s) ease calc(var(--1, 0) * 0.2s) infinite;

  @keyframes ripple {
		0%,
		100% {
			transform: translate(-50%, -50%) scale(1);
		}
		50% {
			transform: translate(-50%, -50%) scale(0.9);
		}
	}
}`
};
