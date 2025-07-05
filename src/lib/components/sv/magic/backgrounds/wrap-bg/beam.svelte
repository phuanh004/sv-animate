<script lang="ts">
	import { Motion } from 'motion-start';

	type BeamProps = {
		width: string;
		x: string;
		delay: number;
		duration: number;
	};

	let { width = '100%', x = '0', delay = 0, duration = 0 }: BeamProps = $props();

	let hue = Math.floor(Math.random() * 360);
	let ar = Math.floor(Math.random() * 10) + 1;


</script>

<div
	style="--x: {x}; --width:{width}; --aspect-ratio: {ar}; --background: linear-gradient(hsl({hue} 80% 60%), transparent);"
>
	<Motion.div
		initial={{ y: '100cqmax', x: '-50%' }}
		animate={{ y: '-100%', x: '-50%' }}
		transition={{
			duration,
			delay,
			repeat: Infinity,
			ease: 'linear'
		}}
	>
		<div class="absolute top-0 left-[var(--x)] [aspect-ratio:1/var(--aspect-ratio)] [width:var(--width)] [background:var(--background)]"></div>
	</Motion.div>
</div>
