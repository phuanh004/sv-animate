<script lang="ts">
	import { watch } from 'runed';
	import { onMount } from 'svelte';

	interface Props {
		src: string;
		className?: string;
		autoPlay?: boolean;
		muted?: boolean;
		loop?: boolean;
		preload?: 'auto' | 'metadata' | 'none';
		fontSize?: string | number;
		fontWeight?: string | number;
		textAnchor?: string;
		dominantBaseline?: string;
		fontFamily?: string;
		as?: string; // dynamic tag
		content?: string | string[]; // used to build the mask
	}

	let {
		src,
		className = '',
		autoPlay = true,
		muted = true,
		loop = true,
		preload = 'auto',
		fontSize = 12,
		fontWeight = 'bold',
		textAnchor = 'middle',
		dominantBaseline = 'middle',
		fontFamily = 'sans-serif',
		as = 'div',
		content = ''
	}: Props = $props();

	let svgMask = $state('');
	let dataUrlMask = $state('');

	// Convert children to plain string if array
	let dynamic_content = $derived(Array.isArray(content) ? content.join('') : content);

	function updateSvgMask() {
		const responsiveFontSize = typeof fontSize === 'number' ? `${fontSize}vw` : fontSize;
		svgMask = `<svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%'>
      <text x='50%' y='50%' font-size='${responsiveFontSize}' font-weight='${fontWeight}'
        text-anchor='${textAnchor}' dominant-baseline='${dominantBaseline}' font-family='${fontFamily}'>
        ${dynamic_content}
      </text>
    </svg>`;
		dataUrlMask = `url("data:image/svg+xml,${encodeURIComponent(svgMask)}")`;
	}

	onMount(() => {
		updateSvgMask();
	});

	watch(
		[
			() => content,
			() => fontSize,
			() => fontWeight,
			() => textAnchor,
			() => dominantBaseline,
			() => fontFamily
		],
		() => {
			updateSvgMask();
		}
	);
</script>

<svelte:window onresize={updateSvgMask} />
<svelte:element this={as} class={`relative h-full w-full ${className}`}>
	<div
		class="absolute inset-0 flex items-center justify-center"
		style="
      mask-image: {dataUrlMask};
      -webkit-mask-image: {dataUrlMask};
      mask-size: contain;
      -webkit-mask-size: contain;
      mask-repeat: no-repeat;
      -webkit-mask-repeat: no-repeat;
      mask-position: center;
      -webkit-mask-position: center;
    "
	>
		<video
			class="h-full w-full object-cover"
			autoplay={autoPlay}
			{muted}
			{loop}
			{preload}
			playsinline
		>
			<source {src} />
			Your browser does not support the video tag.
		</video>
		<!-- if you want to add YouTube Video prefer using Iframe  -->
		<!-- Iframe Docs : https://www.w3schools.com/html/html_youtube.asp -->
		<!-- <iframe {src} title="svelte" class="w-full h-full"> </iframe> -->
	</div>

	<span class="sr-only">{dynamic_content}</span>
</svelte:element>
