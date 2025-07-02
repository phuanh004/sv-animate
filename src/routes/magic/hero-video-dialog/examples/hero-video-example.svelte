<script>
	import HeroVideo from '$lib/components/sv/magic/components/hero-video-dialog.svelte';
	import BorderBeam from '$lib/components/sv/magic/special-effects/border-beam/border-beam.svelte';
</script>

<section
	class="relative mx-auto flex h-screen max-w-5xl flex-col items-center justify-center px-7 lg:px-0"
>
	<div class="relative overflow-hidden rounded-2xl p-1">
		<BorderBeam />
		<HeroVideo
			animationStyle="top-in-bottom-out"
			videoSrc="https://www.youtube.com/embed/rv3Yq-B8qp4?si=kx8K28NzEhMx5g1-"
			thumbnailSrc="https://codemonk.io/blog/content/images/2022/03/Svelte-Feature-Image.png"
			thumbnailAlt="Svelte in 100 Seconds"
			iconColor="#1E1E1F"
		/>
	</div>
</section>
