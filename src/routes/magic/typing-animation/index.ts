import type { MagicComponent } from "$lib/components/setup/magic/types";
import { TypingAnimation } from "$lib/components/sv/magic/components/terminal";
import TypingAnimationCode from "$lib/components/sv/magic/components/terminal/typing-animation.svelte?raw";
import TypingAnimationExample from "./examples/typing-animation-example.svelte";
import TypingAnimationExampleCode from "./examples/typing-animation-example.svelte?raw";

export let magic: MagicComponent={
  name: 'Typing Animation',
  desc: 'Typing Animation is a component that allows you to create a typing animation.',
  previewComp: TypingAnimationExample,
  previewCode: {
    filecode: TypingAnimationExampleCode,
    lang: 'svelte',
    filename: 'TypingAnimationExample.svelte'
  },
  code:{
    filename: 'TypingAnimation.svelte',
    filecode: TypingAnimationCode,
    lang: 'svelte'
  }
}