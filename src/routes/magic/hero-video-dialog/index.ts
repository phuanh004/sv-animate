import type { MagicComponent } from '$lib/components/setup/magic/types';
import HeroVideoDialog from '$lib/components/sv/magic/components/hero-video-dialog.svelte';
import HeroVideoDialogCode from '$lib/components/sv/magic/components/hero-video-dialog.svelte?raw';
// Examples
import HeroVideoExample from './examples/hero-video-example.svelte';
import HeroVideoExampleCode from './examples/hero-video-example.svelte?raw';

export let magic: MagicComponent = {
	name: 'Hero Video Dialog',
	desc: 'A dialog that displays a hero video with a title and description.',
	previewComp: HeroVideoExample,
	previewCode: {
		filecode: HeroVideoExampleCode,
		filename: 'hero-video-example.svelte',
		lang: 'svelte',
		highlight: [2, [11, 17]]
	},
	component: HeroVideoDialog,
	code: {
		filecode: HeroVideoDialogCode,
		filename: 'hero-video-dialog.svelte',
		lang: 'svelte'
	}
};
