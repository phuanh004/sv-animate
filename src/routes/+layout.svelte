<script lang="ts">
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';
	import Navbar from '$lib/components/base/home/Navbar.svelte';

	let { children } = $props();
</script>

<ModeWatcher defaultMode="dark" />
<Navbar />
{@render children()}
