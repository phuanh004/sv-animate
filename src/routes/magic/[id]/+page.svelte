<script lang="ts">
	import CodeBlock from '$lib/components/base/home/codeblock/CodeBlock.svelte';
	import ComponentView from '$lib/components/base/home/codeblock/ComponentView.svelte';
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import { page } from '$app/state';
	import { allMagicComponents } from '$lib/components/setup/magic/all-magic';
	import type { MagicComponent } from '$lib/components/setup/magic/types';

	let routeID = $derived(page.params.id);
	let comp = $derived(allMagicComponents.filter((c) => c.id === routeID)[0]) as MagicComponent;
	let MainComponent = $derived(comp.component);

	/*
  Title
  desc
  one example
  installation
  examples

  ---

  Table of Contents
  1. Installation
  2. Examples
  3. Usage
  4. Props

  Contribute
  1. Report an issue
  2. Requst a feature
  3. Edit this page

  */
</script>

<svelte:head>
	<title>{comp.name} · Svelte</title>
	<meta name="description" content={comp.desc} />
	<meta property="og:title" content={comp.name + '· Svelte'} />
	<meta property="og:description" content={comp.desc} />
	<meta property="og:site_name" content="Svelte Tailwind Components" />
	<meta property="og:url" content="https://animation-svelte.vercel.app" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={comp.name + '· Svelte'} />
	<meta name="twitter:description" content={comp.desc} />
	<meta name="twitter:site" content="@Sikandar_Bhide" />
</svelte:head>

<div class="mx-2 my-0 md:mx-4 md:my-2">
	<div>
		<div class="grid min-h-36 w-full grid-cols-1 space-x-6 lg:grid-cols-6">
			<div class="lg:col-span-4">
				<a href="/magic" class="text-muted-foreground flex w-fit items-center gap-1">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="17"
						height="17"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="1.2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="lucide lucide-arrow-left mt-px"
						><path d="m12 19-7-7 7-7" /><path d="M19 12H5" /></svg
					>
					Back
				</a>
				<h1 class="mt-4 mb-3 text-2xl font-bold capitalize md:text-3xl">
					{comp.name}
				</h1>
				<p class="text-muted-foreground text-lg">
					{@html comp.desc}
				</p>
			</div>
		</div>
		<Separator class="mb-4" />
		{#if comp?.component}
			<div>
				<h1 class="mt-4 mb-4 text-2xl font-bold capitalize md:text-3xl">Original Component</h1>

				<ComponentView
					class="{comp?.showGrid === true
						? ' relative overflow-hidden '
						: ''} {comp.class} {comp?.showDots === true ? ' relative overflow-hidden ' : ''}"
				>
					<!-- {#if comp?.showGrid}
						<div
							class="absolute h-full w-full bg-[linear-gradient(to_right,#b1b1b12e_1px,transparent_1px),linear-gradient(to_bottom,#b1b1b12e_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_10%,transparent_100%)] bg-[size:14px_24px]"
						></div>
					{:else if comp?.showDots}
						<div
							class="absolute h-full w-full [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_35%,transparent_100%)]"
						>
							<DotPattern
								class="[mask-image:radial-gradient(600px_circle_at_center,white,transparent)] "
								fillColor="rgba(120, 120, 120,0.4)"
							/>
						</div>
					{/if} -->
					<!-- <svelte:component this={comp.component} /> -->
					<MainComponent />
				</ComponentView>
			</div>
		{/if}

		{#if comp?.code}
			<div class="space-y-4">
				<div>
					<h1 class="mt-0 mb-1 text-2xl font-bold capitalize md:text-3xl">Component Usage</h1>
					<p class="text-muted-foreground mb-3 ml-1">
						Copy the below component code and paste it. Checkout Above Example for Usage
					</p>
				</div>
				{#if Array.isArray(comp.code)}
					{#each comp.code as item}
						<CodeBlock code={item.filecode} fileName={item.filename} lang="svelte" />
					{/each}
				{:else}
					<CodeBlock code={comp.code.filecode} fileName={comp.code.filename} lang="svelte" />
				{/if}
			</div>
		{/if}
		{#if comp?.tailwind}
			{#key comp?.tailwind}
				<CodeBlock code={comp.tailwind} fileName="tailwind.config.ts" lang="json" />
			{/key}
		{/if}
	</div>
</div>
