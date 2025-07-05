<script lang="ts">
	import { Terminal, TypingAnimation, AnimatedSpan } from "$lib/components/sv/magic/components/terminal/index";


</script>

<Terminal>
  <TypingAnimation text="&gt; pnpm dlx shadcn@latest init"></TypingAnimation>

  <AnimatedSpan delay={1500} class="text-green-500">
    <span>✔ Preflight checks.</span>
  </AnimatedSpan>

  <AnimatedSpan delay={2000} class="text-green-500">
    <span>✔ Verifying framework. Found Next.js.</span>
  </AnimatedSpan>

  <AnimatedSpan delay={2500} class="text-green-500">
    <span>✔ Validating Tailwind CSS.</span>
  </AnimatedSpan>

  <AnimatedSpan delay={3000} class="text-green-500">
    <span>✔ Validating import alias.</span>
  </AnimatedSpan>

  <AnimatedSpan delay={3500} class="text-green-500">
    <span>✔ Writing components.json.</span>
  </AnimatedSpan>

  <AnimatedSpan delay={4000} class="text-green-500">
    <span>✔ Checking registry.</span>
  </AnimatedSpan>

  <AnimatedSpan delay={4500} class="text-green-500">
    <span>✔ Updating tailwind.config.ts</span>
  </AnimatedSpan>

  <AnimatedSpan delay={5000} class="text-green-500">
    <span>✔ Updating app/globals.css</span>
  </AnimatedSpan>

  <AnimatedSpan delay={5500} class="text-green-500">
    <span>✔ Installing dependencies.</span>
  </AnimatedSpan>

  <AnimatedSpan delay={6000} class="text-blue-500">
    <span>Updated 1 file:</span>
    <span class="pl-2">- lib/utils.ts</span>
  </AnimatedSpan>

  <TypingAnimation
    delay={6500}
    text="Success! Project initialization completed."
    class="text-muted-foreground"
  ></TypingAnimation>

  <TypingAnimation
    delay={7000}
    text="You may now add components."
    class="text-muted-foreground"
  ></TypingAnimation>
</Terminal>