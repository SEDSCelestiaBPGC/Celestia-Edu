<script>
    import { IFrame } from "$lib/components";
    import rss from "$lib/data/resources.json";

    let ifr = 0;
    const resourcer = (obj) => (ifr = obj);
    const hideFrame = () => (ifr = 0);
</script>

{#if ifr}
    <div>
        <div class="controls">
            <svg viewBox="0 0 32 32" on:click={hideFrame}>
                <path d="M2 30 L30 2 M30 30 L2 2" stroke="#000" />
            </svg>
        </div>
        <IFrame obj={ifr} />
    </div>
{/if}
<section>
    {#each rss as r}
        <div>
            <h2>{r.type}</h2>
            <div style="display:flex;">
                {#each r.data as sim}
                    <article on:click={() => resourcer(sim)} id={sim.id}>
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
        background: #fff;
        border: 2px solid #888;
        stroke: #000;
        stroke-width: 2;
        padding: 5px;
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
