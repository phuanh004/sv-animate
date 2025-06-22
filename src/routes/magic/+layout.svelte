<script lang="ts">
	import MagicSidebar from '$lib/components/base/magic/MagicSidebar.svelte';
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

<MagicSidebar>
	{@render children()}
</MagicSidebar>
