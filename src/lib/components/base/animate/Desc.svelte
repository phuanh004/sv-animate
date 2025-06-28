<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

<p class="text-muted-foreground mb-2 text-sm md:text-base">
	{@render children()}
</p>
