<script>
	import Marquee from '$lib/components/sv/magic/marquee/Marquee.svelte';
	import { cn } from '$lib/utils';

	let reviews = [
		{
			name: 'Bhide',
			username: '@Bhide',
			body: 'Noicee work. I love it. Keep it up.',
			img: 'https://avatar.vercel.sh/jack'
		},
		{
			name: 'Jodd',
			username: '@Jodd',
			body: 'Wooww, this is what I was looking for. Great work.',
			img: 'https://avatar.vercel.sh/jill'
		},
		{
			name: 'Pokie',
			username: '@Pokie',
			body: 'Svelte is Amazing and so are you. Keep it up.',
			img: 'https://avatar.vercel.sh/john'
		},
		{
			name: 'pablo',
			username: '@pablo',
			body: 'Remarkable Stuff broooo. Added to my favourites.',
			img: 'https://avatar.vercel.sh/jane'
		},
		{
			name: 'Saloni',
			username: '@Saloni',
			body: 'Acche hai, Chal mera Portfolio banade.',
			img: 'https://avatar.vercel.sh/jenny'
		},
		{
			name: 'Bhai',
			username: '@Bhai',
			body: 'Svelte made easy with these components. Great work.',
			img: 'https://avatar.vercel.sh/james'
		}
	];

	let firstRow = reviews.slice(0, reviews.length / 2);
	let secondRow = reviews.slice(reviews.length / 2);
</script>

<div
	class="bg-background relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg border py-20 md:shadow-xl"
>
	<Marquee pauseOnHover class="[--duration:20s]">
		{#each firstRow as item}
			{@render Reviewcard(item)}
		{/each}
	</Marquee>
	<Marquee reverse pauseOnHover class="[--duration:20s]">
		{#each secondRow as item}
			{@render Reviewcard(item)}
		{/each}
	</Marquee>
	<div
		class="dark:from-background pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white"
	></div>
	<div
		class="dark:from-background pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white"
	></div>
</div>

{#snippet Reviewcard( name:string, username:string, body:string, img:string )}
	<figure
		class={cn(
			'relative w-64 cursor-pointer overflow-hidden rounded-2xl border p-4',
			// light styles
			'border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]',
			// dark styles
			'dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]'
		)}
	>
		<div class="flex flex-row items-center gap-2">
			<img class="rounded-full" width="32" height="32" alt="" src={img} />
			<div class="flex flex-col">
				<!-- svelte-ignore a11y-structure -->
				<figcaption class="text-sm font-medium dark:text-white">
					{name}
				</figcaption>
				<p class="text-xs font-medium dark:text-white/40">{username}</p>
			</div>
		</div>
		<blockquote class="mt-2 text-sm">{body}</blockquote>
	</figure>
{/snippet}
