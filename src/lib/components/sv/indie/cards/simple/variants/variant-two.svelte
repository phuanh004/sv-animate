<script lang="ts">
	import { cn } from '$lib/utils';
	import type { Snippet } from 'svelte';
	let { children, class: _class }: { children: Snippet; class?: string } = $props();
</script>

<div>
	<div class="relative mx-auto w-full px-4 sm:px-6 md:px-8">
		{@render Line({ class: 'top-2 left-0 bg-gradient-to-l sm:top-4 md:top-6' })}
		{@render Line({ class: 'bottom-2 left-0 bg-gradient-to-r sm:bottom-4 md:bottom-6' })}
		{@render Line({
			class: 'inset-y-0 right-2 h-full w-px bg-gradient-to-t sm:right-4 md:right-6'
		})}
		{@render Line({ class: 'inset-y-0 left-2 h-full w-px bg-gradient-to-t sm:left-4 md:left-6' })}

		<div class="relative z-20 mx-auto py-8">
			<div class={cn('p-6', _class)}>
				{@render children()}
			</div>
		</div>
	</div>
</div>

{#snippet Line({ class: _class = '' }: { class?: string })}
	<div
		class={cn(
			'absolute -z-0 h-px w-full from-zinc-200 from-[1%] via-zinc-400 to-zinc-600 dark:from-zinc-900 dark:via-zinc-700 dark:to-zinc-500',
			_class
		)}
	></div>
{/snippet}
