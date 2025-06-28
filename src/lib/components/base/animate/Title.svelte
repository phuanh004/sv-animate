<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

<h1 class="mb-2 text-xl font-semibold md:text-3xl">
	{@render children()}
</h1>
