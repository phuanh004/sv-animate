<script lang="ts">
	import { cn } from '$lib/utils';
	type CardBodyProps = {
		title?: string;
		desc?: string;
		class?: string;
	};
	let {
		title = 'Svelte Indie UI',
		desc = 'A simple and customizable card body component for your Svelte projects.',
		class: _class
	}: CardBodyProps = $props();
</script>

<div class={cn('text-start', _class)}>
	<h3 class="mb-1 text-xl font-bold text-gray-900 dark:text-gray-100">
		{title}
	</h3>
	<p class="text-gray-700 dark:text-gray-300">
		{desc}
	</p>
</div>
