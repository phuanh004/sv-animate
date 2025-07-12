# Text Animations

A comprehensive collection of text animation components for Svelte applications. These components provide smooth, engaging text effects using motion primitives.

## Animated Gradient Text

Create a text effect with animated gradient colors that change over time.

### Usage

```svelte
<script>
  import AnimatedGradientText from '$lib/components/sv/magic/text-animations/animated-gradient-text.svelte';
</script>

<AnimatedGradientText>
  Beautiful gradient text
</AnimatedGradientText>
```

### Component Code

```svelte
<script lang="ts">
  import { cn } from '$lib/utils';
  
  interface Props {
    class?: string;
    children: any;
  }
  
  let { class: className = '', children }: Props = $props();
</script>

<div
  class={cn(
    'group relative mx-auto flex max-w-fit flex-row items-center justify-center rounded-2xl bg-white/40 px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#8fdfff1f] backdrop-blur-sm transition-shadow duration-500 ease-out [--bg-size:300%] hover:shadow-[inset_0_-5px_10px_#8fdfff3f] dark:bg-black/40',
    className
  )}
>
  <div
    class="absolute inset-0 block h-full w-full animate-gradient bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:var(--bg-size)_100%] p-[1px] ![mask-composite:subtract] [border-radius:inherit] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]"
  ></div>
  {@render children()}
</div>
```

### Tailwind Config

```css
@keyframes gradient {
  to {
    --bg-position: 300%;
  }
}

.animate-gradient {
  animation: gradient 4s ease infinite;
}
```

## Animated Shiny Text

Create a shiny text effect that animates across the text, giving it a glowing appearance.

### Usage

```svelte
<script>
  import AnimatedShinyText from '$lib/components/sv/magic/animated-shiny-text/AnimatedShinyText.svelte';
</script>

<AnimatedShinyText class="text-4xl font-bold text-black dark:text-white">
  ✨ Shiny Text
</AnimatedShinyText>
```

### Component Code

```svelte
<script lang="ts">
  import { cn } from '$lib/utils';
  
  interface Props {
    class?: string;
    children: any;
    shimmerWidth?: number;
  }
  
  let { 
    class: className = '', 
    children, 
    shimmerWidth = 100 
  }: Props = $props();
</script>

<p
  class={cn(
    'mx-auto max-w-md text-neutral-600/50 dark:text-neutral-400/50',
    'animate-shimmer bg-clip-text bg-no-repeat [background-position:0_0] [background-size:var(--shimmer-width)_100%] [transition:background-position_1s_cubic-bezier(.6,.6,0,1)_infinite]',
    'bg-gradient-to-r from-transparent via-black/80 via-50% to-transparent dark:via-white/80',
    className
  )}
  style={`--shimmer-width: ${shimmerWidth}%`}
>
  {@render children()}
</p>
```

## Blur In

Animate text to blur in with a fade effect.

### Usage

```svelte
<script>
  import BlurIn from '$lib/components/sv/magic/text-animations/blur-in.svelte';
</script>

<BlurIn>
  <h1 class="text-4xl font-bold text-black dark:text-white">
    Blur In Animation
  </h1>
</BlurIn>
```

### Component Code

```svelte
<script lang="ts">
  import { cn } from '$lib/utils';
  import { M } from 'motion-start';
  
  interface Props {
    class?: string;
    variant?: {
      hidden: { filter: string; opacity: number };
      visible: { filter: string; opacity: number };
    };
    duration?: number;
    children: any;
  }
  
  let {
    class: className = '',
    variant = {
      hidden: { filter: 'blur(10px)', opacity: 0 },
      visible: { filter: 'blur(0px)', opacity: 1 }
    },
    duration = 1,
    children
  }: Props = $props();
</script>

<M.h1
  initial={variant.hidden}
  animate={variant.visible}
  transition={{ duration }}
  class={cn(
    'font-display text-center text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]',
    className
  )}
>
  {@render children()}
</M.h1>
```

## Letter Pull Up

Animate letters in a word to pull up with a bounce effect.

### Usage

