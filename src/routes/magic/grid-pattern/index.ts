import type { MagicComponent } from '$lib/components/setup/magic/types';
import GridPattern from '$lib/components/sv/magic/backgrounds/GridPattern.svelte';
import GridPatternCode from '$lib/components/sv/magic/backgrounds/GridPattern.svelte?raw';

// Examples
import GridPatternExample from './examples/grid-pattern-example.svelte';
import GridPatternExampleCode from './examples/grid-pattern-example.svelte?raw';
import DashedStrokeGrid from './examples/dashed-stroke-grid.svelte';
import DashedStrokeGridCode from './examples/dashed-stroke-grid.svelte?raw';
import LinearGradientGrid from './examples/linear-gradient-grid.svelte';
import LinearGradientGridCode from './examples/linear-gradient-grid.svelte?raw';

export let magic: MagicComponent = {
	name: 'Grid Pattern',
	desc: 'Grid Pattern is a component that allows you to create a grid pattern.',
	previewComp: GridPatternExample,
	previewCode: {
		filecode: GridPatternExampleCode,
		lang: 'svelte',
		filename: 'GridPatternExample.svelte'
	},
	component: GridPattern,
	code: {
		filecode: GridPatternCode,
		lang: 'svelte',
		filename: 'GridPattern.svelte'
	},
	examples: [
		{
			name: 'Grid Pattern Example',
			component: GridPatternExample,
			code: {
				filecode: GridPatternExampleCode,
				lang: 'svelte',
				filename: 'GridPatternExample.svelte'
			}
		},
		{
			name: 'Dashed Stroke',
			component: DashedStrokeGrid,
			code: {
				filecode: DashedStrokeGridCode,
				lang: 'svelte',
				filename: 'DashedStrokeGrid.svelte'
			}
		},
		{
			name: 'Linear Gradient',
			component: LinearGradientGrid,
			code: {
				filecode: LinearGradientGridCode,
				lang: 'svelte',
				filename: 'LinearGradientGrid.svelte'
			}
		}
	]
};
