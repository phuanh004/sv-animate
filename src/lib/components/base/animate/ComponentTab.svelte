<script lang="ts">
	import * as Tabs from '$lib/components/ui/tabs/index.js';
	import type { Snippet } from 'svelte';
	import ComponentView from './ComponentView.svelte';
	import * as Code from './codeblock/index';
	import type { SupportedLanguage } from './codeblock/shiki';
	import type { Code as MagicCode } from '$lib/components/setup/magic/types.js';
	let {
		code,
		children,
		lang = 'svelte'
	}: {
		children: Snippet;
		code?: MagicCode | MagicCode[];
		lang?: SupportedLanguage;
	} = $props();
	type TabValue = 'preview' | 'code';
	let value: TabValue = $state('preview');
</script>

<Tabs.Root bind:value class="w-full">
	<Tabs.List>
		<Tabs.Trigger value="preview">Preview</Tabs.Trigger>
		<Tabs.Trigger value="code">Code</Tabs.Trigger>
	</Tabs.List>
	<div>
		{#if value === 'preview'}
			<ComponentView>
				{#if children}
					{@render children?.()}
				{:else}
					<p class="text-muted-foreground">
						No component provided. Please provide a component to render.
					</p>
				{/if}
			</ComponentView>
		{:else if value === 'code'}
			{#if Array.isArray(code)}
				{#each code as codeItem (codeItem.filename)}
					<Code.Root {lang} class="w-full" code={codeItem.filecode}>
						<Code.CopyButton />
						<p class="text-muted-foreground text-sm">{codeItem.filename}</p>
					</Code.Root>
				{/each}
			{:else if code}
				<Code.Overflow>
					<Code.Root {lang} class="w-full" code={code.filecode}>
						<Code.CopyButton />
					</Code.Root>
				</Code.Overflow>
			{/if}
		{/if}
	</div>
</Tabs.Root>
