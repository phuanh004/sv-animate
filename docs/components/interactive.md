# Interactive Components

Advanced interactive components that respond to user input and provide engaging experiences.

## Dock Menu

Create a macOS-style dock with magnification effects and smooth animations.

### Basic Usage

```svelte
<script>
  import Dock from '$lib/components/sv/magic/components/dock/dock.svelte';
  import DockIcon from '$lib/components/sv/magic/components/dock/dock-icon.svelte';
</script>

<Dock>
  <DockIcon>
    <img src="/icons/finder.png" alt="Finder" />
  </DockIcon>
  <DockIcon>
    <img src="/icons/safari.png" alt="Safari" />
  </DockIcon>
  <DockIcon>
    <img src="/icons/messages.png" alt="Messages" />
  </DockIcon>
  <DockIcon>
    <img src="/icons/mail.png" alt="Mail" />
  </DockIcon>
</Dock>
```

### Dock Component

```svelte
<script lang="ts">
  import { cn } from '$lib/utils';
  import { setContext } from 'svelte';
  import { writable } from 'svelte/store';
  
  interface Props {
    children: any;
    class?: string;
    magnification?: number;
    distance?: number;
    direction?: 'top' | 'middle' | 'bottom';
  }
  
  let {
    children,
    class: className = '',
    magnification = 60,
    distance = 140,
    direction = 'bottom'
  }: Props = $props();
  
  let mouseX = writable<number | null>(null);
  let mouseY = writable<number | null>(null);
  let isHovering = writable(false);
  
  setContext('dock', {
    mouseX,
    mouseY,
    isHovering,
    magnification,
    distance,
    direction
  });
  
  function handleMouseMove(e: MouseEvent) {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }
  
  function handleMouseLeave() {
    mouseX.set(null);
    mouseY.set(null);
    isHovering.set(false);
  }
  
  function handleMouseEnter() {
    isHovering.set(true);
  }
</script>

<div
  on:mousemove={handleMouseMove}
  on:mouseleave={handleMouseLeave}
  on:mouseenter={handleMouseEnter}
  class={cn(
    'mx-auto flex h-[58px] w-max gap-2 rounded-2xl border p-2 backdrop-blur-md supports-[backdrop-filter]:bg-white/10 dark:border-white/20',
    {
      'items-start': direction === 'top',
      'items-center': direction === 'middle',
      'items-end': direction === 'bottom'
    },
    className
  )}
>
  {@render children()}
</div>
```

### DockIcon Component

```svelte
<script lang="ts">
  import { cn } from '$lib/utils';
  import { getContext } from 'svelte';
  import { derived } from 'svelte/store';
  import { M } from 'motion-start';
  
  interface Props {
    children: any;
    class?: string;
    size?: number;
  }
  
  let { children, class: className = '', size = 40 }: Props = $props();
  
  const dockContext = getContext('dock') as any;
  const { mouseX, mouseY, magnification, distance, direction } = dockContext;
  
  let ref: HTMLDivElement;
  
  const distanceFromMouse = derived(
    [mouseX, mouseY],
    ([$mouseX, $mouseY]) => {
      if ($mouseX === null || $mouseY === null || !ref) return Infinity;
      
      const rect = ref.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      return Math.sqrt(Math.pow($mouseX - centerX, 2) + Math.pow($mouseY - centerY, 2));
    }
  );
  
  const scale = derived(distanceFromMouse, ($distance) => {
    if ($distance > distance) return 1;
    return 1 + (magnification / 100) * (1 - $distance / distance);
  });
  
  const y = derived([scale, distanceFromMouse], ([$scale, $distance]) => {
    if (direction === 'top') return ($scale - 1) * 20;
    if (direction === 'bottom') return ($scale - 1) * -20;
    return 0;
  });
</script>

<M.div
  bind:this={ref}
  animate={{
    scale: $scale,
    y: $y
  }}
  transition={{
    type: 'spring',
    stiffness: 400,
    damping: 30
  }}
  class={cn(
    'flex aspect-square cursor-pointer items-center justify-center rounded-full',
    className
  )}
  style={`width: ${size}px; height: ${size}px;`}
>
  {@render children()}
</M.div>
```

