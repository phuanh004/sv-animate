<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
		class?: string;
		colors?: string[];
		speed?: number;
	}

	let {
		children,
		class: className = '',
		colors = ['#a142ff', '#ff4242', '#42d0ff', '#42a1ff'],
		speed = 1
	}: Props = $props();
	// colors = ['#FF0080', '#7928CA', '#0070F3', '#38bdf8'],

	let gradientStyle = $derived({
		backgroundImage: `linear-gradient(135deg, ${colors.join(', ')}, ${colors[0]})`,
		WebkitBackgroundClip: 'text',
		WebkitTextFillColor: 'transparent',
		animationDuration: `${10 / speed}s`
	});
</script>

<span class={['relative inline-block', className]}>
	<!-- <span class="sr-only">{@render children()}</span> -->
	<span
		class="animate-aurora relative bg-[length:200%_auto] bg-clip-text text-transparent"
		style="
    background-image: {gradientStyle.backgroundImage};
    -webkit-background-clip: {gradientStyle.WebkitBackgroundClip};
    -webkit-text-fill-color: {gradientStyle.WebkitTextFillColor};
    animation-duration: {gradientStyle.animationDuration};"
		aria-hidden="true"
	>
		{@render children()}
	</span>
</span>
