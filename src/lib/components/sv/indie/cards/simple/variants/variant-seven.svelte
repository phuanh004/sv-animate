<script lang="ts">
	import { cn } from '$lib/utils';
	import type { Snippet } from 'svelte';

	let { children, class: _class = '' }: { children: Snippet; class?: string } = $props();
</script>

<div class="relative rounded-md border-2 border-zinc-100 dark:border-zinc-700">
	<!-- All four rounded borders -->
	{@render Icon({ class: '-top-0.5 -left-0.5 rounded-tl-md border-t-2 border-l-2' })}
	{@render Icon({ class: '-top-0.5 -right-0.5 rounded-tr-md border-t-2 border-r-2' })}
	{@render Icon({ class: '-bottom-0.5 -left-0.5 rounded-bl-md border-b-2 border-l-2' })}
	{@render Icon({ class: '-right-0.5 -bottom-0.5 rounded-br-md border-r-2 border-b-2' })}

	<div class={cn('p-6', _class)}>
		{@render children()}
	</div>
</div>

{#snippet Icon({ class: _class = '' }: { class?: string })}
	<div class={cn('absolute size-6 border-zinc-700 dark:border-zinc-200', _class)}></div>
{/snippet}
