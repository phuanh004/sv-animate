<script lang="ts">
	import Lens from "$lib/components/sv/magic/components/lens.svelte";
import { Button } from "$lib/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "$lib/components/ui/card";

</script>

<Card class="relative max-w-md shadow-none">
  <CardHeader>
    <Lens
      zoomFactor={2}
      lensSize={150}
      isStatic={false}
    >
      <img
        src="https://images.unsplash.com/photo-1736606355698-5efdb410fe93?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="image_placeholder"
        width={500}
        height={500}
      />
    </Lens>
  </CardHeader>
  <CardContent>
    <CardTitle class="text-2xl">Your next camp</CardTitle>
    <CardDescription>
      See our latest and best camp destinations all across the five
      continents of the globe.
    </CardDescription>
  </CardContent>
  <CardFooter class="space-x-4">
    <Button>Let&apos;s go</Button>
    <Button variant="secondary">Another time</Button>
  </CardFooter>
</Card>