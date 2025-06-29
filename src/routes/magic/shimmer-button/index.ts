import type { MagicComponent } from '$lib/components/setup/magic/types';
import ShimmerButton from '$lib/components/sv/magic/buttons/shimmer-button.svelte';
import ShimmerButtonCode from '$lib/components/sv/magic/buttons/shimmer-button.svelte?raw';
import ShimmerBtnExample from './examples/shimmer-btn-example.svelte';
import ShimmerBtnExampleCode from './examples/shimmer-btn-example.svelte?raw';

export let magic: MagicComponent = {
	name: 'Shimmer Button',
	desc: 'A shimmer button is a button that shows a shimmering effect when hovered over.',
	previewComp: ShimmerBtnExample,
	previewCode: {
		filecode: ShimmerBtnExampleCode,
		filename: 'shimmer-btn-example.svelte',
		lang: 'svelte'
	},
	component: ShimmerButton,
	code: {
		filecode: ShimmerButtonCode,
		filename: 'shimmer-button.svelte',
		lang: 'svelte'
	},
	tailwind: `@theme inline {
	--animate-shimmer: shimmer 2s infinite;

	@keyframes shimmer {
		0% {
			background-position: calc(-100% - var(--shimmer-width)) 0;
		}
		100% {
			background-position: calc(100% + var(--shimmer-width)) 0;
		}
	}
}`
};
