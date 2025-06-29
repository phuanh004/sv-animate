<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
</script>

<main>
	<section class="relative">
		<div class="relative py-24 lg:py-28">
			<div class="mx-auto max-w-7xl px-6 md:px-12">
				<div class="text-center sm:mx-auto sm:w-10/12 lg:mt-0 lg:mr-auto lg:w-4/5">
					<a href="/magic/blur-fade" class="mx-auto flex w-fit items-center gap-2 rounded-full border p-1 pr-3">
						<span class="bg-muted rounded-full px-2 py-1 text-xs">New</span>
						<span class="text-sm text-muted-foreground">Introducing New Components</span>
						<span class="block h-4 w-px bg-(--color-border)"></span>
						<ArrowRight class="size-4" />
					</a>
					<h1 class="mt-8 text-4xl font-semibold md:text-5xl xl:text-5xl xl:[line-height:1.125]">
						Svelte 5 Animation Components
					</h1>
					<p class=" mx-auto mt-8 hidden max-w-3xl text-lg text-wrap sm:block">
						Free and open-source components, <br /> Build using Svelte 5, Tailwind CSS & Motion-Start
					</p>
					<p class="mx-auto mt-6 max-w-2xl text-wrap sm:hidden">
						Highly customizable components for building modern websites and applications, with your
						personal spark.
					</p>
					<div class="mt-8">
						<Button href="/magic">Svelte Magic UI</Button>
					</div>
				</div>
			</div>
		</div>
	</section>
</main>