### Examples

#### Custom Direction

```svelte
<Dock direction="top" magnification={80} distance={120}>
  <!-- Icons -->
</Dock>
```

#### Custom Magnification

```svelte
<Dock magnification={100} distance={200}>
  <!-- Icons with stronger magnification -->
</Dock>
```

## File Tree

Create an interactive file system tree with expand/collapse functionality.

### Basic Usage

```svelte
<script>
  import FileTree from '$lib/components/sv/magic/components/file-tree/folder.svelte';
  
  const files = [
    {
      name: 'src',
      children: [
        { name: 'components', children: [
          { name: 'Button.svelte' },
          { name: 'Card.svelte' }
        ]},
        { name: 'routes', children: [
          { name: '+page.svelte' },
          { name: '+layout.svelte' }
        ]},
        { name: 'app.html' }
      ]
    },
    { name: 'package.json' },
    { name: 'README.md' }
  ];
</script>

<FileTree {files} />
```

### Folder Component

```svelte
<script lang="ts">
  import { cn } from '$lib/utils';
  import File from './file.svelte';
  
  interface FileItem {
    name: string;
    children?: FileItem[];
  }
  
  interface Props {
    files: FileItem[];
    class?: string;
  }
  
  let { files, class: className = '' }: Props = $props();
  
  let expandedFolders = new Set<string>();
  
  function toggleFolder(path: string) {
    if (expandedFolders.has(path)) {
      expandedFolders.delete(path);
    } else {
      expandedFolders.add(path);
    }
    expandedFolders = new Set(expandedFolders);
  }
  
  function isExpanded(path: string) {
    return expandedFolders.has(path);
  }
</script>

<div class={cn('font-mono text-sm', className)}>
  {#each files as file, index}
    <File 
      {file} 
      level={0} 
      path={file.name}
      {isExpanded}
      {toggleFolder}
    />
  {/each}
</div>
```

### File Component

```svelte
<script lang="ts">
  import { cn } from '$lib/utils';
  import { slide } from 'svelte/transition';
  
  interface FileItem {
    name: string;
    children?: FileItem[];
  }
  
  interface Props {
    file: FileItem;
    level: number;
    path: string;
    isExpanded: (path: string) => boolean;
    toggleFolder: (path: string) => void;
  }
  
  let { file, level, path, isExpanded, toggleFolder }: Props = $props();
  
  const isFolder = file.children && file.children.length > 0;
  const expanded = isExpanded(path);
  
  function getFileIcon(name: string) {
    if (name.endsWith('.svelte')) return '🟢';
    if (name.endsWith('.ts') || name.endsWith('.js')) return '🟡';
    if (name.endsWith('.json')) return '🔧';
    if (name.endsWith('.md')) return '📄';
    if (name.endsWith('.css')) return '🎨';
    return '📄';
  }
</script>

<div>
  <div
    class={cn(
      'flex items-center py-1 px-2 cursor-pointer hover:bg-muted/50 rounded',
      'transition-colors duration-150'
    )}
    style={`padding-left: ${level * 20 + 8}px`}
    on:click={() => isFolder && toggleFolder(path)}
  >
    <span class="mr-2 w-4 text-center">
      {#if isFolder}
        <span class="transform transition-transform duration-200" class:rotate-90={expanded}>
          ▶
        </span>
      {:else}
        {getFileIcon(file.name)}
      {/if}
    </span>
    <span class={cn(
      'select-none',
      { 'font-medium': isFolder }
    )}>
      {file.name}
    </span>
  </div>
  
  {#if isFolder && expanded && file.children}
    <div transition:slide={{ duration: 200 }}>
      {#each file.children as child}
        <svelte:self 
          file={child} 
          level={level + 1} 
          path={`${path}/${child.name}`}
          {isExpanded}
          {toggleFolder}
        />
      {/each}
    </div>
  {/if}
</div>
```

