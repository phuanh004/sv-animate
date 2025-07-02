<script lang="ts">
	import { writable } from 'svelte/store';
	import { AnimatePresence, Motion } from 'motion-start';
	import Play from '@lucide/svelte/icons/play';
	import X from '@lucide/svelte/icons/x';

	type AnimationStyle =
		| 'from-bottom'
		| 'from-center'
		| 'from-top'
		| 'from-left'
		| 'from-right'
		| 'fade'
		| 'top-in-bottom-out'
		| 'left-in-right-out';

	// interface HeroVideoProps {
	// 	animationStyle?: AnimationStyle;
	// 	videoSrc: string;
	// 	thumbnailSrc: string;
	// 	thumbnailAlt?: string;

	interface Props {
		// }
		animationStyle?: AnimationStyle;
		videoSrc: string;
		thumbnailSrc: string;
		thumbnailAlt?: string;
		iconColor?: string;
	}

	let {
		animationStyle = 'from-center',
		videoSrc,
		thumbnailSrc,
		thumbnailAlt = 'Video thumbnail',
		iconColor = 'white'
	}: Props = $props();

	let isVideoOpen = $state(false);
	let isCloseHovered = $state(false);
	let isPlayHovered = $state(false);

	function openVideo() {
		isVideoOpen = true;
	}

	function closeVideo() {
		isVideoOpen = false;
	}

	let animationVariants = {
		'from-bottom': {
			initial: { y: 100, opacity: 0 },
			animate: { y: 0, opacity: 1 },
			exit: { y: 100, opacity: 0 }
		},
		'from-center': {
			initial: { scale: 0.5, opacity: 0 },
			animate: { scale: 1, opacity: 1 },
			exit: { scale: 0.5, opacity: 0 }
		},
		'from-top': {
			initial: { y: -100, opacity: 0 },
			animate: { y: 0, opacity: 1 },
			exit: { y: -100, opacity: 0 }
		},
		'from-left': {
			initial: { x: -100, opacity: 0 },
			animate: { x: 0, opacity: 1 },
			exit: { x: -100, opacity: 0 }
		},
		'from-right': {
			initial: { x: 100, opacity: 0 },
			animate: { x: 0, opacity: 1 },
			exit: { x: 100, opacity: 0 }
		},
		fade: {
			initial: { opacity: 0 },
			animate: { opacity: 1 },
			exit: { opacity: 0 }
		},
		'top-in-bottom-out': {
			initial: { y: -100, opacity: 0 },
			animate: { y: 0, opacity: 1 },
			exit: { y: 200, opacity: 0 }
		},
		'left-in-right-out': {
			initial: { x: -100, opacity: 0 },
			animate: { x: 0, opacity: 1 },
			exit: { x: 200, opacity: 0 }
		}
	};

	let selectedAnimation = $derived(animationVariants[animationStyle]);
</script>

<div class="relative">
	<!-- Thumbnail -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<div class="relative cursor-pointer" onclick={openVideo}>
		<img
			src={thumbnailSrc}
			alt={thumbnailAlt}
			width={1920}
			height={1080}
			class="w-full rounded-2xl transition-all duration-200"
		/>
		<!-- {$isPlayHovered===true ? 'blur-[2px]' :'' } to make background blur put this in above img class -->
		<div class="absolute inset-0 flex items-center justify-center">
			<!-- svelte-ignore a11y_no_static_element_interactions -->
			<div
				class="flex size-24 items-center justify-center rounded-full border border-neutral-800 backdrop-blur-md transition-transform duration-300 ease-out"
				onmouseenter={() => (isPlayHovered = true)}
				onmouseleave={() => (isPlayHovered = false)}
			>
				<div
					class="relative flex size-20 items-center justify-center rounded-full border border-neutral-800 backdrop-blur-2xl transition-all duration-300 ease-out"
					class:isPlayHovered
				>
					<Play
						strokeWidth={1.7}
						class="size-8"
						style="transform: scale({isPlayHovered ? 1.1 : 1}); transition: transform 0.3s ease;
			color: {iconColor};
			"
					/>
				</div>
			</div>
		</div>
	</div>

	<AnimatePresence list={[{ key: isVideoOpen }]} let:item>
		{#if item.key}
			<Motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
				<div
					class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md"
				>
					<!-- Modal Content -->
					<Motion.div
						initial={selectedAnimation.initial}
						animate={selectedAnimation.animate}
						exit={selectedAnimation.exit}
						transition={{ type: 'spring', damping: 30, stiffness: 300 }}
						class="relative mx-4 aspect-video w-full max-w-4xl md:mx-0"
					>
						<Motion.button
							class="absolute -top-16 right-0 size-10 rounded-full bg-neutral-900/50 flex items-center justify-center text-xl text-white ring-1 backdrop-blur-md"
							whileHover={{ scale: 1.2 }}
							whileTap={{ scale: 0.95 }}
						>
							<button
								onclick={closeVideo}
								onmouseenter={() => (isCloseHovered = true)}
								onmouseleave={() => (isCloseHovered = false)}
							>
								<X class="size-5" />
							</button>
						</Motion.button>
						<Motion.div
							animate={{ scale: isCloseHovered ? 0.98 : 1 }}
							transition={{ duration: 0.2 }}
							class="relative isolate z-[1] size-full overflow-hidden rounded-2xl border-2 border-white"
						>
							<!-- svelte-ignore a11y_missing_attribute -->
							<iframe
								src={videoSrc}
								class="size-full rounded-2xl"
								allowfullscreen
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							></iframe>
						</Motion.div>
					</Motion.div>
				</div>
			</Motion.div>
		{/if}
	</AnimatePresence>
</div>
