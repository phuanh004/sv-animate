<script lang="ts">
	import { ModeWatcher } from 'mode-watcher';
	import Navbar from '$lib/components/base/home/Navbar.svelte';
	let { children } = $props();
	import '../app.css';
</script>

<ModeWatcher defaultMode="dark" />
<Navbar />
{@render children()}
