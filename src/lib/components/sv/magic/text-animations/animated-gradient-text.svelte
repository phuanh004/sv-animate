<script lang="ts">
  import { cn } from "$lib/utils";

  interface Props {
    class?: any;
    children?: import('svelte').Snippet;
  }

  let { class: className = "", children }: Props = $props();

  let colorClass: string = "";
</script>

<button
  class={cn(
    "group relative mx-auto flex max-w-fit flex-row items-center justify-center rounded-2xl bg-white/40 px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#8fdfff1f] backdrop-blur-sm transition-shadow duration-500 ease-out [--bg-size:300%] hover:shadow-[inset_0_-5px_10px_#8fdfff3f] dark:bg-black/40",
    className
  )}
>
  <div
    class={cn(
      "absolute inset-0 block h-full w-full animate-gradient bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:var(--bg-size)_100%] p-[1px] ![mask-composite:subtract] [border-radius:inherit] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]",
      colorClass
    )}
></div>

  {#if children}{@render children()}{:else}Gradient{/if}
</button>
