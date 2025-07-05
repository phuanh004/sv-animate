import type { MagicComponent } from '$lib/components/setup/magic/types';

import DockIconCode from '$lib/components/sv/magic/components/dock/dock-icon.svelte?raw';
import DockCode from '$lib/components/sv/magic/components/dock/dock.svelte?raw';
// Examples
import DockExample from './examples/dock-example.svelte';
import DockExampleCode from './examples/dock-example.svelte?raw';

import DockMagificationExample from './examples/dock-magification-example.svelte';
import DockMagificationExampleCode from './examples/dock-magification-example.svelte?raw';

import DockCustomDirectionExample from './examples/dock-custom-direction-example.svelte';
import DockCustomDirectionExampleCode from './examples/dock-custom-direction-example.svelte?raw';

export let magic: MagicComponent = {
	name: 'Dock Menu',
	desc: '',
	previewComp: DockExample,
	previewCode: {
		filecode: DockExampleCode,
		filename: 'dock-example.svelte'
	},
	code: [
		{
			filecode: DockCode,
			filename: 'Dock.svelte',
			lang: 'svelte'
		},
		{
			filecode: DockIconCode,
			filename: 'DockIcon.svelte',
			lang: 'svelte'
		}
	],

	examples: [
		{
			name: 'Dock Example',
			component: DockExample,
			code: {
				filecode: DockExampleCode,
				filename: 'dock-example.svelte',
				isExpand: true
			}
		},
		{
			name: 'Dock Magification Example',
			component: DockMagificationExample,
			code: {
				filecode: DockMagificationExampleCode,
				filename: 'dock-magification-example.svelte',
				isExpand: true
			}
		},
    {
      name:'Dock Custom Direction',
      component: DockCustomDirectionExample,
      code: {
        filecode: DockCustomDirectionExampleCode,
        filename: 'dock-custom-direction-example.svelte',
        isExpand: true
      }
		}
	]
};
