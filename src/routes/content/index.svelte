<script>
    import Nav from "$components/nav.svelte";
    import rss from "$data/resources.json";
    import IFrame from "$components/iframe.svelte";

    let ifr = 0;
    const resourcer = (obj) => {
        ifr = obj;
    };
</script>

<style type="text/scss">
    section {
        padding: 2%;
    }
    article {
        cursor: pointer;
    }
    .close {
        background: #000;
        display: flex;
        cursor: pointer;
        align-items: center;
        padding: 5px;
        justify-content: center;
        height: 25px;
        width: 25px;
        border-radius: 20px;
        position: absolute;
        top: 5px;
        right: 5px;
        z-index: 1;
    }
</style>

<Nav />
{#if ifr}
    <div>
        <div class="close" on:click={() => (ifr = undefined)}>
            <svg
                viewBox="0 0 32 32"
                width="20"
                height="20"
                fill="none"
                stroke="#fff"
                stroke-width="2">
                <path d="M2 30 L30 2 M30 30 L2 2" />
            </svg>
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
                        id={sim.id}>
                        {sim.name}
                    </article>
                {/each}
            </div>
        </div>
    {/each}
</section>
