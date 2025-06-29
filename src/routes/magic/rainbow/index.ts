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
  },
  tailwind: `:root{
  /* Rainbow Colors */
	--color-1: 0 100% 63%;
	--color-2: 270 100% 63%;
	--color-3: 210 100% 63%;
	--color-4: 195 100% 63%;
	--color-5: 90 100% 63%;
}
  .dark{
  	/* Rainbow Colors */
	--color-1: 0 100% 63%;
	--color-2: 270 100% 63%;
	--color-3: 210 100% 63%;
	--color-4: 195 100% 63%;
	--color-5: 90 100% 63%;
}
  @theme inline {
  /* Rainbow Colors */
	--color-rainbow-1: hsl(var(--color-1));
	--color-rainbow-2: hsl(var(--color-2));
	--color-rainbow-3: hsl(var(--color-3));
	--color-rainbow-4: hsl(var(--color-4));
	--color-rainbow-5: hsl(var(--color-5));

  --animate-rainbow: rainbow var(--speed, 6s) linear infinite;

  @keyframes rainbow {
		0% {
			background-position: 0%;
		}
		100% {
			background-position: 100%;
		}
	}
}
  `
}