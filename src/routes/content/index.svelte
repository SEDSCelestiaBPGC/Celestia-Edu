<script>
    import Nav from "$lib/components/nav.svelte";
    import rss from "$lib/data/resources.json";
    import IFrame from "$lib/components/iframe.svelte";

    let ifr = 0,
        temp;
    const resourcer = (obj) => {
        ifr = obj;
        temp = obj;
    };
</script>

<Nav />
{#if ifr}
    <div>
        <div class="controls">
            <svg
                viewBox="0 0 32 32"
                on:click={() => (ifr = undefined)}
                style="background: #f88"
            >
                <path d="M2 30 L30 2 M30 30 L2 2" />
            </svg>
            <!-- <svg
                viewBox="0 0 32 32"
                style="background: #aa4"
            >
                <path
                    d="M29 16 C29 22 24 29 16 29 8 29 3 22 3 16 3 10 8 3 16 3 21 3 25 6 27 9 M20 10 L27 9 28 2"
                />
            </svg> -->
        </div>
        <IFrame obj={ifr} />
    </div>
{/if}
<section>
    {#each rss as r}
        <div cl>
            <h2>{r.type}</h2>
            <div style="display:flex;">
                {#each r.data as sim}
                    <article
                        on:click={() => resourcer(sim)}
                        data-type={sim.type}
                        id={sim.id}
                    >
                        {sim.name}
                    </article>
                {/each}
            </div>
        </div>
    {/each}
</section>

<style type="text/scss">
    section {
        padding: 2%;
    }
    article {
        cursor: pointer;
    }
    svg {
        fill: none;
        stroke: #fff;
        stroke-width: 2;
        padding: 5px;
        border-radius: 20px;
        height: 20px;
        width: 20px;
        margin: 3px;
    }
    .controls {
        display: flex;
        cursor: pointer;
        padding: 5px;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 4px;
        left: 4px;
        z-index: 1;
    }
</style>