```svelte
<script>
  import LetterPullUp from '$lib/components/sv/magic/text-animations/letter-pull-up.svelte';
</script>

<LetterPullUp words="Letter Pull Up" delay={0.05} />
```

### Component Code

```svelte
<script lang="ts">
  import { cn } from '$lib/utils';
  import { M } from 'motion-start';
  
  interface Props {
    class?: string;
    words: string;
    delay?: number;
  }
  
  let { class: className = '', words, delay = 0.05 }: Props = $props();
  
  const letters = words.split('');
</script>

<div class="flex justify-center">
  {#each letters as letter, i}
    <M.h1
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        delay: i * delay,
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }}
      class={cn(
        'font-display text-center text-4xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]',
        className
      )}
    >
      {letter === ' ' ? '\u00A0' : letter}
    </M.h1>
  {/each}
</div>
```

## Typing Animation

Create a typewriter effect for text.

### Usage

```svelte
<script>
  import TypingAnimation from '$lib/components/sv/magic/components/terminal/typing-animation.svelte';
</script>

<TypingAnimation
  class="text-4xl font-bold text-black dark:text-white"
  text="Typing Animation Demo"
  duration={100}
/>
```

### Component Code

```svelte
<script lang="ts">
  import { cn } from '$lib/utils';
  import { onMount } from 'svelte';
  
  interface Props {
    text: string;
    duration?: number;
    class?: string;
  }
  
  let { text, duration = 200, class: className = '' }: Props = $props();
  
  let displayedText = $state('');
  let i = $state(0);
  
  onMount(() => {
    const typingEffect = setInterval(() => {
      if (i < text.length) {
        displayedText += text.charAt(i);
        i++;
      } else {
        clearInterval(typingEffect);
      }
    }, duration);
    
    return () => clearInterval(typingEffect);
  });
</script>

<h1
  class={cn(
    'font-display text-center text-4xl font-bold leading-[5rem] tracking-[-0.02em] text-black drop-shadow-sm dark:text-white',
    className
  )}
>
  {displayedText}
</h1>
```

## Word Rotate

Rotate words in a sentence with a fade-in effect.

### Usage

```svelte
<script>
  import WordRotate from '$lib/components/sv/magic/text-animations/word-rotate.svelte';
</script>

<WordRotate
  class="text-4xl font-bold text-black dark:text-white"
  words={['Amazing', 'Beautiful', 'Incredible', 'Fantastic']}
/>
```

### Component Code

```svelte
<script lang="ts">
  import { cn } from '$lib/utils';
  import { M } from 'motion-start';
  import { onMount } from 'svelte';
  
  interface Props {
    words: string[];
    duration?: number;
    framerProps?: object;
    class?: string;
  }
  
  let {
    words,
    duration = 2500,
    framerProps = {
      initial: { opacity: 0, y: -50 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: 50 },
      transition: { duration: 0.25, ease: 'easeOut' }
    },
    class: className = ''
  }: Props = $props();
  
  let index = $state(0);
  
  onMount(() => {
    const interval = setInterval(() => {
      index = (index + 1) % words.length;
    }, duration);
    
    return () => clearInterval(interval);
  });
</script>

<div class="overflow-hidden py-2">
  <M.h1
    key={words[index]}
    class={cn(className)}
    {...framerProps}
  >
    {words[index]}
  </M.h1>
</div>
```

## API Reference

### Common Props

Most text animation components accept these common props:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `class` | `string` | `''` | Additional CSS classes |
| `duration` | `number` | varies | Animation duration in seconds or milliseconds |
| `delay` | `number` | `0` | Delay before animation starts |

### Animation Variants

Many components support custom animation variants:

```typescript
interface AnimationVariant {
  hidden: Record<string, any>;
  visible: Record<string, any>;
}
```

Example:
```svelte
<BlurIn
  variant={{
    hidden: { filter: 'blur(20px)', opacity: 0, y: 50 },
    visible: { filter: 'blur(0px)', opacity: 1, y: 0 }
  }}
>
  Custom animation
</BlurIn>
```