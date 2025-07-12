# Button Components

A collection of interactive button components with various hover effects and animations.

## Interactive Hover Button

A button that responds to mouse interactions with smooth hover effects.

### Usage

```svelte
<script>
  import InteractiveHoverButton from '$lib/components/sv/magic/buttons/interactive-hover-button.svelte';
</script>

<InteractiveHoverButton text="Click me" />
```

### Component Code

```svelte
<script lang="ts">
  import { cn } from '$lib/utils';
  
  interface Props {
    text?: string;
    class?: string;
  }
  
  let { text = 'Button', class: className = '' }: Props = $props();
</script>

<button
  class={cn(
    'group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-neutral-950 px-6 font-medium text-neutral-200 duration-500',
    '[box-shadow:0_0_0_2px_rgba(255,255,255,.1)_inset]',
    className
  )}
>
  <div
    class="absolute inset-0 rounded-md bg-gradient-to-r from-violet-500 to-purple-500 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
  ></div>
  <span class="relative z-10">{text}</span>
  <div
    class="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-13deg)_translateX(100%)]"
  >
    <div class="relative h-full w-8 bg-white/20"></div>
  </div>
</button>
```

## Pulsating Button

A button with a continuous pulsating animation effect.

### Usage

```svelte
<script>
  import PulsatingButton from '$lib/components/sv/magic/buttons/pulsating-button.svelte';
</script>

<PulsatingButton class="bg-blue-500 hover:bg-blue-600">
  Pulsating Button
</PulsatingButton>
```

### Component Code

```svelte
<script lang="ts">
  import { cn } from '$lib/utils';
  
  interface Props {
    class?: string;
    children: any;
    pulseColor?: string;
    duration?: string;
  }
  
  let {
    class: className = '',
    children,
    pulseColor = '#0096ff',
    duration = '1.5s'
  }: Props = $props();
</script>

<button
  class={cn(
    'relative text-center cursor-pointer flex justify-center items-center px-4 py-2 rounded-lg text-white font-medium tracking-wide transform transition-colors duration-200',
    className
  )}
  style={`--pulse-color: ${pulseColor}; --duration: ${duration};`}
>
  <div class="relative z-10">
    {@render children()}
  </div>
  <div class="absolute top-1/2 left-1/2 size-full rounded-lg bg-inherit animate-pulse -translate-x-1/2 -translate-y-1/2"></div>
</button>
```

### Tailwind Config

```css
@keyframes pulse {
  0%, 100% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }
  50% {
    transform: translate(-50%, -50%) scale(1.1);
    opacity: 0.8;
  }
}

.animate-pulse {
  animation: pulse var(--duration) ease-in-out infinite;
}
```

## Rainbow Button

A button that displays animated rainbow colors on hover.

### Usage

```svelte
<script>
  import RainbowButton from '$lib/components/sv/magic/buttons/rainbow-button.svelte';
</script>

<RainbowButton>
  Rainbow Effect
</RainbowButton>
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

<button
  class={cn(
    'group relative inline-flex h-11 animate-rainbow cursor-pointer items-center justify-center rounded-xl border-0 bg-[length:200%] px-8 py-2 font-medium text-primary-foreground transition-colors [background-clip:padding-box,border-box,border-box] [background-origin:border-box] [border:calc(0.08*1rem)_solid_transparent] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
    'before:absolute before:bottom-[-20%] before:left-1/2 before:z-0 before:h-1/5 before:w-3/5 before:-translate-x-1/2 before:animate-rainbow before:bg-[linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))] before:bg-[length:200%] before:[filter:blur(calc(0.8*1rem))]',
    'bg-[linear-gradient(#121213,#121213),linear-gradient(#121213_50%,rgba(18,18,19,0.6)_80%,rgba(18,18,19,0)),linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))]',
    'dark:bg-[linear-gradient(#fff,#fff),linear-gradient(#fff_50%,rgba(255,255,255,0.6)_80%,rgba(0,0,0,0)),linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))]',
    className
  )}
  style="--color-1: 0deg 100% 63%; --color-2: 270deg 100% 63%; --color-3: 210deg 100% 63%; --color-4: 195deg 100% 63%; --color-5: 90deg 100% 63%;"
>
  {@render children()}
</button>
```

### Tailwind Config

```css
@keyframes rainbow {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

.animate-rainbow {
  animation: rainbow 3s ease infinite;
}
```

## Shimmer Button

A button with a shimmering light effect that moves across on hover.

