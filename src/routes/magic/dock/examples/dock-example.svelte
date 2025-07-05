<script>
	import * as Tooltip from '$lib/components/ui/tooltip';
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import Dock from '$lib/components/sv/magic/components/dock/dock.svelte';
	import DockIcon from '$lib/components/sv/magic/components/dock/dock-icon.svelte';

	// Lucide Svelte
	import Home from '@lucide/svelte/icons/home';
	import PencilLine from '@lucide/svelte/icons/pencil-line';
	import TvMinimalPlay from '@lucide/svelte/icons/tv-minimal-play';
	// Simple Icons : simpleicons.org
	import TwitterSvg from '$lib/images/svg/x.svg';
	import GithubSvg from '$lib/images/svg/github.svg';
	import LinkedInSvg from '$lib/images/svg/linkedin.svg';
	import MailSvg from '$lib/images/svg/mail.svg';

	let navs = {
		navbar: [
			{ label: 'Home', icon: Home, href: '#' },
			{ label: 'Blog', icon: PencilLine, href: '#' },
			{ label: 'Developer', icon: TvMinimalPlay, href: '#' }
		],
		contact: [
			{ label: 'Github', icon: GithubSvg, href: '#' },
			{ label: 'LinkedIn', icon: LinkedInSvg, href: '#' },
			{ label: 'X', icon: TwitterSvg, href: '#' },
			{ label: 'Email', icon: MailSvg, href: '#' }
		]
	};
</script>

<div
	class="via-background relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-gradient-to-b from-transparent to-transparent md:shadow-xl"
>
	<span
		class="pointer-events-none bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-4xl leading-none font-semibold whitespace-pre-wrap text-transparent md:text-8xl dark:from-white dark:to-slate-900/10"
	>
		Svelte Dock
	</span>
	<div>
		<Dock direction="middle" class="relative">
			{#snippet child({ mouseX, magnification, distance })}
				{#each navs.navbar as item}
					<DockIcon {mouseX} {magnification} {distance}>
						<Tooltip.Provider>
							<Tooltip.Root>
								<Tooltip.Trigger
									class="mx-0 rounded-full p-3 transition-all duration-200 hover:bg-zinc-900/80"
								>
									<svelte:component this={item.icon} size={22} strokeWidth={1.2} />
								</Tooltip.Trigger>
								<Tooltip.Content sideOffset={8}>
									<p>{item.label}</p>
								</Tooltip.Content>
							</Tooltip.Root>
						</Tooltip.Provider>
					</DockIcon>
				{/each}
				<Separator orientation="vertical" class="h-full w-[0.6px]" />
				{#each navs.contact as item}
					<DockIcon {mouseX} {magnification} {distance}>
						<Tooltip.Provider>
							<Tooltip.Root>
								<Tooltip.Trigger
									class="rounded-full transition-all duration-200 hover:bg-zinc-900/80"
								>
									<img src={item.icon} alt={item.label} class="m-3 h-5 w-5" />
								</Tooltip.Trigger>
								<Tooltip.Content sideOffset={9}>
									<p>{item.label}</p>
								</Tooltip.Content>
							</Tooltip.Root>
						</Tooltip.Provider>
					</DockIcon>
				{/each}
			{/snippet}
		</Dock>
	</div>
</div>
