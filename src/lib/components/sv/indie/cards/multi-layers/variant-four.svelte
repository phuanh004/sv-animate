<script lang="ts">
	import type { Snippet } from 'svelte';
	import { cn } from '$lib/utils';
	let { children, class: _class = '' }: { children: Snippet; class?: string } = $props();
</script>

<div class="relative mx-auto h-72 min-w-xl sm:h-48">
	<div
		class="absolute -top-6 size-full scale-[0.95] rounded-3xl border border-neutral-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/30"
		style="transform-origin: top center"
	></div>
	<div
		class="absolute -top-3 size-full scale-[0.97] rounded-3xl border border-neutral-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/40"
		style="transform-origin: top center"
	></div>
	<div
		style="transform-origin: top center"
		class={cn(
			'absolute flex size-full items-center justify-center rounded-3xl border border-neutral-200 bg-white p-2 shadow-xl shadow-black/[0.1] md:p-4 dark:border-zinc-800 dark:bg-zinc-950 dark:shadow-white/[0.02]',
			_class
		)}
	>
		{@render children()}
	</div>
</div>