## Hero Video Dialog

Create an interactive video dialog with play button and modal functionality.

### Basic Usage

```svelte
<script>
  import HeroVideoDialog from '$lib/components/sv/magic/components/hero-video-dialog.svelte';
</script>

<HeroVideoDialog
  class="dark:hidden block"
  animationStyle="from-center"
  videoSrc="https://www.youtube.com/embed/dQw4w9WgXcQ"
  thumbnailSrc="/video-thumbnail.jpg"
  thumbnailAlt="Video thumbnail"
/>
```

### Component Code

```svelte
<script lang="ts">
  import { cn } from '$lib/utils';
  import { onMount } from 'svelte';
  import { M } from 'motion-start';
  
  interface Props {
    class?: string;
    animationStyle?: 'from-center' | 'from-top' | 'from-bottom' | 'fade';
    videoSrc: string;
    thumbnailSrc: string;
    thumbnailAlt?: string;
    playIconColor?: string;
  }
  
  let {
    class: className = '',
    animationStyle = 'from-center',
    videoSrc,
    thumbnailSrc,
    thumbnailAlt = 'Video thumbnail',
    playIconColor = 'white'
  }: Props = $props();
  
  let isVideoOpen = $state(false);
  let videoRef: HTMLVideoElement;
  
  const openVideo = () => {
    isVideoOpen = true;
  };
  
  const closeVideo = () => {
    isVideoOpen = false;
    if (videoRef) {
      videoRef.pause();
    }
  };
  
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      closeVideo();
    }
  };
  
  onMount(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  });
  
  const getAnimationProps = () => {
    switch (animationStyle) {
      case 'from-top':
        return {
          initial: { y: '-100%', opacity: 0 },
          animate: { y: 0, opacity: 1 },
          exit: { y: '-100%', opacity: 0 }
        };
      case 'from-bottom':
        return {
          initial: { y: '100%', opacity: 0 },
          animate: { y: 0, opacity: 1 },
          exit: { y: '100%', opacity: 0 }
        };
      case 'fade':
        return {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 }
        };
      default: // from-center
        return {
          initial: { scale: 0.5, opacity: 0 },
          animate: { scale: 1, opacity: 1 },
          exit: { scale: 0.5, opacity: 0 }
        };
    }
  };
</script>

<div class={cn('relative', className)}>
  <div
    class="relative cursor-pointer group"
    on:click={openVideo}
  >
    <img
      src={thumbnailSrc}
      alt={thumbnailAlt}
      class="w-full rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
    />
    <div class="absolute inset-0 flex items-center justify-center">
      <div
        class="flex items-center justify-center w-20 h-20 bg-black/50 rounded-full backdrop-blur-sm transition-all duration-300 group-hover:bg-black/70 group-hover:scale-110"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke={playIconColor}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="ml-1"
        >
          <polygon points="5,3 19,12 5,21" fill={playIconColor} />
        </svg>
      </div>
    </div>
  </div>
  
  {#if isVideoOpen}
    <div
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      on:click={closeVideo}
    >
      <M.div
        {...getAnimationProps()}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        class="relative w-full max-w-4xl mx-4"
        on:click={(e) => e.stopPropagation()}
      >
        <button
          class="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
          on:click={closeVideo}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        
        <div class="relative pb-[56.25%] h-0">
          <iframe
            bind:this={videoRef}
            src={videoSrc}
            class="absolute top-0 left-0 w-full h-full rounded-lg"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            title="Video player"
          ></iframe>
        </div>
      </M.div>
    </div>
  {/if}
</div>
```

## Terminal

Create an interactive terminal component with typing animations.

### Basic Usage

```svelte
<script>
  import Terminal from '$lib/components/sv/magic/components/terminal/terminal.svelte';
</script>

<Terminal
  class="max-w-2xl"
  title="Terminal"
  commands={[
    { command: 'npm install svelte-animate', output: '✓ Package installed successfully' },
    { command: 'npm run dev', output: 'Server running on http://localhost:5173' }
  ]}
/>
```

### Terminal Component

