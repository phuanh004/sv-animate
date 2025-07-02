<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children }: { children?: Snippet } = $props();
</script>

<div
	class="bg-primary-foreground/50 border-border relative flex min-h-64 w-full items-center justify-center rounded-lg border p-6"
>
	{@render children?.()}
</div>
