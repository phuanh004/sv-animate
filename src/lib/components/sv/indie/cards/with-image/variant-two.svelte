<script lang="ts">
	import type { Snippet } from 'svelte';
	import { cn } from '$lib/utils';
	let { children, class: _class = '' }: { children: Snippet; class?: string } = $props();
</script>

<div class="group relative aspect-[4/3] overflow-hidden rounded-2xl">
	<img
		src="https://i.pinimg.com/564x/e2/3c/fb/e23cfb960318ded88fde45ad4601c4d8.jpg"
		placeholder="blur"
		alt="don corleone"
		class="m-0 w-full object-cover"
	/>
	<!--  overlay  -->
	<div class="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/10"></div>
	<div
		class={cn(
			'absolute inset-x-0 bottom-2 flex size-full flex-col justify-end px-4 pb-1 md:pb-4',
			_class
		)}
	>
		{@render children()}
	</div>
</div>
