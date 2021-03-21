<script>
    export let faq;
</script>

<details class="collapse">
    <summary class="head">Frequently Asked Questions</summary>
    <p>
        {#each faq as q}
            <div>
                <h4>{q.q}</h4>
                <div>{q.a}</div>
            </div>
        {/each}
    </p>
</details>

<style type="text/scss">
    .collapse {
        width: calc(75% - 30px);
        margin: 10px;
        padding: 10px;
        background: #fff;
        .head {
            outline: none;
            font-size: 1.17em;
            font-weight: 700;
            cursor: pointer;
        }
    }
</style>
