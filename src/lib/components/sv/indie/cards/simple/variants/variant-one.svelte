<script lang="ts">
	import type { Snippet } from 'svelte';
	let sharedClasses =
		'rounded-full outline outline-8 dark:outline-gray-950 sm:my-6 md:my-8 size-1 my-4 outline-gray-50 bg-green-400';
	let {
		children,
		class: _class = ''
	}: {
		children: Snippet;
		class?: string;
	} = $props();
</script>

<div>
	<div
		class="relative mx-auto w-full rounded-lg border border-dashed border-zinc-300 px-4 sm:px-6 md:px-8 dark:border-zinc-800"
	>
		<!-- Horizontal borders for Top & Bottom -->
		<div
			class="absolute top-4 left-0 -z-0 h-px w-full bg-zinc-400 sm:top-6 md:top-8 dark:bg-zinc-700"
		></div>
		<div
			class="absolute bottom-4 left-0 z-0 h-px w-full bg-zinc-400 sm:bottom-6 md:bottom-8 dark:bg-zinc-700"
		></div>
		<div class="relative w-full border-x border-zinc-400 dark:border-zinc-700">
			{@render Ellipses()}
			<div class="relative z-20 mx-auto py-8">
				<div class={['w-full p-6', _class]}>
					{@render children()}
				</div>
			</div>
		</div>
	</div>
</div>

{#snippet Ellipses()}
	<div class="absolute z-0 grid h-full w-full items-center gap-8 lg:grid-cols-2">
		<section class="absolute z-0 grid h-full w-full grid-cols-2 place-content-between">
			<div class={['-mx-[2.5px]', sharedClasses]}></div>
			<div class={['-mx-[2px] place-self-end', sharedClasses]}></div>
			<div class={['-mx-[2.5px]', sharedClasses]}></div>
			<div class={['-mx-[2px] place-self-end', sharedClasses]}></div>
		</section>
	</div>
{/snippet}
