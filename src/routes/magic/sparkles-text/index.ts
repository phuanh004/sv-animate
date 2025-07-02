import type { MagicComponent } from '$lib/components/setup/magic/types';
import SparkleText from '$lib/components/sv/magic/text-animations/sparkle-text.svelte';
import SparklesTextExample from './examples/sparkles-text-example.svelte';
import SparklesTextExampleCode from './examples/sparkles-text-example.svelte?raw';
import SparkleTextCode from '$lib/components/sv/magic/text-animations/sparkle-text.svelte?raw';

export let magic: MagicComponent = {
	name: 'Sparkles Text',
	desc: 'A text that displays a sparkles effect.',
	previewComp: SparklesTextExample,
	previewCode: {
		filecode: SparklesTextExampleCode,
		filename: 'sparkles-text-example.svelte',
		lang: 'svelte'
	},
	component: SparkleText,
	code: {
		filecode: SparkleTextCode,
		filename: 'sparkle-text.svelte',
		lang: 'svelte'
	}
};
