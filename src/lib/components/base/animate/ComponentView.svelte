<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children }: { children?: Snippet } = $props();
</script>

<div class="relative rounded-lg border p-4 min-h-64 border-muted flex justify-center items-center">
	{@render children?.()}
</div>
