<script lang="ts">
	import { cn } from '$lib/utils';
	import type { Snippet } from 'svelte';
	let { children, class: _class = '' }: { children: Snippet; class?: string } = $props();
</script>

<div class="py-14">
	<div class="relative w-full">
		<div
			class="absolute inset-0 scale-x-95 -rotate-[5deg] rounded-lg bg-gray-200 py-10 dark:bg-zinc-800"
		></div>
		<div
			class={cn(
				'backdrop-blur-xl" relative mx-auto rounded-lg px-6 py-10 shadow dark:bg-zinc-900/90',
				_class
			)}
		>
			{@render children()}
		</div>
	</div>
</div>
