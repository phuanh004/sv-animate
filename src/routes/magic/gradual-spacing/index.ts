import type { MagicComponent } from '$lib/components/setup/magic/types';
import GradualSpacing from '$lib/components/sv/magic/text-animations/gradual-spacing.svelte';
import GradualSpacingCode from '$lib/components/sv/magic/text-animations/gradual-spacing.svelte?raw';
import GradualSpacingExample from './examples/gradual-spacing-example.svelte';
import GradualSpacingExampleCode from './examples/gradual-spacing-example.svelte?raw';

export let magic: MagicComponent = {
	name: 'Gradual Spacing',
	desc: 'Animate the spacing between letters in a word to create a gradual pull-up effect.',
	previewComp: GradualSpacingExample,
	previewCode: {
		filename: 'gradual-spacing-example.svelte',
		filecode: GradualSpacingExampleCode,
		lang: 'svelte'
	},
  component: GradualSpacing,
  code:{
    filename: 'gradual-spacing.svelte',
    filecode: GradualSpacingCode,
    lang: 'svelte'
  }
};
