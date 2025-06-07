<script lang="ts">
	import { cn } from '$lib/utils';
	import type { Snippet } from 'svelte';

	let { children, class: _class = '' }: { children: Snippet; class?: string } = $props();
</script>

<div>
	<div
		class="relative border-[0.5px] border-zinc-400 shadow-[4px_4px_0px_0px_rgba(0,0,0)] dark:border-white/70 dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,0.7)]"
	>
		<div class={cn('p-6', _class)}>
			{@render children()}
		</div>
	</div>
</div>
