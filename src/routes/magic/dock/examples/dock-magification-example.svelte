<script>
	import Dock from '$lib/components/sv/magic/components/dock/dock.svelte';
	import DockIcon from '$lib/components/sv/magic/components/dock/dock-icon.svelte';

	// Icons
	import GithubSvg from '$lib/images/svg/github.svg';
	import Twitter from '$lib/images/svg/x.svg';
	import ClaudeSvg from '$lib/images/svg/claude.svg';
	import YouTube from '$lib/images/svg/youtube.svg';
</script>

<div class="relative">
	<Dock magnification={60} distance={110} direction="bottom">
		{#snippet child({ mouseX, magnification, distance })}
			<DockIcon {magnification} {distance} {mouseX} class="bg-black/10 p-3 dark:bg-white/5">
				<img src={GithubSvg} alt="github" width="20" height="20" />
			</DockIcon>
			<DockIcon {magnification} {distance} {mouseX} class="bg-black/10 p-3 dark:bg-white/5">
				<img src={Twitter} alt="twitter" width="20" height="20" />
			</DockIcon>
			<DockIcon {magnification} {distance} {mouseX} class="bg-black/10 p-3 dark:bg-white/5">
				<img src={YouTube} alt="youtube" width="20" height="20" />
			</DockIcon>
			<DockIcon {magnification} {distance} {mouseX} class="bg-black/10 p-3 dark:bg-white/5">
				<img src={ClaudeSvg} alt="claude" width="20" height="20" />
			</DockIcon>
		{/snippet}
	</Dock>
</div>
