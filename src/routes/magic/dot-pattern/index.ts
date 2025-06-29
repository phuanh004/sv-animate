import type { MagicComponent } from '$lib/components/setup/magic/types';
import DotPattern from '$lib/components/sv/magic/backgrounds/dot-pattern.svelte';
import DotPatternExample from './example/dot-pattern-example.svelte';
import DotPatternExampleCode from './example/dot-pattern-example.svelte?raw';
import DotPatternCode from '$lib/components/sv/magic/backgrounds/dot-pattern.svelte?raw';
import CenterDots from './example/center-dots.svelte';
import CenterDotsCode from './example/center-dots.svelte?raw';
import LinearGradientDots from './example/linear-gradient-dots.svelte';
import LinearGradientDotsCode from './example/linear-gradient-dots.svelte?raw';

export let magic: MagicComponent = {
	name: 'Dot Pattern',
	desc: 'A dot pattern is a button that shows a dot pattern effect when hovered over.',
	previewComp: DotPatternExample,
	previewCode: {
		filecode: DotPatternExampleCode,
		filename: 'dot-pattern-example.svelte',
		lang: 'svelte'
	},
	component: DotPattern,
	code: {
		filecode: DotPatternCode,
		filename: 'dot-pattern.svelte',
		lang: 'svelte'
	},
	examples: [
		{
			name: 'Center Dots',
			component: CenterDots,
			code: {
				filecode: CenterDotsCode,
				filename: 'center-dots.svelte',
				lang: 'svelte'
			}
		},
    {
      name:'Linear Gradient Dots',
      component: LinearGradientDots,
      code:{
        filecode: LinearGradientDotsCode,
        filename: 'linear-gradient-dots.svelte',
        lang: 'svelte'
      }
    }
	]
};
