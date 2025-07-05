import type { MagicComponent } from "$lib/components/setup/magic/types";
import LineShadowText from "$lib/components/sv/magic/text-animations/line-shadow-text.svelte";
import LineShadowTextCode from "$lib/components/sv/magic/text-animations/line-shadow-text.svelte?raw";

// Examples
import LineShadowTextExample from "./examples/line-shadow-text-example.svelte";
import LineShadowTextExampleCode from "./examples/line-shadow-text-example.svelte?raw";


export let magic : MagicComponent = {
  name: 'Line Shadow Text',
  desc: 'Line Shadow Text is a component that allows you to create a line shadow text.',
  previewComp: LineShadowTextExample,
  previewCode: {
    filecode: LineShadowTextExampleCode,
    lang: 'svelte',
    filename: 'LineShadowTextExample.svelte'
  },
  code:{
    filename: 'LineShadowText.svelte',
    filecode: LineShadowTextCode,
    lang: 'svelte'
  }
}