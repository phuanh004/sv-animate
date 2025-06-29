import type { MagicComponent } from "$lib/components/setup/magic/types";
import RainbowButton from "$lib/components/sv/magic/buttons/rainbow-button.svelte";
import RainbowButtonCode from "$lib/components/sv/magic/buttons/rainbow-button.svelte?raw";
import RainbowBtnExample from "./examples/rainbow-btn-example.svelte";
import RainbowBtnExampleCode from "./examples/rainbow-btn-example.svelte?raw";


export let magic: MagicComponent = {
  name: 'Rainbow Button',
  desc: 'A rainbow button is a button that shows a rainbow effect when hovered over.',
  previewComp: RainbowBtnExample,
  previewCode: {
    filecode: RainbowBtnExampleCode,
    filename: 'rainbow-btn-example.svelte',
    lang: 'svelte'
  },
  component: RainbowButton,
  code: {
    filecode: RainbowButtonCode,
    filename: 'rainbow-button.svelte',
    lang: 'svelte'
  }
}