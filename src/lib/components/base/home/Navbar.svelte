<script lang="ts">
	import { page } from '$app/state';
	import { slide } from 'svelte/transition';
	import Button from '$lib/components/ui/button/button.svelte';
	import * as NavigationMenu from '$lib/components/ui/navigation-menu/index.js';
	import { cn } from '$lib/utils.js';
	import { navigationMenuTriggerStyle } from '$lib/components/ui/navigation-menu/navigation-menu-trigger.svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	let navs = [
		{ name: 'Home', url: '/' },
		{ name: 'Svelte Magic UI', url: '/magic' },
		{ name: 'Svelte Aceternity UI', url: '/a' },
		{ name: 'Svelte Indie UI', url: '/in' },
		{ name: 'Svelte Luxe UI', url: '/luxe' }
	];
	let url_param = $state(page.url.pathname.split('/')[1]);

	// Mobile and user profile state
	let isMobileMenu = $state(false);
	// Dark & Light Mode
	import { toggleMode, mode } from 'mode-watcher';

	const components: { title: string; href: string; description: string }[] = [
		{
			title: 'Svelte Magic UI',
			href: '/magic',
			description: '50+ free and open-source animated components and effects'
		},
		{
			title: 'Svelte Aceternity UI',
			href: '/a',
			description: 'Copy paste the most trending components and use them in your websites.'
		},
		{
			title: 'Svelte Luxe UI',
			href: '/luxe',
			description:
				'Library of copy and paste components to illuminate your applications with elegance and sophistication.'
		},
		{
			title: 'Svelte Indie UI',
			href: '/indie',
			description: 'Make your website stand out with minimal effort.'
		},
		{
			title: 'Motion Start Examples',
			href: '/motion-start',
			description:
				'A powerful animation library and developer tool suite for making beautiful animations and effects.'
		}
	];

	type ListItemProps = HTMLAttributes<HTMLAnchorElement> & {
		title: string;
		href: string;
		content: string;
	};
</script>

