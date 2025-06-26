<script>
	import PulsatingButton from '$lib/components/sv/magic/buttons/pulsating-button.svelte';
</script>

<div class="flex flex-wrap items-center justify-center gap-10">
	<PulsatingButton />
	<PulsatingButton pulseColor="rgba(0, 255, 255, 0.2)" class="dark:bg-[#00ffff]" />
	<PulsatingButton pulseColor="rgba(255, 255, 255, 0.2)" class="dark:bg-white" />
</div>
