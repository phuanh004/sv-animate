import MarqueeExample from './examples/marquee-example.svelte';
import MarqueeExampleCode from './examples/marquee-example.svelte?raw';
import type { MagicComponent } from '$lib/components/setup/magic/types';
import Marquee from '$lib/components/sv/magic/marquee/Marquee.svelte';
import MarqueeCode from '$lib/components/sv/magic/marquee/Marquee.svelte?raw';

export let magic: MagicComponent = {
	name: 'Marquee',
	desc: 'A marquee is a component that displays a scrolling text.',
	previewComp: MarqueeExample,
	previewCode: {
		filecode: MarqueeExampleCode,
		filename: 'marquee-example.svelte',
		lang: 'svelte'
	},
	code: {
		filecode: MarqueeCode,
		filename: 'marquee.svelte',
		lang: 'svelte'
	},
	component: Marquee,
	tailwind: `@theme inline {
	--animate-marquee: marquee var(--duration) linear infinite;
	--animate-marquee-vertical: marquee-vertical var(10s, --duration) linear infinite;

	@keyframes marquee {
		from {
			transform: translateX(0);
		}
		to {
			transform: translateX(calc(-100% - var(--gap)));
		}
	}
	@keyframes marquee-vertical {
		from {
			transform: translateY(0);
		}
		to {
			transform: translateY(calc(-100% - var(--gap)));
		}
	}
}`
};
