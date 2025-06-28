<script lang="ts">
	import ComponentTab from '$lib/components/base/animate/ComponentTab.svelte';
	import Desc from '$lib/components/base/animate/Desc.svelte';
	import Title from '$lib/components/base/animate/Title.svelte';
	import { blur_fade } from './index';
	import BlurFadeExample from './examples/blur-fade-example.svelte';
</script>

<div class="flex flex-col">
	<Title>{blur_fade.name}</Title>
	<Desc>
		{blur_fade.desc}
	</Desc>
		<ComponentTab code={blur_fade.code} lang="svelte">
			<BlurFadeExample />
		</ComponentTab>
</div>
