import type { MagicComponent } from "$lib/components/setup/magic/types";
import FlickeringGridExample from "./examples/flickering-grid-example.svelte";
import FlickeringGridExampleCode from "./examples/flickering-grid-example.svelte?raw";
import FlickeringGrid from "$lib/components/sv/magic/backgrounds/flickering-grid.svelte";
import FlickeringGridCode from "$lib/components/sv/magic/backgrounds/flickering-grid.svelte?raw";

export let magic : MagicComponent={
  name: 'Flickering Grid',
  desc: 'A flickering grid is a component that creates a flickering grid effect on an element.',
  previewComp: FlickeringGridExample,
  previewCode:{
    filecode: FlickeringGridExampleCode,
    filename: 'flickering-grid-example.svelte',
    lang: 'svelte'
  },
  component: FlickeringGrid,
  code:{
    filecode: FlickeringGridCode,
    filename: 'flickering-grid.svelte',
    lang: 'svelte'
  },

}