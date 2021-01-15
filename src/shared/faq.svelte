<script>
    export let faq;

    let state = 1;

    import { fly } from "svelte/transition";
</script>

<style type="text/scss">
    .collapse {
        padding: 10px;
        background: #fff;
        .head {
            display: flex;
            justify-content: space-between;
            cursor: pointer;
        }
    }
</style>

<article class="collapse">
    <div class="head" on:click={() => (state = !state)}>
        <h3>Frequently Asked Questions</h3>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            width="32"
            height="32"
            fill="none"
            stroke="#222a"
            stroke-width="2">
            <path
                d={`M30 ${state ? '12' : '20'} L16 ${state ? '24 2 12' : '8 2 20'}`} />
        </svg>
    </div>
    <hr />
    {#if state}
        <article transition:fly>
            {#each faq as q}
                <div>
                    <h4>{q.q}</h4>
                    <p>{q.a}</p>
                </div>
            {/each}
        </article>
    {/if}
</article>
