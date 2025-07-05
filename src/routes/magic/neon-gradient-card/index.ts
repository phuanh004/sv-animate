import type { MagicComponent } from "$lib/components/setup/magic/types";
import NeonGradientCard from "$lib/components/sv/magic/special-effects/neon-gradient-card.svelte";
import NeonGradientCardCode from "$lib/components/sv/magic/special-effects/neon-gradient-card.svelte?raw";
import NeonGradientCardExample from "./examples/neon-gradient-card-example.svelte";
import NeonGradientCardExampleCode from "./examples/neon-gradient-card-example.svelte?raw";


export let magic: MagicComponent = {
  name: 'Neon Gradient Card',
  desc: 'Neon Gradient Card is a component that allows you to create a neon gradient card.',
  previewComp: NeonGradientCardExample,
  previewCode: {
    filecode: NeonGradientCardExampleCode,
    lang: 'svelte',
    filename: 'NeonGradientCardExample.svelte'
  },
  component: NeonGradientCard,
  code:{
    filename: 'NeonGradientCard.svelte',
    filecode: NeonGradientCardCode,
    lang: 'svelte'
  },
  tailwind:`@theme inline {
  --animate-background-position-spin: background-position-spin 3000ms infinite
    alternate;

  @keyframes background-position-spin {
    0% {
      background-position: top center;
    }
    100% {
      background-position: bottom center;
    }
  }
}
`
}