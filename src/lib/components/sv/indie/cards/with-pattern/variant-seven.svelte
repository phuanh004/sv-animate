<script lang="ts">
	import { cn } from '$lib/utils';
	import type { Snippet } from 'svelte';
	let { children, class: _class = '' }: { children: Snippet; class?: string } = $props();
	import noise from './noise.svg';
</script>

<div class="w-full overflow-hidden rounded-md border bg-zinc-950 dark:border-zinc-900">
	<div class="noise size-full bg-[length:500px_500px] bg-repeat">
		<div class={cn('bg-zinc-950/30 p-10', _class)}>
			{@render children()}
		</div>
	</div>
</div>

<style>
	.noise {
		background-image: url('./noise.svg');
	}
</style>
