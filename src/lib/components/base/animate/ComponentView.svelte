<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children }: { children?: Snippet } = $props();
</script>

<div
	class="bg-primary-foreground relative flex min-h-64 w-full items-center justify-center rounded-lg border p-4"
>
	{@render children?.()}
</div>
