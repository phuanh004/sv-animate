import type { MagicComponent } from '$lib/components/setup/magic/types';
import AuroraText from '$lib/components/sv/magic/text-animations/aurora-text.svelte';
import AuroraTextCode from '$lib/components/sv/magic/text-animations/aurora-text.svelte?raw';
import AuroraTextExample from './examples/aurora-text-example.svelte';
import AuroraTextExampleCode from './examples/aurora-text-example.svelte?raw';

export let magic: MagicComponent = {
	name: 'Aurora Text',
	desc: 'Aurora Text is a component that allows you to create an aurora text.',
	previewComp: AuroraTextExample,
	previewCode: {
		filecode: AuroraTextExampleCode,
		lang: 'svelte',
		filename: 'AuroraTextExample.svelte'
	},
  code: {
    filename: 'AuroraText.svelte',
    filecode: AuroraTextCode,
    lang: 'svelte'
  },
	tailwind:`@theme inline {
  --animate-aurora: aurora 8s ease-in-out infinite alternate;

  @keyframes aurora {
    0% {
      background-position: 0% 50%;
      transform: rotate(-5deg) scale(0.9);
    }
    25% {
      background-position: 50% 100%;
      transform: rotate(5deg) scale(1.1);
    }
    50% {
      background-position: 100% 50%;
      transform: rotate(-3deg) scale(0.95);
    }
    75% {
      background-position: 50% 0%;
      transform: rotate(3deg) scale(1.05);
    }
    100% {
      background-position: 0% 50%;
      transform: rotate(-5deg) scale(0.9);
    }
  }
}`
};
