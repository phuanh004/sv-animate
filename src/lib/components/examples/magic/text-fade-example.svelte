<script>
	import BlurFade from '$lib/components/sv/magic/blur-fade/blur-fade.svelte';
</script>

<section id="header">
	<BlurFade delay={0.25}>
		<h2 class="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Hello World 👋</h2>
	</BlurFade>
	<BlurFade delay={0.25 * 2}>
		<span class="text-xl tracking-tighter text-pretty sm:text-3xl xl:text-4xl/none">
			Nice to meet you
		</span>
	</BlurFade>
</section>
