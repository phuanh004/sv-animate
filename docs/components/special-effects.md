# Special Effects

Advanced visual effects and animations for creating engaging user interfaces.

## Animated Beam

Create animated beams that connect two elements with smooth motion.

### Basic Usage

```svelte
<script>
  import AnimatedBeam from '$lib/components/sv/magic/components/animated-beam.svelte';
  
  let containerRef: HTMLDivElement;
  let fromRef: HTMLElement;
  let toRef: HTMLElement;
</script>

<div bind:this={containerRef} class="relative w-full h-96 bg-black rounded-lg overflow-hidden">
  <div bind:this={fromRef} class="absolute top-10 left-10 w-16 h-16 bg-blue-500 rounded-full"></div>
  <div bind:this={toRef} class="absolute bottom-10 right-10 w-16 h-16 bg-purple-500 rounded-full"></div>
  
  <AnimatedBeam
    bind:containerRef
    bind:fromRef
    bind:toRef
    gradientStartColor="#03D1FF"
    gradientStopColor="#00FFCC"
    duration={3}
  />
</div>
```

### Component Code

```svelte
<script lang="ts">
  import { cn } from '$lib/utils';
  import { onMount, tick } from 'svelte';
  import { M } from 'motion-start';
  
  interface Props {
    class?: any;
    containerRef: any;
    fromRef: any;
    toRef: any;
    curvature?: number;
    reverse?: boolean;
    duration?: any;
    delay?: number;
    pathColor?: string;
    pathWidth?: number;
    pathOpacity?: number;
    gradientStartColor?: string;
    gradientStopColor?: string;
    startXOffset?: number;
    startYOffset?: number;
    endXOffset?: number;
    endYOffset?: number;
  }
  
  let {
    class: className = '',
    containerRef = $bindable(null),
    fromRef = $bindable(null),
    toRef = $bindable(null),
    curvature = 0,
    reverse = false,
    duration = Math.random() * 3 + 4,
    delay = 0,
    pathColor = 'gray',
    pathWidth = 2,
    pathOpacity = 0.2,
    gradientStartColor = '#ffaa40',
    gradientStopColor = '#9c40ff',
    startXOffset = 0,
    startYOffset = 0,
    endXOffset = 0,
    endYOffset = 0
  }: Props = $props();
  
  let id = 'gradient';
  let pathD = $state('');
  let svgDimensions = $state({ width: 0, height: 0 });
  
  let gradientCoordinates = $derived(
    reverse
      ? {
          x1: ['90%', '-10%'],
          x2: ['100%', '0%'],
          y1: ['0%', '0%'],
          y2: ['0%', '0%']
        }
      : {
          x1: ['10%', '110%'],
          x2: ['0%', '100%'],
          y1: ['0%', '0%'],
          y2: ['0%', '0%']
        }
  );
  
  let updatePath = () => {
    if (!containerRef || !fromRef || !toRef) return;
    
    let containerRect = containerRef?.getBoundingClientRect();
    let rectA = fromRef?.getBoundingClientRect();
    let rectB = toRef?.getBoundingClientRect();
    
    let svgWidth = containerRect.width;
    let svgHeight = containerRect.height;
    svgDimensions.width = svgWidth;
    svgDimensions.height = svgHeight;

    let startX = rectA.left - containerRect.left + rectA.width / 2 + startXOffset;
    let startY = rectA.top - containerRect.top + rectA.height / 2 + startYOffset;
    let endX = rectB.left - containerRect.left + rectB.width / 2 + endXOffset;
    let endY = rectB.top - containerRect.top + rectB.height / 2 + endYOffset;

    let controlY = startY - curvature;
    let d = `M ${startX},${startY} Q ${(startX + endX) / 2},${controlY} ${endX},${endY}`;
    pathD = d;
  };
  
  onMount(async () => {
    await tick();
    updatePath();
    
    const resizeObserver = new ResizeObserver(() => updatePath());
    if (containerRef) {
      resizeObserver.observe(containerRef);
    }
  });
</script>

<svg
  fill="none"
  width={svgDimensions.width}
  height={svgDimensions.height}
  xmlns="http://www.w3.org/2000/svg"
  class={cn('pointer-events-none absolute top-0 left-0 transform-gpu stroke-2', className)}
  viewBox={`0 0 ${svgDimensions.width} ${svgDimensions.height}`}
>
  <path
    d={pathD}
    stroke={pathColor}
    stroke-width={pathWidth}
    stroke-opacity={pathOpacity}
    stroke-linecap="round"
  />
  <path
    d={pathD}
    stroke-width={pathWidth}
    stroke={`url(#${id})`}
    stroke-opacity="1"
    stroke-linecap="round"
  />
  <defs>
    <M.linearGradient
      class="transform-gpu"
      {id}
      gradientUnits={'userSpaceOnUse'}
      initial={{
        x1: '0%',
        x2: '0%',
        y1: '0%',
        y2: '0%'
      }}
      animate={{
        x1: gradientCoordinates.x1,
        x2: gradientCoordinates.x2,
        y1: gradientCoordinates.y1,
        y2: gradientCoordinates.y2
      }}
      transition={{
        delay,
        duration,
        ease: [0.16, 1, 0.3, 1],
        repeat: Infinity,
        repeatDelay: 0
      }}
    >
      <stop stop-color={gradientStartColor} stop-opacity="0"></stop>
      <stop stop-color={gradientStartColor}></stop>
      <stop offset="32.5%" stop-color={gradientStopColor}></stop>
      <stop offset="100%" stop-color={gradientStopColor} stop-opacity="0"></stop>
    </M.linearGradient>
  </defs>
</svg>
```

## Border Beam

Create animated border effects that move around elements.

### Basic Usage

```svelte
<script>
  import BorderBeam from '$lib/components/sv/magic/special-effects/border-beam/border-beam.svelte';
</script>

<div class="relative rounded-xl border bg-background p-8">
  <BorderBeam size={80} duration={8} />
  <h3 class="text-xl font-semibold">Card with Border Beam</h3>
  <p class="mt-2 text-muted-foreground">
    This card has an animated border beam effect.
  </p>
</div>
```

### Component Code

```svelte
<script lang="ts">
  import { cn } from '$lib/utils';
  
  interface Props {
    class?: string;
    size?: number;
    duration?: number;
    borderWidth?: number;
    anchor?: number;
    colorFrom?: string;
    colorTo?: string;
    delay?: number;
  }
  
  let {
    class: className = '',
    size = 200,
    duration = 15,
    borderWidth = 1.5,
    anchor = 90,
    colorFrom = '#ffaa40',
    colorTo = '#9c40ff',
    delay = 0
  }: Props = $props();
</script>

<div
  style={`
    --size: ${size}px;
    --duration: ${duration}s;
    --anchor: ${anchor}%;
    --border-width: ${borderWidth}px;
    --color-from: ${colorFrom};
    --color-to: ${colorTo};
    --delay: -${delay}s;
  `}
  class={cn(
    'pointer-events-none absolute inset-0 rounded-[inherit] [border:calc(var(--border-width)*1px)_solid_transparent]',
    '[background:linear-gradient(var(--direction,0deg),var(--color-from),var(--color-to),transparent_70%)_border-box]',
    '[mask:linear-gradient(#fff_0_0)_padding-box,linear-gradient(#fff_0_0)]',
    '[mask-composite:xor] [mask-composite:exclude]',
    'animate-border-beam',
    className
  )}
/>
```

### Tailwind Config

```css
@keyframes border-beam {
  100% {
    offset-distance: 100%;
  }
}

.animate-border-beam {
  animation: border-beam var(--duration) infinite linear;
  animation-delay: var(--delay);
  offset-path: rect(0 auto auto 0 round calc(var(--size) * 1px));
}
```

## Meteors

Create falling meteor effects for dynamic backgrounds.

### Basic Usage

```svelte
<script>
  import Meteors from '$lib/components/sv/magic/special-effects/meteors/meteors.svelte';
</script>

<div class="relative h-96 w-full bg-black rounded-lg overflow-hidden">
  <Meteors number={30} />
  <div class="relative z-10 flex items-center justify-center h-full">
    <h1 class="text-4xl font-bold text-white">Meteor Shower</h1>
  </div>
</div>
```

### Component Code

```svelte
<script lang="ts">
  import { cn } from '$lib/utils';
  
  interface Props {
    number?: number;
    class?: string;
  }
  
  let { number = 20, class: className = '' }: Props = $props();
  
  const meteors = Array.from({ length: number }, (_, i) => ({
    id: i,
    left: Math.floor(Math.random() * (400 - -400) + -400) + 'px',
    animationDelay: Math.random() * (0.8 - 0.2) + 0.2 + 's',
    animationDuration: Math.floor(Math.random() * (10 - 2) + 2) + 's'
  }));
</script>

{#each meteors as meteor}
  <span
    class={cn(
      'animate-meteor-effect absolute top-1/2 left-1/2 h-0.5 w-0.5 rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg]',
      'before:content-[""] before:absolute before:top-1/2 before:transform before:-translate-y-[50%] before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-[#64748b] before:to-transparent',
      className
    )}
    style={`
      top: 0;
      left: ${meteor.left};
      animation-delay: ${meteor.animationDelay};
      animation-duration: ${meteor.animationDuration};
    `}
  />
{/each}
```

### Tailwind Config

```css
@keyframes meteor-effect {
  0% {
    transform: rotate(215deg) translateX(0);
    opacity: 1;
  }
  70% {
    opacity: 1;
  }
  100% {
    transform: rotate(215deg) translateX(-500px);
    opacity: 0;
  }
}

.animate-meteor-effect {
  animation: meteor-effect linear infinite;
}
```

## Orbiting Circles

Create circles that orbit around a central point.

### Basic Usage

```svelte
<script>
  import OrbitingCircles from '$lib/components/sv/magic/orbiting-circles/orbiting-circles.svelte';
</script>

<div class="relative h-96 w-full flex items-center justify-center">
  <div class="w-32 h-32 bg-black rounded-full flex items-center justify-center">
    <span class="text-white font-bold">Center</span>
  </div>
  
  <OrbitingCircles
    class="size-8 border-none bg-transparent"
    duration={20}
    delay={20}
    radius={80}
  >
    <div class="w-8 h-8 bg-blue-500 rounded-full"></div>
  </OrbitingCircles>
  
  <OrbitingCircles
    class="size-6 border-none bg-transparent"
    duration={20}
    delay={10}
    radius={80}
    reverse
  >
    <div class="w-6 h-6 bg-purple-500 rounded-full"></div>
  </OrbitingCircles>
</div>
```

### Component Code

```svelte
<script lang="ts">
  import { cn } from '$lib/utils';
  
  interface Props {
    class?: string;
    children?: any;
    reverse?: boolean;
    duration?: number;
    delay?: number;
    radius?: number;
    path?: boolean;
  }
  
  let {
    class: className = '',
    children,
    reverse = false,
    duration = 20,
    delay = 10,
    radius = 50,
    path = false
  }: Props = $props();
</script>

{#if path}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    class="pointer-events-none absolute inset-0 size-full"
  >
    <circle
      cx="50%"
      cy="50%"
      r={radius}
      fill="none"
      stroke="currentColor"
      stroke-width="1"
      stroke-dasharray="5,5"
      stroke-opacity="0.3"
    />
  </svg>
{/if}

<div
  style={`
    --duration: ${duration}s;
    --radius: ${radius}px;
    --delay: -${delay}s;
  `}
  class={cn(
    'absolute flex size-full transform-gpu animate-orbit items-center justify-center rounded-full border bg-black/10 [animation-delay:var(--delay)] dark:bg-white/10',
    { '[animation-direction:reverse]': reverse },
    className
  )}
>
  {@render children?.()}
</div>
```

### Tailwind Config

```css
@keyframes orbit {
  0% {
    transform: rotate(0deg) translateY(calc(var(--radius) * -1px)) rotate(0deg);
  }
  100% {
    transform: rotate(360deg) translateY(calc(var(--radius) * -1px)) rotate(-360deg);
  }
}

.animate-orbit {
  animation: orbit linear infinite var(--duration);
}
```

## Particles

Create floating particle effects.

### Basic Usage

```svelte
<script>
  import Particles from '$lib/components/sv/magic/special-effects/particles.svelte';
</script>

<div class="relative h-96 w-full bg-black rounded-lg overflow-hidden">
  <Particles
    class="absolute inset-0"
    quantity={100}
    ease={80}
    color="#ffffff"
    refresh
  />
  <div class="relative z-10 flex items-center justify-center h-full">
    <h1 class="text-4xl font-bold text-white">Particle Field</h1>
  </div>
</div>
```

### Component Code

```svelte
<script lang="ts">
  import { cn } from '$lib/utils';
  import { onMount, onDestroy } from 'svelte';
  
  interface Props {
    class?: string;
    quantity?: number;
    staticity?: number;
    ease?: number;
    refresh?: boolean;
    color?: string;
    vx?: number;
    vy?: number;
  }
  
  let {
    class: className = '',
    quantity = 30,
    staticity = 50,
    ease = 50,
    refresh = false,
    color = '#ffffff',
    vx = 0,
    vy = 0
  }: Props = $props();
  
  let canvasRef: HTMLCanvasElement;
  let context: CanvasRenderingContext2D;
  let circles: any[] = [];
  let canvasSize = { w: 0, h: 0 };
  let dpr = typeof window !== 'undefined' ? window.devicePixelRatio : 1;
  
  function initCanvas() {
    if (canvasRef) {
      context = canvasRef.getContext('2d')!;
      resizeCanvas();
      
      circles.length = 0;
      for (let i = 0; i < quantity; i++) {
        circles.push({
          x: Math.random() * canvasSize.w,
          y: Math.random() * canvasSize.h,
          translateX: 0,
          translateY: 0,
          size: Math.random() * 2 + 0.1,
          alpha: 0,
          targetAlpha: Math.random(),
          dx: (Math.random() - 0.5) * 0.2,
          dy: (Math.random() - 0.5) * 0.2,
          magnetism: 0.1 + Math.random() * 4
        });
      }
    }
  }
  
  function resizeCanvas() {
    if (canvasRef) {
      canvasSize.w = canvasRef.offsetWidth;
      canvasSize.h = canvasRef.offsetHeight;
      canvasRef.width = canvasSize.w * dpr;
      canvasRef.height = canvasSize.h * dpr;
      context.scale(dpr, dpr);
    }
  }
  
  function drawCircle(circle: any, update = false) {
    if (!context) return;
    
    const { x, y, translateX, translateY, size, alpha } = circle;
    context.translate(translateX, translateY);
    context.beginPath();
    context.arc(x, y, size, 0, 2 * Math.PI);
    context.fillStyle = `rgba(${parseInt(color.slice(1, 3), 16)}, ${parseInt(color.slice(3, 5), 16)}, ${parseInt(color.slice(5, 7), 16)}, ${alpha})`;
    context.fill();
    context.setTransform(dpr, 0, 0, dpr, 0, 0);
    
    if (!update) {
      return;
    }
    
    circle.alpha += (circle.targetAlpha - circle.alpha) * 0.02;
    circle.x += circle.dx;
    circle.y += circle.dy;
    circle.translateX += (vx - circle.translateX) / ease;
    circle.translateY += (vy - circle.translateY) / ease;
    
    if (circle.x < -circle.size) circle.x = canvasSize.w + circle.size;
    else if (circle.x > canvasSize.w + circle.size) circle.x = -circle.size;
    if (circle.y < -circle.size) circle.y = canvasSize.h + circle.size;
    else if (circle.y > canvasSize.h + circle.size) circle.y = -circle.size;
  }
  
  function clearContext() {
    if (context) {
      context.clearRect(0, 0, canvasSize.w, canvasSize.h);
    }
  }
  
  function animate() {
    clearContext();
    circles.forEach((circle) => drawCircle(circle, true));
    requestAnimationFrame(animate);
  }
  
  onMount(() => {
    initCanvas();
    animate();
  });
</script>

<canvas
  bind:this={canvasRef}
  class={cn('pointer-events-none', className)}
  bind:clientWidth={canvasSize.w}
  bind:clientHeight={canvasSize.h}
/>
```

## Shine Border

Create animated shine effects on element borders.

### Basic Usage

```svelte
<script>
  import ShineBorder from '$lib/components/sv/magic/special-effects/shine-border/shine-border.svelte';
</script>

<ShineBorder 
  class="text-center text-2xl font-bold"
  color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
>
  Shining Border Effect
</ShineBorder>
```

### Component Code

```svelte
<script lang="ts">
  import { cn } from '$lib/utils';
  
  interface Props {
    borderRadius?: number;
    borderWidth?: number;
    duration?: number;
    color?: string | string[];
    class?: string;
    children: any;
  }
  
  let {
    borderRadius = 8,
    borderWidth = 1,
    duration = 14,
    color = '#000000',
    class: className = '',
    children
  }: Props = $props();
  
  const normalizedColor = Array.isArray(color) ? color.join(',') : color;
</script>

<div
  style={`
    --border-radius: ${borderRadius}px;
    --border-width: ${borderWidth}px;
    --duration: ${duration}s;
    --mask-linear-gradient: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    --background-radial-gradient: radial-gradient(transparent,transparent, ${normalizedColor},transparent,transparent);
  `}
  class={cn(
    'relative grid min-h-[60px] w-fit min-w-[300px] place-items-center rounded-[--border-radius] bg-white p-3 text-black',
    'before:absolute before:inset-0 before:rounded-[--border-radius] before:p-[--border-width] before:will-change-[background-position] before:content-[""] before:![-webkit-mask-composite:xor] before:[background-image:--background-radial-gradient] before:[background-size:300%_300%] before:[mask:--mask-linear-gradient] before:[mask-composite:exclude] before:[animation:shine_--duration_infinite_linear]',
    className
  )}
>
  {@render children()}
</div>
```

### Tailwind Config

```css
@keyframes shine {
  0% {
    background-position: 0% 0%;
  }
  50% {
    background-position: 100% 100%;
  }
  to {
    background-position: 0% 0%;
  }
}
```

## API Reference

### Animated Beam Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `containerRef` | `HTMLElement` | - | Container element reference |
| `fromRef` | `HTMLElement` | - | Start element reference |
| `toRef` | `HTMLElement` | - | End element reference |
| `curvature` | `number` | `0` | Curve amount of the beam |
| `reverse` | `boolean` | `false` | Reverse animation direction |
| `duration` | `number` | `random(3,7)` | Animation duration |
| `gradientStartColor` | `string` | `'#ffaa40'` | Start gradient color |
| `gradientStopColor` | `string` | `'#9c40ff'` | End gradient color |

### Border Beam Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `number` | `200` | Size of the beam |
| `duration` | `number` | `15` | Animation duration |
| `borderWidth` | `number` | `1.5` | Border width |
| `colorFrom` | `string` | `'#ffaa40'` | Start color |
| `colorTo` | `string` | `'#9c40ff'` | End color |

### Meteors Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `number` | `number` | `20` | Number of meteors |

### Orbiting Circles Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `radius` | `number` | `50` | Orbit radius |
| `duration` | `number` | `20` | Animation duration |
| `reverse` | `boolean` | `false` | Reverse direction |
| `path` | `boolean` | `false` | Show orbit path |

### Particles Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `quantity` | `number` | `30` | Number of particles |
| `color` | `string` | `'#ffffff'` | Particle color |
| `ease` | `number` | `50` | Movement ease |
| `refresh` | `boolean` | `false` | Refresh particles |

### Shine Border Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `borderRadius` | `number` | `8` | Border radius |
| `borderWidth` | `number` | `1` | Border width |
| `duration` | `number` | `14` | Animation duration |
| `color` | `string \| string[]` | `'#000000'` | Shine colors |