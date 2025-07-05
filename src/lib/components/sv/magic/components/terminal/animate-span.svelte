<script lang="ts">
	import type { Snippet } from 'svelte';
	import { Motion } from 'motion-start';
	import { cn } from '$lib/utils';

	let {
		children,
		delay = 0,
		class: className = ''
	}: { children: Snippet; delay?: number; class?: string } = $props();
</script>

<Motion.div
	initial={{ opacity: 0, y: -5 }}
	animate={{ opacity: 1, y: 0 }}
	transition={{ duration: 0.3, delay: delay / 1000 }}
	class={cn('text-sm font-normal tracking-tight', className)}
>
	{@render children()}
</Motion.div>
