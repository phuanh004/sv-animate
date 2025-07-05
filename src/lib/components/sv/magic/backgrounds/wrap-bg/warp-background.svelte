<script lang="ts">
	import { onMount, type Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	import Beam from './beam.svelte';
	import { watch } from 'runed';

	interface WarpBackgroundProps extends HTMLAttributes<HTMLDivElement> {
		children: Snippet;
		perspective?: number;
		beamsPerSide?: number;
		beamSize?: number;
		beamDelayMax?: number;
		beamDelayMin?: number;
		beamDuration?: number;
		gridColor?: string;
		class?: string;
	}
	let {
		children,
		perspective = 100,
		class: className = '',
		beamsPerSide = 3,
		beamSize = 5,
		beamDelayMax = 3,
		beamDelayMin = 0,
		beamDuration = 3,
		gridColor = 'var(--border)'
	}: WarpBackgroundProps = $props();

	type BeamType = {
		x: number;
		delay: number;
	};

	let topBeams: BeamType[] = $derived(generateBeams());
	let bottomBeams: BeamType[] = $derived(generateBeams());
	let leftBeams: BeamType[] = $derived(generateBeams());
	let rightBeams: BeamType[] = $derived(generateBeams());

	function generateBeams() {
		const beams: BeamType[] = $state([]);
		const cellsPerSide = Math.floor(100 / beamSize);
		const step = cellsPerSide / beamsPerSide;

		for (let i = 0; i < beamsPerSide; i++) {
			const delay = Math.random() * (beamDelayMax - beamDelayMin) + beamDelayMin;
			beams.push({ x: i * step, delay });
		}
		return beams;
	}
</script>

<div class={`relative rounded border p-20 ${className}`}>
	<div
		style="--perspective: {perspective}px;
		--grid-color: {gridColor};
		--beam-size: {beamSize}%;"
		class="[container-type:size] pointer-events-none absolute top-0 left-0 size-full overflow-hidden [clipPath:inset(0)] [perspective:var(--perspective)] [transform-style:preserve-3d]"
	>
		<!-- Top Side -->
		<div
			class="[container-type:inline-size] absolute z-20 [height:100cqmax] [width:100cqi] [transform-origin:50%_0%] [transform:rotateX(-90deg)] [background-size:var(--beam-size)_var(--beam-size)] [background:linear-gradient(var(--grid-color)_0_1px,_transparent_1px_var(--beam-size))_50%_-0.5px_/var(--beam-size)_var(--beam-size),linear-gradient(90deg,_var(--grid-color)_0_1px,_transparent_1px_var(--beam-size))_50%_50%_/var(--beam-size)_var(--beam-size)] [transform-style:preserve-3d]"
		>
			{#each topBeams as beam, index}
				<Beam
					width="{beamSize}%"
					x="{beam.x * beamSize}%"
					delay={beam.delay}
					duration={beamDuration}
				/>
			{/each}
		</div>

		<!-- Bottom Side -->
		<div
			class="[container-type:inline-size] absolute top-full [height:100cqmax] [width:100cqi] [transform-origin:50%_0%] [transform:rotateX(-90deg)] [background-size:var(--beam-size)_var(--beam-size)] [background:linear-gradient(var(--grid-color)_0_1px,_transparent_1px_var(--beam-size))_50%_-0.5px_/var(--beam-size)_var(--beam-size),linear-gradient(90deg,_var(--grid-color)_0_1px,_transparent_1px_var(--beam-size))_50%_50%_/var(--beam-size)_var(--beam-size)] [transform-style:preserve-3d]"
		>
			{#each bottomBeams as beam, index}
				<Beam
					width={`${beamSize}%`}
					x={`${beam.x * beamSize}%`}
					delay={beam.delay}
					duration={beamDuration}
				/>
			{/each}
		</div>

		<!-- Left Side -->
		<div
			class="[container-type:inline-size] absolute top-0 left-0 [height:100cqmax] [width:100cqh] [transform-origin:0%_0%] [transform:rotate(90deg)_rotateX(-90deg)] [background-size:var(--beam-size)_var(--beam-size)] [background:linear-gradient(var(--grid-color)_0_1px,_transparent_1px_var(--beam-size))_50%_-0.5px_/var(--beam-size)_var(--beam-size),linear-gradient(90deg,_var(--grid-color)_0_1px,_transparent_1px_var(--beam-size))_50%_50%_/var(--beam-size)_var(--beam-size)] [transform-style:preserve-3d]"
		>
			{#each leftBeams as beam, index}
				<Beam
					width={`${beamSize}%`}
					x={`${beam.x * beamSize}%`}
					delay={beam.delay}
					duration={beamDuration}
				/>
			{/each}
		</div>

		<!-- Right Side -->
		<div
			class="[container-type:inline-size] absolute top-0 right-0 [height:100cqmax] [width:100cqh] [transform-origin:100%_0%] [transform:rotate(-90deg)_rotateX(-90deg)] [background-size:var(--beam-size)_var(--beam-size)] [background:linear-gradient(var(--grid-color)_0_1px,_transparent_1px_var(--beam-size))_50%_-0.5px_/var(--beam-size)_var(--beam-size),linear-gradient(90deg,_var(--grid-color)_0_1px,_transparent_1px_var(--beam-size))_50%_50%_/var(--beam-size)_var(--beam-size)] [transform-style:preserve-3d]"
		>
			{#each rightBeams as beam}
				<Beam
					width={`${beamSize}%`}
					x={`${beam.x * beamSize}%`}
					delay={beam.delay}
					duration={beamDuration}
				/>
			{/each}
		</div>
	</div>

	<div class="relative">
		{@render children()}
	</div>
</div>
