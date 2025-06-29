<script lang="ts">
	import ComponentTab from '$lib/components/base/animate/ComponentTab.svelte';
	import Desc from '$lib/components/base/animate/Desc.svelte';
	import Title from '$lib/components/base/animate/Title.svelte';
	import { blur_fade } from './index';
	import SubTitle from '$lib/components/base/animate/SubTitle.svelte';
	import * as Toc from '$lib/components/ui/toc';
	import { UseToc } from '$lib/hooks/use-toc.svelte';
	import * as Code from '$lib/components/base/animate/codeblock/index';

	const toc = new UseToc();
	let PreviewComponent = blur_fade.previewComp;
</script>

<div class="relative flex md:gap-8">
	<div class="flex grow flex-col">
		<Title>{blur_fade.name}</Title>
		<Desc>
			{blur_fade.desc}
		</Desc>
		<ComponentTab code={blur_fade.previewCode} lang="svelte">
			<PreviewComponent />
		</ComponentTab>
		<div bind:this={toc.ref} class="gap- mt-10 flex flex-col">
			<SubTitle id="installation">Installation</SubTitle>
			<Desc>Copy the code below to your Svelte project to use the Blur Fade animation.</Desc>
			<div class="mb-20">
				{#if Array.isArray(blur_fade.code)}
					{#each blur_fade.code as codeItem (codeItem.filename)}
						<Code.Root lang="svelte" class="w-full" code={codeItem.filecode}>
							<Code.CopyButton />
							<p class="text-muted-foreground text-sm">{codeItem.filename}</p>
						</Code.Root>
					{/each}
				{:else if blur_fade.code}
					<Code.Overflow>
						<Code.Root lang="svelte" class="w-full" code={blur_fade.code.filecode}>
							<Code.CopyButton />
						</Code.Root>
					</Code.Overflow>
				{/if}
			</div>
			{#if blur_fade.examples}
				<SubTitle id="examples">Examples</SubTitle>
				<div>
					{#each blur_fade.examples as item}
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
	<div class="sticky top-24 flex h-full min-w-[150px] flex-col">
		<p class="text-sm/tight">On This Page</p>
		<div class="mt-2">
			<Toc.Root toc={toc.current} />
		</div>
	</div>
</div>
