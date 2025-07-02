<script lang="ts">
	import { cn } from '$lib/utils';
	import { useMotionTemplate,Motion, useMotionValue } from 'motion-start';
import { onMount, type Snippet } from 'svelte';

  interface Props {
    class?: string;
    gradientSize?: number;
    gradientColor?: string;
    gradientOpacity?: number;
    gradientFrom?: string;
    gradientTo?: string;
    children?: import('svelte').Snippet;
  }

  let {
    class : className = '',
    gradientSize = 140,
    gradientColor = '#262626',
    gradientOpacity = 0.8,
    gradientFrom = '#9E7AFF',
    gradientTo = '#FE8BBB',
    children
  }: Props = $props();

  let cardRef: HTMLDivElement | null = $state(null);

  const mouseX = useMotionValue(-gradientSize);
  const mouseY = useMotionValue(-gradientSize);

  // Using motion values for gradient properties
  let gFrom = useMotionValue(gradientFrom);
  let gTo = useMotionValue(gradientTo);
  let gColor = useMotionValue(gradientColor);
  let gSize = useMotionValue(gradientSize);


  const handleMouseMove = (e: MouseEvent) => {
    if (!cardRef) return;
    const rect = cardRef.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const handleMouseOut = (e: MouseEvent) => {
    if (!e.relatedTarget) {
      document.removeEventListener('mousemove', handleMouseMove);
      mouseX.set(-gradientSize);
      mouseY.set(-gradientSize);
    }
  };

  const handleMouseEnter = () => {
    document.addEventListener('mousemove', handleMouseMove);
    mouseX.set(-gradientSize);
    mouseY.set(-gradientSize);
  };

  onMount(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseout', handleMouseOut);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseout', handleMouseOut);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  });
</script>
<div
  bind:this={cardRef}
      class={cn("group relative rounded-[inherit]", className)}
    >
      <Motion.div
        class="pointer-events-none absolute inset-0 rounded-[inherit] bg-border duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
          radial-gradient(${gSize}px circle at ${mouseX}px ${mouseY}px,
          ${gFrom},
          ${gTo},
          var(--border) 100%
          )
          `,
        }}
      />
      <div class="absolute inset-px rounded-[inherit] bg-background" ></div>
      <Motion.div
        class="pointer-events-none absolute inset-px rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(${gSize}px circle at ${mouseX}px ${mouseY}px, ${gColor}, transparent 100%)
          `,
          opacity: gradientOpacity,
        }}
      />
      <div class="relative">{@render children?.()}</div>
    </div>