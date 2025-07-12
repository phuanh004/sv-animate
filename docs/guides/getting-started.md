# Getting Started with SV-Animate

This guide will help you get up and running with SV-Animate in your Svelte project.

## Installation

### Prerequisites

Before installing SV-Animate, make sure you have:

- **Node.js** 16 or higher
- **Svelte 5** project
- **Tailwind CSS** configured
- **Motion Start** (will be installed automatically)

### Package Installation

```bash
# npm
npm install sv-animate

# pnpm
pnpm add sv-animate

# yarn
yarn add sv-animate

# bun
bun add sv-animate
```

### Peer Dependencies

SV-Animate requires these peer dependencies:

```bash
npm install svelte@^5.0.0 tailwindcss@^3.0.0 motion-start
```

## Initial Setup

### 1. Tailwind CSS Configuration

Add the required animations to your `tailwind.config.js`:

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,svelte,ts}',
    './node_modules/sv-animate/**/*.{js,svelte,ts}'
  ],
  theme: {
    extend: {
      animation: {
        // Text animations
        'gradient': 'gradient 4s ease infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'typing': 'typing 2s steps(20) infinite',
        
        // Button animations
        'pulse': 'pulse var(--duration) ease-in-out infinite',
        'rainbow': 'rainbow 3s ease infinite',
        'slide': 'slide var(--speed) ease-in-out infinite',
        'spin-around': 'spin-around calc(var(--speed) * 2) linear infinite',
        
        // Background animations
        'grid': 'grid 15s linear infinite',
        'ripple': 'ripple 3s ease-in-out infinite',
        'meteor-effect': 'meteor-effect linear infinite',
        
        // Special effects
        'border-beam': 'border-beam var(--duration) infinite linear',
        'orbit': 'orbit linear infinite var(--duration)',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        typing: {
          '0%': { width: '0%' },
          '50%': { width: '100%' },
          '100%': { width: '0%' },
        },
        pulse: {
          '0%, 100%': { transform: 'translate(-50%, -50%) scale(1)', opacity: '1' },
          '50%': { transform: 'translate(-50%, -50%) scale(1.1)', opacity: '0.8' },
        },
        rainbow: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        slide: {
          'to': { transform: 'translate(calc(100cqw - 100%), 0)' },
        },
        'spin-around': {
          'to': { transform: 'rotate(360deg)' },
        },
        grid: {
          '0%': { transform: 'translateY(-50%)' },
          '100%': { transform: 'translateY(0)' },
        },
        ripple: {
          '0%, 100%': { transform: 'translate(-50%, -50%) scale(1)' },
          '50%': { transform: 'translate(-50%, -50%) scale(0.9)' },
        },
        'meteor-effect': {
          '0%': { transform: 'rotate(215deg) translateX(0)', opacity: '1' },
          '70%': { opacity: '1' },
          '100%': { transform: 'rotate(215deg) translateX(-500px)', opacity: '0' },
        },
        'border-beam': {
          '100%': { 'offset-distance': '100%' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg) translateY(calc(var(--radius) * -1px)) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateY(calc(var(--radius) * -1px)) rotate(-360deg)' },
        },
      },
    },
  },
  plugins: [],
}
```

### 2. CSS Variables (Optional)

For better customization, add these CSS variables to your global styles:

```css
/* app.css or global styles */
:root {
  /* Animation speeds */
  --duration-fast: 0.3s;
  --duration-normal: 0.5s;
  --duration-slow: 1s;
  
  /* Common colors */
  --gradient-start: #ffaa40;
  --gradient-stop: #9c40ff;
  --shimmer-color: #ffffff;
  
  /* Motion preferences */
  --motion-reduce: 0;
}

