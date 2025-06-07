<script lang="ts">
	import type { Snippet } from 'svelte';
	import { cn } from '$lib/utils';
	let { children, class: _class = '' }: { children: Snippet; class?: string } = $props();
</script>

<div class="w-full overflow-hidden rounded-md border bg-zinc-950 dark:border-zinc-900">
	<div class="square_svg size-full bg-[length:95px_95px] bg-repeat">
		<div
			class={cn(
				'size-full bg-gradient-to-tr from-zinc-950 via-zinc-950/[0.93] to-zinc-950 p-10',
				_class
			)}
		>
			{@render children()}
		</div>
	</div>
</div>

<style>
	.square_svg {
		background-image: url('./square.svg');
	}
</style>