<nav class="sticky top-0 z-50 border-b bg-transparent backdrop-blur-sm">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex h-16 items-center justify-between">
			<div class="flex items-center">
				<a href="/" aria-label="home" class="shrink-0">
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
						><!-- Icon from Solar by 480 Design - https://creativecommons.org/licenses/by/4.0/ --><g
							fill="none"
							stroke="currentColor"
							stroke-width="1.5"
							><path
								d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"
								opacity=".5"
							/><path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="m9 15.5l3-3l3 3m-6-4l3-3l3 3"
							/></g
						></svg
					>
				</a>
				<div class="hidden sm:ml-6 sm:block">
					<!-- Desktop Navigation menu -->
					<NavigationMenu.Root>
						<NavigationMenu.List>
							<!-- <NavigationMenu.Item>
								<NavigationMenu.Trigger>Getting started</NavigationMenu.Trigger>

								<NavigationMenu.Content>
									<ul class="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
										<li class="row-span-3">
											<NavigationMenu.Link>
												{#snippet child()}
													<a
														class="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-gradient-to-b p-6 no-underline outline-none select-none focus:shadow-md"
														href="/"
													>
														<svg
															xmlns="http://www.w3.org/2000/svg"
															class="size-6"
															viewBox="0 0 24 24"
															fill="none"
															stroke="currentColor"
															stroke-width="1.4"
															stroke-linecap="round"
															stroke-linejoin="round"
															><path
																d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
															/><circle cx="12" cy="12" r="4" /></svg
														>
														<div class="mt-4 mb-2 text-lg font-medium">shadcn-svelte</div>
														<p class="text-muted-foreground text-sm leading-tight">
															Beautifully designed components built with Bits UI and Tailwind CSS.
														</p>
													</a>
												{/snippet}
											</NavigationMenu.Link>
										</li>

										{@render ListItem({
											href: '/docs',
											title: 'Introduction',
											content: 'Re-usable components built using Bits UI and Tailwind CSS.'
										})}

										{@render ListItem({
											href: '/docs/installation',
											title: 'Installation',
											content: 'How to install dependencies and structure your app.'
										})}

										{@render ListItem({
											href: '/docs/primitives/typography',
											title: 'Typography',
											content: 'Styles for headings, paragraphs, lists...etc'
										})}
									</ul>
								</NavigationMenu.Content>
							</NavigationMenu.Item> -->

							<NavigationMenu.Item>
								<NavigationMenu.Trigger>Components</NavigationMenu.Trigger>

								<NavigationMenu.Content>
									<ul class="grid w-[400px] gap-3 p-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
										{#each components as component, i (i)}
											{@render ListItem({
												href: component.href,
												title: component.title,
												content: component.description
											})}
										{/each}
									</ul>
								</NavigationMenu.Content>
							</NavigationMenu.Item>

							<NavigationMenu.Item>
								<NavigationMenu.Link href="/docs" class={cn(navigationMenuTriggerStyle())}>
									Documentation
								</NavigationMenu.Link>
							</NavigationMenu.Item>
						</NavigationMenu.List>
					</NavigationMenu.Root>
				</div>
			</div>
			<div class="hidden sm:ml-6 sm:block">
				{@render socials()}
			</div>
			<div class="-mr-2 flex sm:hidden">
				<!-- Mobile menu button -->
				<Button onclick={() => (isMobileMenu = !isMobileMenu)} size="icon" variant="secondary">
					<span class="sr-only">Open main menu</span>
					<!-- Mobile Menu  -->
					<svg
						class="{isMobileMenu ? 'hidden' : 'block'} size-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						aria-hidden="true"
						data-slot="icon"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
						/>
					</svg>
					<!-- Menu Open : Cross -->
					<svg
						class="{isMobileMenu ? 'block' : 'hidden'} size-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						aria-hidden="true"
						data-slot="icon"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
					</svg>
				</Button>
			</div>
		</div>
	</div>

	<!-- Mobile menu, show/hide based on menu state. -->
	{#if isMobileMenu}
		<div transition:slide class="sm:hidden" id="mobile-menu">
			<div class="space-y-1 px-2">
				<!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
				{#each navs as nav}
					<a
						href={nav.url}
						onclick={() => {
							isMobileMenu = false; // Close the menu on click
						}}
						class="text-primary block rounded-md px-3.5 py-1.5 text-sm">{nav.name}</a
					>
				{/each}
			</div>
			<div class="flex justify-end pb-2">
				{@render socials()}
			</div>
		</div>
	{/if}
</nav>

{#snippet ThemeToggle()}
	<Button onclick={toggleMode} variant="ghost" size="icon">
		<!-- Sun Icon -->
		{#if mode.current === 'light'}
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="h-[1.2rem] w-[1.2rem]"
				><circle cx="12" cy="12" r="4" /><path d="M12 2v2" /><path d="M12 20v2" /><path
					d="m4.93 4.93 1.41 1.41"
				/><path d="m17.66 17.66 1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path
					d="m6.34 17.66-1.41 1.41"
				/><path d="m19.07 4.93-1.41 1.41" /></svg
			>
		{:else}
			<!-- Moon Icon -->
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="h-[1.2rem] w-[1.2rem]"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" /></svg
			>
		{/if}
		<span class="sr-only">Toggle theme</span>
	</Button>
{/snippet}

{#snippet socials()}
	<div class="flex items-center space-x-0.5">
		<!-- Gihub -->
		<Button
			target="_blank"
			href="https://github.com/SikandarJODD/sv-animate"
			size="icon"
			variant="ghost"
			><svg
				viewBox="0 0 256 250"
				width="256"
				height="250"
				fill="currentColor"
				xmlns="http://www.w3.org/2000/svg"
				preserveAspectRatio="xMidYMid"
			>
				<path
					d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46 6.397 1.185 8.746-2.777 8.746-6.158 0-3.052-.12-13.135-.174-23.83-35.61 7.742-43.124-15.103-43.124-15.103-5.823-14.795-14.213-18.73-14.213-18.73-11.613-7.944.876-7.78.876-7.78 12.853.902 19.621 13.19 19.621 13.19 11.417 19.568 29.945 13.911 37.249 10.64 1.149-8.272 4.466-13.92 8.127-17.116-28.431-3.236-58.318-14.212-58.318-63.258 0-13.975 5-25.394 13.188-34.358-1.329-3.224-5.71-16.242 1.24-33.874 0 0 10.749-3.44 35.21 13.121 10.21-2.836 21.16-4.258 32.038-4.307 10.878.049 21.837 1.47 32.066 4.307 24.431-16.56 35.165-13.12 35.165-13.12 6.967 17.63 2.584 30.65 1.255 33.873 8.207 8.964 13.173 20.383 13.173 34.358 0 49.163-29.944 59.988-58.447 63.157 4.591 3.972 8.682 11.762 8.682 23.704 0 17.126-.148 30.91-.148 35.126 0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002 256 57.307 198.691 0 128.001 0Zm-80.06 182.34c-.282.636-1.283.827-2.194.39-.929-.417-1.45-1.284-1.15-1.922.276-.655 1.279-.838 2.205-.399.93.418 1.46 1.293 1.139 1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591-.837-.892-.994-2.086-.375-2.66.63-.566 1.787-.301 2.626.591.838.903 1 2.088.363 2.66Zm4.32 7.188c-.785.545-2.067.034-2.86-1.104-.784-1.138-.784-2.503.017-3.05.795-.547 2.058-.055 2.861 1.075.782 1.157.782 2.522-.019 3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49-1.119-1.032-1.43-2.496-.726-3.27.71-.776 2.213-.558 3.315.49 1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033-1.448-.439-2.395-1.613-2.103-2.626.301-1.01 1.747-1.484 3.207-1.028 1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95-1.53.034-2.769-.82-2.786-1.86 0-1.065 1.202-1.932 2.733-1.958 1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37-1.485.271-2.861-.365-3.05-1.386-.184-1.056.893-2.114 2.376-2.387 1.514-.263 2.868.356 3.061 1.403Z"
				/>
			</svg></Button
		>
		<!-- Twitter  -->
		<Button href="https://x.com/Sikandar_Bhide" target="_blank" size="icon" variant="ghost"
			><svg
				xmlns="http://www.w3.org/2000/svg"
				width="1200"
				height="1227"
				fill="currentColor"
				viewBox="0 0 1200 1227"
				><path
					d="M714.163 519.284 1160.89 0h-105.86L667.137 450.887 357.328 0H0l468.492 681.821L0 1226.37h105.866l409.625-476.152 327.181 476.152H1200L714.137 519.284h.026ZM569.165 687.828l-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721H892.476L569.165 687.854v-.026Z"
				/></svg
			></Button
		>
		{@render ThemeToggle()}
	</div>
{/snippet}

{#snippet ListItem({ title, content, href, class: className, ...restProps }: ListItemProps)}
	<li>
		<NavigationMenu.Link>
			{#snippet child()}
				<a
					{href}
					class={cn(
						'hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none',
						className
					)}
					{...restProps}
				>
					<div class="text-sm leading-none font-semibold">{title}</div>
					<p class="text-muted-foreground line-clamp-2 text-sm leading-snug">
						{content}
					</p>
				</a>
			{/snippet}
		</NavigationMenu.Link>
	</li>
{/snippet}