@media (prefers-reduced-motion: reduce) {
  :root {
    --motion-reduce: 1;
  }
  
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

## Your First Component

Let's create a simple page with some SV-Animate components:

```svelte
<!-- src/routes/+page.svelte -->
<script>
  import { 
    BlurIn, 
    ShimmerButton, 
    DotPattern,
    AnimatedGradientText 
  } from 'sv-animate';
</script>

<div class="relative min-h-screen flex flex-col items-center justify-center">
  <!-- Background pattern -->
  <DotPattern 
    class="[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
    width={20}
    height={20}
    cx={2}
    cy={2}
    cr={1}
  />
  
  <!-- Content -->
  <div class="relative z-10 text-center space-y-8">
    <BlurIn>
      <h1 class="text-6xl font-bold text-gray-900 dark:text-white">
        Welcome to SV-Animate
      </h1>
    </BlurIn>
    
    <AnimatedGradientText class="text-xl">
      Beautiful animations for Svelte
    </AnimatedGradientText>
    
    <div class="flex gap-4 justify-center">
      <ShimmerButton class="bg-blue-600 hover:bg-blue-700">
        Get Started
      </ShimmerButton>
      
      <ShimmerButton 
        class="bg-purple-600 hover:bg-purple-700"
        shimmerColor="#ffffff"
        shimmerDuration="3s"
      >
        Learn More
      </ShimmerButton>
    </div>
  </div>
</div>
```

## Component Import Patterns

### Named Imports (Recommended)

```svelte
<script>
  import { BlurIn, ShimmerButton, DotPattern } from 'sv-animate';
</script>
```

### Individual Imports

```svelte
<script>
  import BlurIn from 'sv-animate/text-animations/blur-in';
  import ShimmerButton from 'sv-animate/buttons/shimmer-button';
</script>
```

### Category Imports

```svelte
<script>
  import * as TextAnimations from 'sv-animate/text-animations';
  import * as Buttons from 'sv-animate/buttons';
  
  // Usage: <TextAnimations.BlurIn>
</script>
```

## Basic Usage Patterns

### 1. Text Animations

```svelte
<script>
  import { BlurIn, LetterPullUp, TypingAnimation } from 'sv-animate';
</script>

<!-- Simple blur in -->
<BlurIn>
  <h1>Hello World</h1>
</BlurIn>

<!-- Letter animation -->
<LetterPullUp words="Animated Text" delay={0.05} />

<!-- Typing effect -->
<TypingAnimation 
  text="This text types out..."
  duration={100}
  class="text-2xl font-mono"
/>
```

### 2. Interactive Elements

```svelte
<script>
  import { ShimmerButton, InteractiveHoverButton } from 'sv-animate';
</script>

<!-- Shimmer button -->
<ShimmerButton 
  class="bg-blue-600 px-6 py-3 text-white rounded-lg"
  shimmerColor="#ffffff"
>
  Shimmer Effect
</ShimmerButton>

<!-- Hover button -->
<InteractiveHoverButton text="Hover Me" />
```

### 3. Background Effects

```svelte
<script>
  import { DotPattern, GridPattern, FlickeringGrid } from 'sv-animate';
</script>

<div class="relative h-96">
  <!-- Choose one background -->
  <DotPattern class="opacity-50" />
  <!-- or -->
  <GridPattern strokeDasharray="4 2" />
  <!-- or -->
  <FlickeringGrid squareSize={4} gridGap={6} />
  
  <div class="relative z-10">
    <!-- Your content -->
  </div>
</div>
```

### 4. Advanced Effects

```svelte
<script>
  import { AnimatedBeam, BorderBeam, OrbitingCircles } from 'sv-animate';
  
  let container, from, to;
</script>

<div bind:this={container} class="relative p-8">
  <!-- Elements to connect -->
  <div bind:this={from} class="w-16 h-16 bg-blue-500 rounded-full"></div>
  <div bind:this={to} class="w-16 h-16 bg-purple-500 rounded-full absolute top-8 right-8"></div>
  
  <!-- Animated beam between elements -->
  <AnimatedBeam
    bind:containerRef={container}
    bind:fromRef={from}
    bind:toRef={to}
    gradientStartColor="#3b82f6"
    gradientStopColor="#8b5cf6"
  />
</div>

<!-- Card with border beam -->
<div class="relative p-6 rounded-lg border">
  <BorderBeam size={80} duration={8} />
  <h3>Card with animated border</h3>
</div>
```

## Common Props and Patterns

### Animation Control

Most components accept these common props:

```svelte
<!-- Duration control -->
<BlurIn duration={1.5}>Content</BlurIn>

<!-- Delay -->
<LetterPullUp words="Text" delay={0.1} />

<!-- Custom variants -->
<BlurIn
  variant={{
    hidden: { opacity: 0, y: 50, filter: 'blur(10px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)' }
  }}
>
  Custom Animation
</BlurIn>
```

### Styling

```svelte
<!-- Custom classes -->
<ShimmerButton class="bg-red-500 hover:bg-red-600 px-8 py-4">
  Custom Styled
</ShimmerButton>

<!-- Responsive -->
<DotPattern class="md:opacity-75 lg:opacity-50" />

<!-- Dark mode -->
<GridPattern class="stroke-gray-300 dark:stroke-gray-700" />
```

## Accessibility Considerations

SV-Animate respects user motion preferences:

```css
/* Automatically handled by components */
@media (prefers-reduced-motion: reduce) {
  /* Animations are significantly reduced or disabled */
}
```

For custom accessibility:

```svelte
<script>
  import { onMount } from 'svelte';
  
  let prefersReducedMotion = false;
  
  onMount(() => {
    prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });
</script>

<BlurIn duration={prefersReducedMotion ? 0.1 : 1}>
  Accessible Animation
</BlurIn>
```

## Performance Tips

1. **Import only what you need**:
   ```svelte
   import { BlurIn } from 'sv-animate'; // ✅ Good
   import * as SvAnimate from 'sv-animate'; // ❌ Imports everything
   ```

2. **Use `bind:this` efficiently**:
   ```svelte
   <!-- ✅ Good - bind only when needed -->
   <div bind:this={container}>
   
   <!-- ❌ Avoid - unnecessary bindings -->
   <div bind:this={unnecessaryRef}>
   ```

3. **Optimize heavy animations**:
   ```svelte
   <!-- Reduce particle count on mobile -->
   <Particles quantity={isMobile ? 30 : 100} />
   ```

## Next Steps

- Explore the [Component Documentation](../README.md) for detailed APIs
- Check out [Examples](../examples/) for inspiration
- Read about [Advanced Usage](./advanced-usage.md) for complex scenarios
- Join our [Discord community](https://discord.gg/JDrvAppV) for support

## Troubleshooting

### Common Issues

**Animations not working?**
- Check that Tailwind CSS is properly configured
- Ensure you've added the required keyframes
- Verify Motion Start is installed

**Performance issues?**
- Reduce animation complexity
- Limit the number of animated elements
- Check for unnecessary re-renders

**TypeScript errors?**
- Make sure you're using Svelte 5
- Check that all peer dependencies are installed
- Verify your tsconfig.json includes the library

Need help? [Open an issue](https://github.com/sikandarjodd/sv-animate/issues) or ask in our [Discord](https://discord.gg/JDrvAppV)!