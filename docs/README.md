# SV-Animate Documentation

A comprehensive collection of Svelte 5 animation components inspired by the best UI libraries, providing smooth, engaging animations for modern web applications.

## 🚀 Overview

SV-Animate is a Svelte component library that brings beautiful animations to your applications. Built with Svelte 5, Tailwind CSS, and Motion Start, it offers a wide range of pre-built animation components that are easy to integrate and customize.

## 📦 Installation

```bash
npm install sv-animate
# or
pnpm add sv-animate
# or
yarn add sv-animate
```

## 🎯 Quick Start

```svelte
<script>
  import { BlurIn, ShimmerButton } from 'sv-animate';
</script>

<BlurIn>
  <h1 class="text-4xl font-bold">Welcome to SV-Animate</h1>
</BlurIn>

<ShimmerButton class="mt-4">
  Get Started
</ShimmerButton>
```

## 📚 Component Categories

### [Text Animations](./components/text-animations.md)
Create engaging text effects with smooth animations:
- **Animated Gradient Text** - Text with flowing gradient colors
- **Blur In** - Text that blurs into view
- **Letter Pull Up** - Letters animate upward with bounce
- **Typing Animation** - Typewriter effect
- **Word Rotate** - Rotating word carousel
- And 10 more text animations...

### [Button Components](./components/buttons.md)
Interactive buttons with hover effects and animations:
- **Interactive Hover Button** - Smooth hover interactions
- **Pulsating Button** - Continuous pulsing effect
- **Rainbow Button** - Animated rainbow colors
- **Shimmer Button** - Moving shimmer effect

### [Background Effects](./components/backgrounds.md)
Animated background patterns and effects:
- **Dot Pattern** - Animated dot grids with masking
- **Grid Pattern** - Customizable grid backgrounds
- **Flickering Grid** - Dynamic flickering squares
- **Retro Grid** - 3D perspective grid animation
- **Ripple Effect** - Concentric ripple animations
- **Marquee** - Scrolling content animations

### [Special Effects](./components/special-effects.md)
Advanced visual effects for dynamic interfaces:
- **Animated Beam** - Connect elements with animated beams
- **Border Beam** - Moving border animations
- **Meteors** - Falling meteor particle effects
- **Orbiting Circles** - Elements orbiting around points
- **Particles** - Floating particle systems
- **Shine Border** - Animated border highlights

### [Interactive Components](./components/interactive.md)
Complex interactive elements with animations:
- **Dock Menu** - macOS-style dock with magnification
- **File Tree** - Expandable file system tree
- **Hero Video Dialog** - Video modal with animations
- **Terminal** - Interactive terminal with typing effects

## 🎨 Design Philosophy

SV-Animate focuses on:

- **Performance** - Optimized animations using modern web APIs
- **Accessibility** - Respects user preferences for reduced motion
- **Customization** - Extensive props for tweaking animations
- **Developer Experience** - TypeScript support and intuitive APIs
- **Design Quality** - Inspired by top-tier UI libraries

## 🛠 Technical Stack

- **Svelte 5** - Latest Svelte with runes and improved reactivity
- **Motion Start** - Modern animation library for Svelte
- **Tailwind CSS** - Utility-first CSS framework
- **TypeScript** - Full type safety and IntelliSense support

## 💡 Key Features

### Easy Integration
```svelte
<script>
  import { Component } from 'sv-animate';
</script>

<Component>Your content</Component>
```

### Extensive Customization
```svelte
<AnimatedBeam
  gradientStartColor="#03D1FF"
  gradientStopColor="#00FFCC"
  duration={3}
  curvature={20}
  reverse={false}
/>
```

### Responsive Design
All components are built with responsive design in mind and work seamlessly across devices.

### Accessibility First
Components respect `prefers-reduced-motion` and include proper ARIA attributes.

## 📖 Usage Examples

### Basic Text Animation
```svelte
<script>
  import { BlurIn } from 'sv-animate';
</script>

<BlurIn duration={1} delay={0.2}>
  <h1 class="text-6xl font-bold">Amazing Text</h1>
</BlurIn>
```

### Interactive Button
```svelte
<script>
  import { ShimmerButton } from 'sv-animate';
</script>

<ShimmerButton 
  class="bg-blue-600 hover:bg-blue-700"
  shimmerColor="#ffffff"
  shimmerDuration="2s"
>
  Click Me!
</ShimmerButton>
```

### Background Pattern
```svelte
<script>
  import { DotPattern } from 'sv-animate';
</script>

<div class="relative h-screen">
  <DotPattern 
    class="[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
    width={20}
    height={20}
    cx={2}
    cy={2}
    cr={1}
  />
  <div class="relative z-10">
    <!-- Your content here -->
  </div>
</div>
```

### Connected Elements
```svelte
<script>
  import { AnimatedBeam } from 'sv-animate';
  
  let container, from, to;
</script>

<div bind:this={container} class="relative h-96">
  <div bind:this={from} class="absolute top-10 left-10">Start</div>
  <div bind:this={to} class="absolute bottom-10 right-10">End</div>
  
  <AnimatedBeam
    bind:containerRef={container}
    bind:fromRef={from}
    bind:toRef={to}
  />
</div>
```

## 🎯 Performance Tips

1. **Use `prefers-reduced-motion`** - Components automatically respect user motion preferences
2. **Optimize renders** - Use `bind:this` efficiently for interactive components
3. **Lazy load** - Import only the components you need
4. **GPU acceleration** - Most animations use `transform` and `opacity` for optimal performance

## 🔧 Configuration

### Tailwind CSS Setup

Add these animations to your `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      animation: {
        'gradient': 'gradient 4s ease infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'meteor-effect': 'meteor-effect linear infinite',
        'orbit': 'orbit linear infinite',
        'ripple': 'ripple 3s ease-in-out infinite',
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
        'meteor-effect': {
          '0%': { transform: 'rotate(215deg) translateX(0)', opacity: 1 },
          '70%': { opacity: 1 },
          '100%': { transform: 'rotate(215deg) translateX(-500px)', opacity: 0 },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg) translateY(calc(var(--radius) * -1px)) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateY(calc(var(--radius) * -1px)) rotate(-360deg)' },
        },
        ripple: {
          '0%, 100%': { transform: 'translate(-50%, -50%) scale(1)' },
          '50%': { transform: 'translate(-50%, -50%) scale(0.9)' },
        },
      },
    },
  },
}
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](./guides/contributing.md) for details.

## 📄 License

MIT License - see [LICENSE](../LICENSE) for details.

## 🙏 Acknowledgments

Inspired by amazing UI libraries:
- [Aceternity UI](https://ui.aceternity.com/)
- [Magic UI](https://magicui.design/)
- [Luxe UI](https://luxeui.com/)
- [Indie UI](https://ui.indie-starter.dev/)
- [Syntax UI](https://syntaxui.com/)

## 📞 Support

- 🐛 [Report a bug](https://github.com/sikandarjodd/sv-animate/issues)
- 💬 [Join our Discord](https://discord.gg/JDrvAppV)
- 🐦 [Follow on Twitter](https://x.com/Sikandar_Bhide)

---

Built with ❤️ for the Svelte community