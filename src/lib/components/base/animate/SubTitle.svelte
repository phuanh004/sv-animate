<script lang="ts">
	import { cn } from '$lib/utils';
	import type { Snippet } from 'svelte';

	let {
		children,
		class: className = '',
		id = crypto.randomUUID()
	}: { children: Snippet; class?: string; id?: string } = $props();
</script>

<h1 class={cn('mb-2 text-xl font-semibold md:text-2xl', className)} id={id}>
	{@render children()}
</h1>