### Usage

```svelte
<script>
  import ShimmerButton from '$lib/components/sv/magic/buttons/shimmer-button.svelte';
</script>

<ShimmerButton class="bg-slate-900 hover:bg-slate-800">
  <span class="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
    Shimmer Button
  </span>
</ShimmerButton>
```

### Component Code

```svelte
<script lang="ts">
  import { cn } from '$lib/utils';
  
  interface Props {
    children: any;
    class?: string;
    shimmerColor?: string;
    shimmerSize?: string;
    borderRadius?: string;
    shimmerDuration?: string;
    background?: string;
  }
  
  let {
    children,
    class: className = '',
    shimmerColor = '#ffffff',
    shimmerSize = '0.05em',
    borderRadius = '100px',
    shimmerDuration = '3s',
    background = 'rgba(0, 0, 0, 1)'
  }: Props = $props();
</script>

<button
  style={`--spread: 90deg; --shimmer-color: ${shimmerColor}; --radius: ${borderRadius}; --speed: ${shimmerDuration}; --cut: ${shimmerSize}; --bg: ${background};`}
  class={cn(
    'group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap border border-white/10 px-6 py-3 text-white [background:var(--bg)] [border-radius:var(--radius)] dark:text-black',
    'transform-gpu transition-transform duration-300 ease-in-out active:translate-y-[1px]',
    className
  )}
>
  <!-- spark container -->
  <div
    class={cn(
      '-z-30 blur-[2px]',
      'absolute inset-0 overflow-visible [container-type:size]'
    )}
  >
    <!-- spark -->
    <div class="absolute inset-0 h-[100cqh] animate-slide [aspect-ratio:1] [border-radius:0] [mask:none]">
      <!-- spark before -->
      <div class="animate-spin-around absolute inset-[-100%] w-auto rotate-0 [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,hsl(0_0%_100%/1)_var(--spread),transparent_var(--spread))] [translate:0_0]"></div>
    </div>
  </div>

  <!-- backdrop -->
  <div
    class={cn(
      '-z-20',
      'absolute inset-[var(--cut)] rounded-[calc(var(--radius)-var(--cut))] [background:var(--bg)]'
    )}
  ></div>

  <!-- content -->
  {@render children()}
</button>
```

### Tailwind Config

```css
@keyframes slide {
  to {
    transform: translate(calc(100cqw - 100%), 0);
  }
}

@keyframes spin-around {
  to {
    transform: rotate(360deg);
  }
}

.animate-slide {
  animation: slide var(--speed) ease-in-out infinite;
}

.animate-spin-around {
  animation: spin-around calc(var(--speed) * 2) linear infinite;
}
```

## API Reference

### Common Props

All button components accept these common props:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `class` | `string` | `''` | Additional CSS classes |
| `children` | `any` | - | Button content (slot) |

### Interactive Hover Button Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `text` | `string` | `'Button'` | Button text content |

### Pulsating Button Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `pulseColor` | `string` | `'#0096ff'` | Color of the pulse effect |
| `duration` | `string` | `'1.5s'` | Duration of pulse animation |

### Shimmer Button Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `shimmerColor` | `string` | `'#ffffff'` | Color of shimmer effect |
| `shimmerSize` | `string` | `'0.05em'` | Size of shimmer border |
| `borderRadius` | `string` | `'100px'` | Border radius of button |
| `shimmerDuration` | `string` | `'3s'` | Duration of shimmer animation |
| `background` | `string` | `'rgba(0, 0, 0, 1)'` | Background color |

## Examples

### Custom Styled Buttons

```svelte
<script>
  import PulsatingButton from '$lib/components/sv/magic/buttons/pulsating-button.svelte';
  import RainbowButton from '$lib/components/sv/magic/buttons/rainbow-button.svelte';
</script>

<!-- Custom pulse color -->
<PulsatingButton 
  class="bg-red-500 hover:bg-red-600" 
  pulseColor="#ff0000"
  duration="2s"
>
  Custom Pulse
</PulsatingButton>

<!-- Rainbow button with custom content -->
<RainbowButton class="px-8 py-4">
  <span class="text-lg font-bold">🌈 Rainbow</span>
</RainbowButton>
```

### Button Group

```svelte
<div class="flex gap-4">
  <InteractiveHoverButton text="Primary" />
  <PulsatingButton class="bg-green-500">Secondary</PulsatingButton>
  <ShimmerButton class="bg-purple-600">Tertiary</ShimmerButton>
</div>
```