<script lang="ts">
  interface Props {
    mainCircleSize?: number;
    mainCircleOpacity?: number;
    numCircles?: number;
  }

  let { mainCircleSize = 210, mainCircleOpacity = 0.24, numCircles = 8 }: Props = $props();
</script>

<div
  class="absolute inset-0 flex items-center justify-center bg-white/5 [mask-image:linear-gradient(to_bottom,white,transparent)]"
>
  {#each { length: numCircles } as _, i}
    <div
      class="absolute animate-ripple rounded-full bg-foreground/30 shadow-xl border top-1/2 left-1/2  [--i:{i}]"
      style="width: {mainCircleSize + i * 70}px;
         height: {mainCircleSize + i * 70}px;
         opacity: {mainCircleOpacity - i * 0.03};
         animation-delay: {i * 0.08}s;
         border-style:{i === numCircles - 1
        ? 'dashed'
        : 'solid'};
         border-width: 1px;
         border-color: rgba(var(--foreground-rgb), {(5 + i * 5) / 100});
        "
    ></div>
  {/each}
</div>
