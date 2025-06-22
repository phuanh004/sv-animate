<script lang="ts">
	let { code = '' } = $props();
	let isCopied = $state(false);
	let handleCopy = () => {
		navigator.clipboard.writeText(code);
		isCopied = true;
		setTimeout(() => {
			isCopied = false;
		}, 1500);
	};
</script>

<button
	onclick={handleCopy}
	class="border-border w-[70px] rounded-full border bg-neutral-900 py-1.5 {isCopied
		? 'border-green-400/50 bg-green-900/30 '
		: ''} "
>
	<span
		class="flex items-center justify-center gap-1.5 {isCopied
			? 'text-green-400/70'
			: 'text-neutral-200'} text-xs font-medium"
	>
		{isCopied ? 'Copied!' : 'Copy'}
	</span>
</button>
