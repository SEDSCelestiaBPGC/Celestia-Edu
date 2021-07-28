<script>
    import "@glidejs/glide/dist/css/glide.core.min.css";
    import "@glidejs/glide/dist/css/glide.theme.min.css";
    import Glide from "@glidejs/glide";
    import { ExtFrame } from "$lib/components";
    import { onMount } from "svelte";

    const youtube_list = [
        "C2UhD6GZGBo",
        "8pmJyrQEvu4",
        "V1aJctvROJc",
        "8pmJyrQEvu4",
    ];
    const youtube_options = {
        allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
        class: "glide__slide",
        frameborder: "0",
    };
    const youtube_config =
        "?controls=1&modestbranding=1&showinfo=0&iv_load_policy=3&html5=1&rel=0&hl=en&cc_lang_pref=en";

    onMount(() => {
        const width = window.innerWidth;
        new Glide(".glide", {
            type: "slider",
            gap: 75,
            animationDuration: 400,
            autoplay: 4e3,
            hoverpause: true,
            startAt: 1,
            perView: 1,
            breakpoints: {
                768: {
                    perView: 1,
                    gap: 5,
                    peek: false,
                },
            },
            peek: {
                before: width / 10,
                after: width / 10,
            },
        }).mount();
    });
</script>

<div class="glide">
    <div class="glide__arrows" data-glide-el="controls">
        <button class="glide__arrow glide__arrow--left" data-glide-dir="<">
            &larr;
        </button>
        <button class="glide__arrow glide__arrow--right" data-glide-dir=">">
            &rarr;
        </button>
    </div>
    <div data-glide-el="track" class="glide__track">
        <ul class="glide__slides">
            {#each youtube_list as yt_url}
                <ExtFrame
                    src={"https://www.youtube-nocookie.com/embed/" +
                        yt_url +
                        youtube_config}
                    options={youtube_options}
                />
            {/each}
        </ul>
    </div>
    <div class="glide__bullets" data-glide-el="controls[nav]">
        {#each youtube_list as yt_url, i}
            <button class="glide__bullet" data-glide-dir="={i}" />
        {/each}
    </div>
</div>

<style>
    :global(.glide__slide) {
        min-height: 300px;
        padding: 5px;
        height: calc(50vw * 3 / 5);
        border-radius: 1em;
        overflow: hidden;
    }
</style>
