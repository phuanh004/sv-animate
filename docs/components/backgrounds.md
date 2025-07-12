# Background Components

A collection of animated background patterns and effects to enhance your UI.

## Dot Pattern

Create animated dot patterns with various styles and configurations.

### Basic Usage

```svelte
<script>
  import DotPattern from '$lib/components/sv/magic/backgrounds/dot-pattern.svelte';
</script>

<div class="relative h-96 w-full">
  <DotPattern class="[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]" />
  <div class="relative z-10 p-8">
    <h2 class="text-2xl font-bold">Content over dots</h2>
  </div>
</div>
```

### Component Code

```svelte
<script lang="ts">
  import { cn } from '$lib/utils';
  
  interface Props {
    width?: any;
    height?: any;
    x?: any;
    y?: any;
    cx?: any;
    cy?: any;
    cr?: any;
    class?: any;
  }
  
  let {
    width = 16,
    height = 16,
    x = 0,
    y = 0,
    cx = 1,
    cy = 1,
    cr = 1,
    class: className = ''
  }: Props = $props();
  
  let id = 'dottedPattern';
</script>

<svg
  aria-hidden="true"
  class={cn(
    'pointer-events-none absolute inset-0 h-full w-full fill-neutral-400/80',
    className
  )}
>
  <defs>
    <pattern
      {id}
      {width}
      {height}
      patternUnits="userSpaceOnUse"
      patternContentUnits="userSpaceOnUse"
      {x}
      {y}
    >
      <circle id="pattern-circle" {cx} {cy} r={cr} fill="currentColor"></circle>
    </pattern>
  </defs>
  <rect width="100%" height="100%" stroke-width="0" fill={`url(#${id})`}></rect>
</svg>
```

### Examples

#### Center Dots with Mask

```svelte
<div class="relative h-96 bg-background">
  <DotPattern 
    class="[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
    width={20}
    height={20}
    cx={2}
    cy={2}
    cr={1}
  />
  <div class="absolute inset-0 flex items-center justify-center">
    <h1 class="text-4xl font-bold">Centered Content</h1>
  </div>
</div>
```

#### Linear Gradient Dots

```svelte
<div class="relative h-96 bg-background">
  <DotPattern 
    class="[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]"
    width={16}
    height={16}
    cx={1}
    cy={1}
    cr={0.8}
  />
</div>
```

## Grid Pattern

Create animated grid backgrounds with customizable spacing and styling.

### Basic Usage

```svelte
<script>
  import GridPattern from '$lib/components/sv/magic/backgrounds/GridPattern.svelte';
</script>

<div class="relative h-96 w-full">
  <GridPattern />
  <div class="relative z-10 p-8">
    <h2 class="text-2xl font-bold">Grid Background</h2>
  </div>
</div>
```

### Component Code

```svelte
<script lang="ts">
  import { cn } from '$lib/utils';
  
  interface Props {
    width?: number;
    height?: number;
    x?: number;
    y?: number;
    strokeDasharray?: any;
    class?: string;
    squares?: Array<[number, number]>;
  }
  
  let {
    width = 40,
    height = 40,
    x = -1,
    y = -1,
    strokeDasharray = 0,
    class: className = '',
    squares = []
  }: Props = $props();
  
  let id = 'gridPattern';
</script>

<svg
  aria-hidden="true"
  class={cn(
    'pointer-events-none absolute inset-0 h-full w-full fill-gray-400/30 stroke-gray-400/30',
    className
  )}
>
  <defs>
    <pattern
      {id}
      {width}
      {height}
      patternUnits="userSpaceOnUse"
      {x}
      {y}
    >
      <path
        d={`M.5 ${height}V.5H${width}`}
        fill="none"
        stroke="currentColor"
        stroke-dasharray={strokeDasharray}
      />
    </pattern>
  </defs>
  <rect width="100%" height="100%" stroke-width="0" fill={`url(#${id})`} />
  {#if squares.length > 0}
    <svg x={x} y={y} class="overflow-visible">
      {#each squares as [x, y]}
        <rect
          stroke-width="0"
          width={width - 1}
          height={height - 1}
          x={x * width + 1}
          y={y * height + 1}
          fill="currentColor"
          class="fill-gray-400/80"
        />
      {/each}
    </svg>
  {/if}
</svg>
```

### Examples

#### Dashed Grid

```svelte
<GridPattern 
  strokeDasharray="4 2"
  class="stroke-gray-300 [mask-image:radial-gradient(400px_circle_at_center,white,transparent)]"
/>
```

#### Grid with Highlighted Squares

```svelte
<GridPattern 
  width={50}
  height={50}
  squares={[[4, 4], [5, 5], [6, 6]]}
  class="[mask-image:linear-gradient(to_bottom_right,white,transparent)]"
/>
```

## Flickering Grid

Create a grid background with animated flickering squares.

### Basic Usage

```svelte
<script>
  import FlickeringGrid from '$lib/components/sv/magic/backgrounds/flickering-grid.svelte';
</script>

<div class="relative h-96 w-full bg-black">
  <FlickeringGrid 
    class="z-0 absolute inset-0 size-full"
    squareSize={4}
    gridGap={6}
    color="#6B7280"
    maxOpacity={0.5}
    flickerChance={0.1}
  />
</div>
```

### Component Code

```svelte
<script lang="ts">
  import { cn } from '$lib/utils';
  import { onMount, onDestroy } from 'svelte';
  
  interface Props {
    squareSize?: number;
    gridGap?: number;
    flickerChance?: number;
    color?: string;
    maxOpacity?: number;
    class?: string;
    width?: number;
    height?: number;
  }
  
  let {
    squareSize = 4,
    gridGap = 6,
    flickerChance = 0.1,
    color = '#6B7280',
    maxOpacity = 0.3,
    class: className = '',
    width = 0,
    height = 0
  }: Props = $props();
  
  let canvasRef: HTMLCanvasElement;
  let animationId: number;
  
  let cols = $derived(Math.floor(width / (squareSize + gridGap)));
  let rows = $derived(Math.floor(height / (squareSize + gridGap)));
  
  let squares = $state<{ opacity: number; targetOpacity: number }[]>([]);
  
  function initializeSquares() {
    squares = Array.from({ length: cols * rows }, () => ({
      opacity: Math.random() * maxOpacity,
      targetOpacity: Math.random() * maxOpacity
    }));
  }
  
  function updateSquares() {
    squares.forEach((square) => {
      if (Math.random() < flickerChance) {
        square.targetOpacity = Math.random() * maxOpacity;
      }
      square.opacity += (square.targetOpacity - square.opacity) * 0.1;
    });
  }
  
  function drawGrid(ctx: CanvasRenderingContext2D) {
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = color;
    
    squares.forEach((square, index) => {
      const col = index % cols;
      const row = Math.floor(index / cols);
      const x = col * (squareSize + gridGap);
      const y = row * (squareSize + gridGap);
      
      ctx.globalAlpha = square.opacity;
      ctx.fillRect(x, y, squareSize, squareSize);
    });
  }
  
  function animate() {
    const ctx = canvasRef.getContext('2d');
    if (ctx) {
      updateSquares();
      drawGrid(ctx);
    }
    animationId = requestAnimationFrame(animate);
  }
  
  onMount(() => {
    initializeSquares();
    animate();
  });
  
  onDestroy(() => {
    if (animationId) {
      cancelAnimationFrame(animationId);
    }
  });
</script>

<canvas
  bind:this={canvasRef}
  bind:clientWidth={width}
  bind:clientHeight={height}
  {width}
  {height}
  class={cn('pointer-events-none', className)}
/>
```

## Retro Grid

Create a retro-style animated grid background.

### Basic Usage

```svelte
<script>
  import RetroGrid from '$lib/components/sv/magic/backgrounds/retro-grid.svelte';
</script>

<div class="relative h-96 w-full bg-black overflow-hidden">
  <RetroGrid />
  <div class="relative z-10 flex items-center justify-center h-full">
    <h1 class="text-4xl font-bold text-white">Retro Vibes</h1>
  </div>
</div>
```

### Component Code

```svelte
<script lang="ts">
  import { cn } from '$lib/utils';
  
  interface Props {
    class?: string;
    angle?: number;
  }
  
  let { class: className = '', angle = 65 }: Props = $props();
</script>

<div
  class={cn(
    'pointer-events-none absolute size-full overflow-hidden opacity-50 [perspective:200px]',
    className
  )}
  style={`--grid-angle: ${angle}deg;`}
>
  <!-- Grid -->
  <div class="absolute inset-0 [transform:rotateX(var(--grid-angle))]">
    <div
      class={cn(
        'animate-grid',
        '[background-image:linear-gradient(to_right,rgba(0,0,0,0.3)_1px,transparent_0),linear-gradient(to_bottom,rgba(0,0,0,0.3)_1px,transparent_0)]',
        '[background-size:75px_65px] [height:200vh] [inset:-50%_0px] [margin-left:-50px] [width:200vw]'
      )}
    />
  </div>
  
  <!-- Fade -->
  <div class="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
</div>
```

### Tailwind Config

```css
@keyframes grid {
  0% {
    transform: translateY(-50%);
  }
  100% {
    transform: translateY(0);
  }
}

.animate-grid {
  animation: grid 15s linear infinite;
}
```

## Ripple Effect

Create animated ripple effects for interactive backgrounds.

### Basic Usage

```svelte
<script>
  import Ripple from '$lib/components/sv/magic/backgrounds/ripple.svelte';
</script>

<div class="relative h-96 w-full bg-black overflow-hidden">
  <Ripple />
  <div class="relative z-10 flex items-center justify-center h-full">
    <h1 class="text-4xl font-bold text-white">Ripple Effect</h1>
  </div>
</div>
```

### Component Code

```svelte
<script lang="ts">
  import { cn } from '$lib/utils';
  import { onMount } from 'svelte';
  
  interface Props {
    mainCircleSize?: number;
    mainCircleOpacity?: number;
    numCircles?: number;
    class?: string;
  }
  
  let {
    mainCircleSize = 210,
    mainCircleOpacity = 0.24,
    numCircles = 8,
    class: className = ''
  }: Props = $props();
  
  let circles: { size: number; opacity: number; delay: number }[] = [];
  
  onMount(() => {
    circles = Array.from({ length: numCircles }, (_, i) => ({
      size: mainCircleSize + i * 70,
      opacity: mainCircleOpacity - i * 0.03,
      delay: i * 0.06
    }));
  });
</script>

<div class={cn('absolute inset-0 bg-white/5 [mask-image:linear-gradient(to_bottom,white,transparent)]', className)}>
  {#each circles as circle, index}
    <div
      class="absolute animate-ripple rounded-full bg-foreground/25 shadow-xl border"
      style={`
        width: ${circle.size}px;
        height: ${circle.size}px;
        opacity: ${circle.opacity};
        animation-delay: ${circle.delay}s;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      `}
    />
  {/each}
</div>
```

### Tailwind Config

```css
@keyframes ripple {
  0%, 100% {
    transform: translate(-50%, -50%) scale(1);
  }
  50% {
    transform: translate(-50%, -50%) scale(0.9);
  }
}

.animate-ripple {
  animation: ripple 3s ease-in-out infinite;
}
```

## API Reference

### Common Props

All background components accept these common props:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `class` | `string` | `''` | Additional CSS classes |

### Dot Pattern Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `width` | `number` | `16` | Pattern width |
| `height` | `number` | `16` | Pattern height |
| `cx` | `number` | `1` | Circle center X |
| `cy` | `number` | `1` | Circle center Y |
| `cr` | `number` | `1` | Circle radius |

### Grid Pattern Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `width` | `number` | `40` | Grid cell width |
| `height` | `number` | `40` | Grid cell height |
| `strokeDasharray` | `string` | `''` | Dash pattern for lines |
| `squares` | `Array<[number, number]>` | `[]` | Highlighted square positions |

### Flickering Grid Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `squareSize` | `number` | `4` | Size of grid squares |
| `gridGap` | `number` | `6` | Gap between squares |
| `flickerChance` | `number` | `0.1` | Probability of flicker per frame |
| `color` | `string` | `'#6B7280'` | Square color |
| `maxOpacity` | `number` | `0.3` | Maximum opacity |

### Ripple Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `mainCircleSize` | `number` | `210` | Size of main circle |
| `mainCircleOpacity` | `number` | `0.24` | Opacity of main circle |
| `numCircles` | `number` | `8` | Number of ripple circles |

## Usage Tips

### Masking

Use CSS masks to create interesting reveal effects:

```svelte
<DotPattern class="[mask-image:radial-gradient(circle,white,transparent)]" />
<GridPattern class="[mask-image:linear-gradient(45deg,white,transparent)]" />
```

### Layering

Combine multiple patterns for complex effects:

```svelte
<div class="relative">
  <DotPattern class="opacity-50" />
  <GridPattern class="opacity-30" />
  <FlickeringGrid class="opacity-20" />
</div>
```

### Responsive Design

Adjust pattern properties based on screen size:

```svelte
<GridPattern 
  width={40}
  height={40}
  class="md:w-20 md:h-20"
/>
```