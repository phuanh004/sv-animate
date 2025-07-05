import type { MagicComponent } from "$lib/components/setup/magic/types";
import RetroGrid from "$lib/components/sv/magic/backgrounds/retro-grid.svelte";
import RetroGridCode from "$lib/components/sv/magic/backgrounds/retro-grid.svelte?raw";
import RetroGridExample from "./examples/retro-grid-example.svelte";
import RetroGridExampleCode from "./examples/retro-grid-example.svelte?raw";

export let magic: MagicComponent = {
  name: 'Retro Grid',
  desc: 'Retro Grid is a component that allows you to create a retro grid.',
  previewComp: RetroGridExample,
  previewCode: {
    filecode: RetroGridExampleCode,
    lang: 'svelte',
    filename: 'RetroGridExample.svelte'
  },
  code: {
    filecode: RetroGridCode,
    lang: 'svelte',
    filename: 'RetroGrid.svelte'
  },
  component: RetroGrid,
}