```svelte
<script lang="ts">
  import { cn } from '$lib/utils';
  import TypingAnimation from './typing-animation.svelte';
  import AnimatedSpan from './animated-span.svelte';
  
  interface Command {
    command: string;
    output?: string;
  }
  
  interface Props {
    class?: string;
    title?: string;
    commands: Command[];
    showHeader?: boolean;
  }
  
  let {
    class: className = '',
    title = 'Terminal',
    commands,
    showHeader = true
  }: Props = $props();
</script>

<div class={cn(
  'w-full bg-black rounded-lg overflow-hidden shadow-2xl font-mono text-sm',
  className
)}>
  {#if showHeader}
    <div class="flex items-center gap-2 px-4 py-3 bg-gray-800 border-b border-gray-700">
      <div class="flex gap-2">
        <div class="w-3 h-3 bg-red-500 rounded-full"></div>
        <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div class="w-3 h-3 bg-green-500 rounded-full"></div>
      </div>
      <div class="flex-1 text-center text-gray-300 text-xs">
        {title}
      </div>
    </div>
  {/if}
  
  <div class="p-4 space-y-2">
    {#each commands as { command, output }, index}
      <div class="space-y-1">
        <div class="flex items-center gap-2">
          <span class="text-green-400">$</span>
          <TypingAnimation
            text={command}
            duration={50}
            delay={index * 1000}
          />
        </div>
        {#if output}
          <AnimatedSpan
            text={output}
            class="text-gray-300 block pl-4"
            delay={index * 1000 + command.length * 50 + 200}
          />
        {/if}
      </div>
    {/each}
  </div>
</div>
```

### Typing Animation Component

```svelte
<script lang="ts">
  import { cn } from '$lib/utils';
  import { onMount } from 'svelte';
  
  interface Props {
    text: string;
    duration?: number;
    delay?: number;
    class?: string;
  }
  
  let { text, duration = 100, delay = 0, class: className = '' }: Props = $props();
  
  let displayedText = $state('');
  let currentIndex = $state(0);
  let isTyping = $state(false);
  
  onMount(() => {
    const startTyping = () => {
      isTyping = true;
      const typeNextChar = () => {
        if (currentIndex < text.length) {
          displayedText += text[currentIndex];
          currentIndex++;
          setTimeout(typeNextChar, duration);
        } else {
          isTyping = false;
        }
      };
      typeNextChar();
    };
    
    setTimeout(startTyping, delay);
  });
</script>

<span class={cn('text-white', className)}>
  {displayedText}<span class="animate-pulse" class:opacity-0={!isTyping}>|</span>
</span>
```

## API Reference

### Dock Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `magnification` | `number` | `60` | Magnification percentage |
| `distance` | `number` | `140` | Effect distance in pixels |
| `direction` | `'top' \| 'middle' \| 'bottom'` | `'bottom'` | Icon alignment |

### DockIcon Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `number` | `40` | Icon size in pixels |

### File Tree Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `files` | `FileItem[]` | - | File tree structure |

### Hero Video Dialog Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `videoSrc` | `string` | - | Video URL or embed code |
| `thumbnailSrc` | `string` | - | Thumbnail image URL |
| `thumbnailAlt` | `string` | `'Video thumbnail'` | Thumbnail alt text |
| `animationStyle` | `'from-center' \| 'from-top' \| 'from-bottom' \| 'fade'` | `'from-center'` | Modal animation |
| `playIconColor` | `string` | `'white'` | Play button color |

### Terminal Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | `'Terminal'` | Terminal window title |
| `commands` | `Command[]` | - | Commands to display |
| `showHeader` | `boolean` | `true` | Show terminal header |

### Typing Animation Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `text` | `string` | - | Text to type |
| `duration` | `number` | `100` | Typing speed (ms per character) |
| `delay` | `number` | `0` | Delay before starting |

### FileItem Interface

```typescript
interface FileItem {
  name: string;
  children?: FileItem[];
}
```

### Command Interface

```typescript
interface Command {
  command: string;
  output?: string;
}
```