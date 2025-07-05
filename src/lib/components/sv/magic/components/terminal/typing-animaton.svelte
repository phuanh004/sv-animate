<script lang="ts">
  import { onMount } from 'svelte';

  interface Props {
    text: string;
    class?: string;
    duration?: number;
    delay?: number;
    as?: keyof HTMLElementTagNameMap; // like 'div', 'p', 'span'
  }

  let {
    text,
    class:className = '',
    duration = 60,
    delay = 0,
    as = 'span'
  }: Props = $props();

  let element: HTMLElement | null = $state(null);
  let displayedText = $state('');
  let started = $state(false);



  onMount(() => {
    const timeout = setTimeout(() => {
      started = true;

      let i = 0;
      const interval = setInterval(() => {
        if (i < text.length) {
          displayedText = text.substring(0, i + 1);
          i++;
        } else {
          clearInterval(interval);
        }
      }, duration);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timeout);
  });
</script>

<svelte:element this={as} bind:this={element} class={`text-sm font-normal tracking-tight ${className}`}>
  {displayedText}
</svelte:element>
