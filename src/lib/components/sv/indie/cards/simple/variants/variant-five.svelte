<script lang="ts">
	import { cn } from '$lib/utils';
	import type { Snippet } from 'svelte';

	let { children, class: _class = '' }: { children: Snippet; class?: string } = $props();
</script>

<div>
	<!-- inner card -->
	<div class="rounded-sm border-[0.5px] border-zinc-300 p-2 dark:border-zinc-800">
		<div
			class={cn(
				'rounded-sm border bg-gradient-to-br',
				// light mode
				' border-zinc-300 from-white to-zinc-200/60 shadow-[2px_0_8px_rgba(0,_0,_0,_0.15)]',
				// dark mode
				'dark:border-zinc-900/50 dark:from-zinc-950 dark:to-zinc-900/60 dark:shadow-inner'
			)}
		>
			<div class={cn('p-6', _class)}>
				{@render children()}
			</div>
		</div>
	</div>
</div>
