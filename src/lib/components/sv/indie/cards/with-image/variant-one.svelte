<script lang="ts">
	import { cn } from '$lib/utils';
	import type { Snippet } from 'svelte';
	let { children, class: _class = '' }: { children: Snippet; class?: string } = $props();
</script>

<div class="group relative aspect-[4/3] overflow-hidden rounded-2xl">
	<img
		class="m-0 w-full object-cover"
		src="https://i.pinimg.com/564x/4c/91/3c/4c913ce774559e1eaad5c302b74a1d2e.jpg"
		alt="card"
		placeholder="image"
	/>
	<!-- overlay  -->
	<div
		class="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/60 to-stone-900/5 backdrop-blur-[2px] transition-all duration-300"
	></div>
	<div
		class={cn(
			'absolute inset-x-0 bottom-2 flex size-full flex-col justify-end px-4 pb-0.5 md:pb-4',
			_class
		)}
	>
		{@render children()}
	</div>
</div>
