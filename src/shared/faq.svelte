<script>
    export let faq;

    let state = 0;

    import { fly } from "svelte/transition";
</script>

<style type="text/scss">
    .collapse {
        width: calc(75% - 30px);
        .head {
            display: flex;
            padding-top: 10px;
            justify-content: space-between;
            cursor: pointer;
        }
    }
    svg {
        height: 32px;
        width: 32px;
        padding: 10px 10px 0 0;
        fill: none;
    }
</style>

<article class="collapse">
    <div class="head" on:click={() => (state = !state)}>
        <h3>Frequently Asked Questions</h3>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            stroke="#222a"
            stroke-width="2">
            <path
                d={`M30 ${!state ? '12' : '20'} L16 ${!state ? '24 2 12' : '8 2 20'}`} />
        </svg>
    </div>
    {#if state}
        <div transition:fly>
            <hr />
            {#each faq as q}
                <div>
                    <h4>{q.q}</h4>
                    <div>{q.a}</div>
                </div>
            {/each}
        </div>
    {/if}
</article>
