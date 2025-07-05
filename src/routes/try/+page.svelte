<script lang="ts">
	import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "$lib/components/ui/card";

	import WarpBackground from "$lib/components/sv/magic/backgrounds/wrap-bg/warp-background.svelte";

</script>

<div class="flex h-screen items-center justify-center">
	<!-- <h1 class="text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl">
		Ship <AuroraText>beautiful</AuroraText>
	</h1> -->
	<!-- <h1
		class="text-5xl leading-none font-semibold tracking-tighter text-balance sm:text-6xl md:text-7xl lg:text-8xl"
	>
		Ship
		<LineShadowText
			text="Svelte"
			class="italic"
			shadowColor={mode.current === 'dark' ? 'white' : 'black'}
		></LineShadowText>
	</h1> -->
	<!-- <Terminal>
		<TypingAnimation text="&gt; pnpm dlx shadcn@latest init"></TypingAnimation>

		<AnimatedSpan delay={1500} class="text-green-500">
			<span>✔ Preflight checks.</span>
		</AnimatedSpan>

		<AnimatedSpan delay={2000} class="text-green-500">
			<span>✔ Verifying framework. Found Next.js.</span>
		</AnimatedSpan>

		<AnimatedSpan delay={2500} class="text-green-500">
			<span>✔ Validating Tailwind CSS.</span>
		</AnimatedSpan>

		<AnimatedSpan delay={3000} class="text-green-500">
			<span>✔ Validating import alias.</span>
		</AnimatedSpan>

		<AnimatedSpan delay={3500} class="text-green-500">
			<span>✔ Writing components.json.</span>
		</AnimatedSpan>

		<AnimatedSpan delay={4000} class="text-green-500">
			<span>✔ Checking registry.</span>
		</AnimatedSpan>

		<AnimatedSpan delay={4500} class="text-green-500">
			<span>✔ Updating tailwind.config.ts</span>
		</AnimatedSpan>

		<AnimatedSpan delay={5000} class="text-green-500">
			<span>✔ Updating app/globals.css</span>
		</AnimatedSpan>

		<AnimatedSpan delay={5500} class="text-green-500">
			<span>✔ Installing dependencies.</span>
		</AnimatedSpan>

		<AnimatedSpan delay={6000} class="text-blue-500">
			<span>ℹ Updated 1 file:</span>
			<span class="pl-2">- lib/utils.ts</span>
		</AnimatedSpan>

		<TypingAnimation
			delay={6500}
			text="Success! Project initialization completed."
			class="text-muted-foreground"
		></TypingAnimation>

		<TypingAnimation
			delay={7000}
			text="You may now add components."
			class="text-muted-foreground"
		></TypingAnimation>
	</Terminal> -->



	<!-- <Dock direction="middle">
		{#snippet child({ mouseX, magnification, distance })}
			{#each navs as item}
				{@const Icon = item.icon}
				<DockIcon {mouseX} {magnification} {distance}>
					<Icon size={20} strokeWidth={1.2} />
				</DockIcon>
			{/each}
		{/snippet}
	</Dock> -->

	<!-- <div class="relative">
		<Dock
			magnification={60}
			distance={110}
			direction='bottom'
		>
			{#snippet child({ mouseX, magnification, distance })}
				{#each navs as item}
					{@const Icon = item.icon}
					<DockIcon {mouseX} {magnification} {distance} class="bg-black/10 p-3 dark:bg-white/5">
						<Icon size={20} strokeWidth={1.2} />
					</DockIcon>
				{/each}
			{/snippet}

		</Dock>
	</div> -->
	<!-- <NeonGradientCard class="max-w-sm h-fit items-center justify-center text-center">
		<span
			class="pointer-events-none z-10 h-full bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-6xl leading-none font-bold tracking-tighter whitespace-pre-wrap text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]"
		>
			Neon Gradient Card
		</span>
	</NeonGradientCard> -->
	<WarpBackground>
		<Card class="w-80">
			<CardContent class="flex flex-col gap-2 p-4">
				<CardTitle>Congratulations on Your Promotion!</CardTitle>
				<CardDescription>
					Your hard work and dedication have paid off. We&apos;re thrilled to see you take this next
					step in your career. Keep up the fantastic work!
				</CardDescription>
			</CardContent>
		</Card>
	</WarpBackground>
</div>
