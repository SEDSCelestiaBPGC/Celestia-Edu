<script>
    import { onMount } from "svelte";

    export let //
        options = {
            frameborder: "0",
        },
        src,
        frame;

    onMount(() => {
        for (const [key, value] of Object.entries(options))
            frame.setAttribute(key, value);
    });
</script>

<iframe bind:this={frame} {src} title="External Frame" />
