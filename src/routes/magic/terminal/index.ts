import type { MagicComponent } from '$lib/components/setup/magic/types';
import { AnimatedSpan, Terminal } from '$lib/components/sv/magic/components/terminal';
import TerminalCode from '$lib/components/sv/magic/components/terminal/terminal.svelte?raw';
import AnimatedSpanCode from '$lib/components/sv/magic/components/terminal/animated-span.svelte?raw';
import TypingAnimationCode from '$lib/components/sv/magic/components/terminal/typing-animation.svelte?raw';
import TerminalExample from './examples/terminal-example.svelte';
import TerminalExampleCode from './examples/terminal-example.svelte?raw';

export let magic: MagicComponent = {
	name: 'Terminal',
	desc: 'Terminal is a component that allows you to create a terminal.',
	previewComp: TerminalExample,
	previewCode: {
		filecode: TerminalExampleCode,
		lang: 'svelte',
		filename: 'TerminalExample.svelte'
	},
  component: Terminal,
  code:[
    {
      filename: 'Terminal.svelte',
      filecode: TerminalCode,
      lang: 'svelte'
    },
    {
      filename: 'AnimatedSpan.svelte',
      filecode: AnimatedSpanCode,
      lang: 'svelte'
    },
    {
      filename: 'TypingAnimation.svelte',
      filecode: TypingAnimationCode,
      lang: 'svelte'
    }
  ]
};
