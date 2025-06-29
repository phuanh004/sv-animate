import type { MagicComponent } from "$lib/components/setup/magic/types";
import InteractiveHoverExample from "./examples/interactive-hover-example.svelte";
import InteractiveHoverExampleCode from "./examples/interactive-hover-example.svelte?raw";
import InteractiveHoverButton from "$lib/components/sv/magic/buttons/interactive-hover-button.svelte";
import InteractiveHoverButtonCode from "$lib/components/sv/magic/buttons/interactive-hover-button.svelte?raw";


export let magic: MagicComponent = {
  name: 'Interactive Hover',
  desc: 'A interactive hover is a button that shows a interactive hover effect when hovered over.',
  previewComp: InteractiveHoverExample,
  previewCode: {
    filecode: InteractiveHoverExampleCode,
    filename: 'interactive-hover-example.svelte',
    lang: 'svelte'
  },
  component: InteractiveHoverButton,
  code: {
    filecode: InteractiveHoverButtonCode,
    filename: 'interactive-hover-button.svelte',
    lang: 'svelte'
  }
}