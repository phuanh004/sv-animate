<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children }: { children?: Snippet } = $props();
</script>

<div class="relative rounded-md border p-4 min-h-40 flex justify-center items-center">
	{@render children?.()}
</div>
