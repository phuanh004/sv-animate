<script lang="ts" module>
	export type TocProps = {
		toc: Heading[];
		class?: string;
		/** Indicates whether this is a child component or root component */
		isChild?: boolean;
	};
</script>

<script lang="ts">
	import type { Heading } from '$lib/hooks/use-toc.svelte';
	import { cn } from '$lib/utils';
	import Self from './toc.svelte';

	let { toc, isChild = false, class: className }: TocProps = $props();
</script>

<ul class={cn('m-0 list-none text-xs', { 'pl-4': isChild })}>
	{#each toc as heading, i (i)}
		<li
			class={cn('text-muted-foreground hover:text-primary mt-0 pt-2 transition-all', {
				'text-foreground': heading.active
			})}
		>
			{#if heading.id}
				<button
					onclick={() => {
						if (heading.id) {
							let element = document.getElementById(heading.id);
							if (element) {
								element.scrollIntoView({
									behavior: 'smooth',
									block: 'start'
								});
							}
						}
					}}
					class={[
						'hover:text-foreground text-muted-foreground block cursor-pointer',
						heading.active ? 'text-primary' : 'text-muted-foreground'
					]}
				>
					{heading.label}
				</button>
			{:else}
				{heading.label}
			{/if}
		</li>
		{#if heading.children.length > 0}
			<Self class={className} toc={heading.children} isChild={true} />
		{/if}
	{/each}
</ul>
