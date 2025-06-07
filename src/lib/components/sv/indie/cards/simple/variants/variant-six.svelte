<script lang="ts">
	import { cn } from '$lib/utils';
	import type { Snippet } from 'svelte';

	let { children, class: _class = '' }: { children: Snippet; class?: string } = $props();
</script>

<div>
	<div
		class="relative rounded-xl border border-zinc-400 bg-zinc-50 shadow-[0px_5px_0px_0px_rgba(0,0,0,0.7)] dark:border-zinc-700 dark:bg-zinc-900/50 dark:shadow-[0px_4px_0px_0px_rgba(255,255,255,0.5)]"
	>
		<div class={cn('p-6', _class)}>
			{@render children()}
		</div>
	</div>
</div>
