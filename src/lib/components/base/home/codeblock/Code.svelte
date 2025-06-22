<script lang="ts">
  import { codeToHtml } from "shiki";
  import { onMount } from "svelte";
  import { fade, slide } from "svelte/transition";

  interface Props {
    code?: string;
    lang?: string;
  }

  let { code = "", lang = "svelte" }: Props = $props();
  let htmlCode: any = $state("Loading...");
  onMount(async () => {
    htmlCode = await codeToHtml(code, {
      lang: `${lang}`,
      theme: "vesper",
    });
  });
</script>

{#key htmlCode}
  <div in:fade>
    {@html htmlCode}
  </div>
{/key}
