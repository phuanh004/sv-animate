import type { MagicComponent } from "$lib/components/setup/magic/types";
import ShineBorder from "$lib/components/sv/magic/special-effects/shine-border/shine-border.svelte";
import ShineBorderCode from "$lib/components/sv/magic/special-effects/shine-border/shine-border.svelte?raw";
import ShineBorderExample from "./examples/shine-border-example.svelte";
import ShineBorderExampleCode from "./examples/shine-border-example.svelte?raw";

export let magic : MagicComponent={
  name: 'Shine Border',
  desc: 'A shine border is a component that adds a shine border to an element.',
  previewComp: ShineBorderExample ,
  previewCode: {
    filecode: ShineBorderExampleCode,
    filename: 'shine-border-example.svelte',
    lang: 'svelte'
  },
  code:{
    filecode: ShineBorderCode,
    filename: 'shine-border.svelte',
    lang: 'svelte'
  },
  component: ShineBorder,
  tailwind: `@theme inline {
  --animate-shine-pulse: shine-pulse var(--duration) infinite linear;

  @keyframes shine-pulse {
		0% {
			background-position: 0 0;
		}
		50% {
			background-position: 100% 100%;
		}
		100% {
			background-position: 0 0;
		}
	}
}`
}