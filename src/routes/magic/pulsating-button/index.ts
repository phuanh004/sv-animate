import type { MagicComponent } from "$lib/components/setup/magic/types";
import PulsatingButton from "$lib/components/sv/magic/buttons/pulsating-button.svelte";
import PulsatingButtonCode from "$lib/components/sv/magic/buttons/pulsating-button.svelte?raw";
import PulsatingBtnExample from "./examples/pulsating-btn-example.svelte";
import PulsatingBtnExampleCode from "./examples/pulsating-btn-example.svelte?raw";


export let magic: MagicComponent = {
  name: 'Pulsating Button',
  desc: 'A pulsating button is a button that shows a pulsating effect when hovered over.',
  previewComp: PulsatingBtnExample,
  previewCode: {
    filecode: PulsatingBtnExampleCode,
    filename: 'pulsating-btn-example.svelte',
    lang: 'svelte'
  },
  component: PulsatingButton,
  code: {
    filecode: PulsatingButtonCode,
    filename: 'pulsating-button.svelte',
    lang: 'svelte'
  }
}