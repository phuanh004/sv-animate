<script lang="ts">
	import { cn } from '$lib/utils';
	import type { Snippet } from 'svelte';

	let { children, class: _class = '' }: { children: Snippet; class?: string } = $props();
</script>

<div>
	<div class="relative border border-dashed border-zinc-400 dark:border-zinc-700">
		<!-- All four corners -->
		{@render Icon({ class: '-top-3 -left-3' })}
		{@render Icon({ class: '-top-3 -right-3' })}
		{@render Icon({ class: '-bottom-3 -left-3' })}
		{@render Icon({ class: '-bottom-3 -right-3' })}

		<div class={cn('p-6', _class)}>
			{@render children()}
		</div>
	</div>
</div>

{#snippet Icon({ class: _class = '' }: { class?: string })}
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		width={24}
		height={24}
		stroke-width="1"
		stroke="currentColor"
		class={cn('absolute size-6 text-black dark:text-white', _class)}
	>
		<path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
	</svg>
{/snippet}
