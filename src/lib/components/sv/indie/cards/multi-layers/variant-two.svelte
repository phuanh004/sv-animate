<script lang="ts">
	import { cn } from '$lib/utils';
	import type { Snippet } from 'svelte';

	let { children, class: _class = '' }: { children: Snippet; class?: string } = $props();
</script>

<div class="relative mx-auto h-72 min-w-xl sm:h-52">
	<div
		class="absolute -top-4 size-full scale-x-90 scale-y-[1.15] rounded-3xl border border-neutral-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900"
		style="transform-origin: top center"
	></div>
	<div
		style="transform-origin: top center"
		class={[
			'absolute flex size-full items-center justify-center rounded-3xl border border-neutral-200 bg-white p-2 shadow-[0px_0px_16px_#D4D4D8] md:p-4 dark:border-zinc-800 dark:bg-zinc-950 dark:shadow-[0px_0px_64px_rgba(39,39,42,0.6)]',
			_class
		]}
	>
		{@render children()}
	</div>
</div>
