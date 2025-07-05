import type { MagicComponent } from "$lib/components/setup/magic/types";
import VideoText from "$lib/components/sv/magic/text-animations/video-text.svelte";
import VideoTextCode from "$lib/components/sv/magic/text-animations/video-text.svelte?raw";

// Examples
import VideoTextExample from "./examples/video-text-example.svelte";
import VideoTextExampleCode from "./examples/video-text-example.svelte?raw";

export let magic : MagicComponent={
  name: 'Video Text',
  desc: 'Video Text is a component that allows you to create a video text.',
  previewComp: VideoTextExample,
  previewCode: {
    filecode: VideoTextExampleCode,
    lang: 'svelte',
    filename: 'VideoTextExample.svelte'
  },
  code:{
    filename: 'VideoText.svelte',
    filecode: VideoTextCode,
    lang: 'svelte'
  }
}