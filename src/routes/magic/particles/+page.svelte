<script lang="ts">
	import ComponentTab from '$lib/components/base/animate/ComponentTab.svelte';
	import Desc from '$lib/components/base/animate/Desc.svelte';
	import Title from '$lib/components/base/animate/Title.svelte';
	import SubTitle from '$lib/components/base/animate/SubTitle.svelte';
	import * as Toc from '$lib/components/ui/toc';
	import { UseToc } from '$lib/hooks/use-toc.svelte';
	import * as Code from '$lib/components/base/animate/codeblock/index';
	import { magic } from '.';
	import SvelteLogo from '$lib/images/svelte-logo.svelte';

	const toc = new UseToc();
	let PreviewComponent = magic.previewComp;
</script>

<svelte:head>
	<title>{magic.name} - Svelte Magic UI</title>
	<meta name="description" content={magic.desc} />
	<meta property="og:title" content="{magic.name} - Svelte Magic UI" />
	<meta property="og:description" content={magic.desc} />
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content="{magic.name} - Svelte Magic UI" />
	<meta name="twitter:description" content={magic.desc} />
</svelte:head>

<div class="grid grid-cols-1 gap-6 md:grid-cols-7">
	<div class="col-span-1 md:col-span-6">
		<Title>{magic.name}</Title>
		<Desc>
			{magic.desc}
		</Desc>
		<ComponentTab code={magic.previewCode} lang="svelte">
			<PreviewComponent />
		</ComponentTab>
		<div bind:this={toc.ref} class="mt-10">
			<SubTitle id="installation-{magic.name}">Installation</SubTitle>
			<Desc>Copy the code below to your Svelte project to use the {magic.name} animation.</Desc>
			<div class="mb-20">
				{#if Array.isArray(magic.code)}
					{#each magic.code as codeItem (codeItem.filename)}
						{#if codeItem.isExpand}
							<div class="mb-10">
								<div
									class="bg-secondary/60 text-primary/70 ml-2.5 flex w-fit items-center gap-1.5 rounded-t-md border-t border-r border-l px-2 py-1 text-sm"
								>
									<SvelteLogo />
									{codeItem.filename}
								</div>
								<Code.Overflow>
									<Code.Root lang="svelte" code={codeItem.filecode}>
										<Code.CopyButton />
										<p class="text-muted-foreground text-sm">{codeItem.filename}</p>
									</Code.Root>
								</Code.Overflow>
							</div>
						{:else}
							<Code.Root lang="svelte" code={codeItem.filecode}>
								<Code.CopyButton />
								<p class="text-muted-foreground text-sm">{codeItem.filename}</p>
							</Code.Root>
						{/if}
					{/each}
				{:else if magic.code}
					<Code.Overflow>
						<Code.Root lang="svelte" class="w-full" code={magic.code.filecode}>
							<Code.CopyButton />
						</Code.Root>
					</Code.Overflow>
				{/if}
			</div>
			<!-- Examples -->
			{#if magic.examples}
				<SubTitle id="examples-{magic.name}">Examples</SubTitle>
				<div>
					{#each magic.examples as item}
						{@const ExampleComponent = item.component}
						<SubTitle id={item.name} class=" md:text-xl">{item.name}</SubTitle>
						<div class="mb-6">
							<ComponentTab code={item.code} lang="svelte">
								<ExampleComponent />
							</ComponentTab>
						</div>
					{/each}
				</div>
			{/if}
		</div>
	</div>
	<div class="sticky top-24 h-fit">
		<div class="col-span-1 hidden flex-col md:flex">
			<p class="text-sm/tight">On This Page</p>
			<div class="mt-2">
				<Toc.Root toc={toc.current} />
			</div>
		</div>
	</div>
</div>
