<script lang="ts">
	import { Motion, type MotionProps } from 'motion-start';
	import { onMount, type Snippet } from 'svelte';

	interface Props {
		shadowColor?: string;
		class?: string;
		text: string;
		// Forwarded props (optional animation props)
		animate?: MotionProps['animate'];
		transition?: MotionProps['transition'];
	}

	let { shadowColor = 'black', class: className = '', text, animate, transition }: Props = $props();
</script>

<!-- <Motion.span {animate} {transition}> -->
<span
	style="--shadow-color: {shadowColor};"
	data-text={text}
	class={[
		'after:animate-line-shadow relative z-0 inline-flex after:absolute after:top-[0.04em] after:left-[0.04em] after:-z-10  after:bg-[linear-gradient(45deg,transparent_45%,var(--shadow-color)_45%,var(--shadow-color)_55%,transparent_0)] after:bg-[length:0.06em_0.06em] after:bg-clip-text after:text-transparent after:content-[attr(data-text)]',
		className
	]}
>
	{text}
</span>
<!-- </Motion.span> -->
