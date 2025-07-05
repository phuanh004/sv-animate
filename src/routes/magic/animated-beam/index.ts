import type { MagicComponent } from "$lib/components/setup/magic/types";
import AnimatedBeam from "$lib/components/sv/magic/components/animated-beam.svelte";
import AnimatedBeamCode from "$lib/components/sv/magic/components/animated-beam.svelte?raw";

// Examples
import AnimatedBeamExample from "./examples/animated-beam-example.svelte";
import AnimatedBeamExampleCode from "./examples/animated-beam-example.svelte?raw";

export let magic: MagicComponent = {
  name: 'Animated Beam',
  desc: 'Animated Beam is a component that allows you to create an animated beam.',
  previewComp: AnimatedBeamExample,
  previewCode: {
    filecode: AnimatedBeamExampleCode,
    lang: 'svelte',
    filename: 'AnimatedBeamExample.svelte'
  },
  component: AnimatedBeam,
  code: {
    filecode: AnimatedBeamCode,
    lang: 'svelte',
    filename: 'AnimatedBeam.svelte'
  }
}