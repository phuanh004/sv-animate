<script lang="ts">
	import Dock from '$lib/components/sv/magic/components/dock/dock.svelte';
	import DockIcon from '$lib/components/sv/magic/components/dock/dock-icon.svelte';
	// Shadcn Svelte Component
	import * as Tooltip from '$lib/components/ui/tooltip';

	// Lucide Svelte Icons
	import Home from '@lucide/svelte/icons/home';
	import Pencil from '@lucide/svelte/icons/pencil';

	let navs = [
		{ label: 'Home', icon: Home },
		{
			label: 'Blog',
			icon: Pencil
		}
	];
</script>

<Dock direction="middle">
	{#snippet child({ mouseX, magnification, distance })}
		{#each navs as item}
			<DockIcon {mouseX} {magnification} {distance}>
				<Tooltip.Provider>
					<Tooltip.Root>
						<Tooltip.Trigger
							class="rounded-full p-3 transition-all duration-200 hover:bg-zinc-900/80"
						>
							<svelte:component this={item.icon} size={20} strokeWidth={1.2} />
						</Tooltip.Trigger>
						<Tooltip.Content sideOffset={8}>
							<p>{item.label}</p>
						</Tooltip.Content>
					</Tooltip.Root>
				</Tooltip.Provider>
			</DockIcon>
		{/each}
	{/snippet}
</Dock>
