import type { MagicComponent } from '$lib/components/setup/magic/types';
import AnimatedShinyText from '$lib/components/sv/magic/animated-shiny-text/AnimatedShinyText.svelte';
import AnimatedShinyTextCode from '$lib/components/sv/magic/animated-shiny-text/AnimatedShinyText.svelte?raw';
import AnimatedShinyTextExample from './example/animated-shiny-text-example.svelte';
import AnimatedShinyTextExampleCode from './example/animated-shiny-text-example.svelte?raw';

export let magic: MagicComponent = {
	name: 'Animated Shiny Text',
	desc: 'Create a shiny text effect that animates across the text, giving it a glowing appearance.',
	previewComp: AnimatedShinyTextExample,
	previewCode: {
		filename: 'animated-shiny-text-example.svelte',
		filecode: AnimatedShinyTextExampleCode,
		lang: 'svelte',
    isExpand: true,
	},
	component: AnimatedShinyText,
	code: {
		filename: 'animated-shiny-text.svelte',
		filecode: AnimatedShinyTextCode,
		lang: 'svelte'
	}
};
