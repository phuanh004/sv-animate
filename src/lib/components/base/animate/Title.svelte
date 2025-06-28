<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

<h1 class="text-xl mb-2 md:text-3xl font-semibold">
	{@render children()}
</h1>
