<script lang="ts">
	import { cn } from '$lib/utils';
	import type { Snippet } from 'svelte';

	let { children, class: className = '' }: { children: Snippet; class?: string } = $props();
</script>

<div
	class={cn(
		'border-border bg-background z-0 h-full max-h-[400px] w-full max-w-lg rounded-xl border',
		className
	)}
>
	<div class="border-border flex flex-col gap-y-2 border-b p-4">
		<div class="flex flex-row gap-x-2">
			<div class="h-2 w-2 rounded-full bg-red-500"></div>
			<div class="h-2 w-2 rounded-full bg-yellow-500"></div>
			<div class="h-2 w-2 rounded-full bg-green-500"></div>
		</div>
	</div>
	<pre class="px-4">
    <code class="grid gap-y-1 overflow-auto">{@render children()}</code>
  </pre>
</div>
