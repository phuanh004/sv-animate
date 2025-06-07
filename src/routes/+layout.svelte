<script lang="ts">
	import { ModeWatcher } from 'mode-watcher';
	import '../app.css';
	import Navbar from '$lib/components/base/home/Navbar.svelte';

	let { children } = $props();
</script>

<ModeWatcher defaultMode="light" />
<Navbar />
{@render children()}
