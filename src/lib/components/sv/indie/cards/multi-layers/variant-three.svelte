<script lang="ts">
	import type { Snippet } from 'svelte';
	import { cn } from '$lib/utils';
	let { children, class: _class = '' }: { children: Snippet; class?: string } = $props();
</script>

<div class="relative mx-auto h-72 min-w-xl sm:h-56">
	<div
		class="absolute top-6 size-full scale-x-[1.01] scale-y-[.75] rounded-3xl border border-neutral-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900"
		style="transform-origin: top center"
	></div>
	<div
		style="transform-origin: top center"
		class={cn(
			'absolute flex size-full scale-95 items-center justify-center rounded-3xl border border-neutral-200 bg-white p-2 shadow-[0px_0px_16px_#D4D4D8] md:p-4 dark:border-zinc-800 dark:bg-zinc-950 dark:shadow-[0px_0px_64px_rgba(39,39,42,0.6)]',
			_class
		)}
	>
		{@render children()}
	</div>
</div>
