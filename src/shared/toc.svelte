<script>
    const indexer = (doc) => {
        const h2 = [...doc.getElementsByClassName("toc-h2")];
        const index = h2.map((el, i) => {
            el.id = "index-" + i;
            return { id: "index-" + i, txt: el.innerText };
        });
        return index;
    };

    console.log(2);
    let list = indexer(doc) || [];
</script>

<style type="text/scss">
    ul {
        background: #fff;
        padding: 20px;
        margin: 20px;
        width: calc(50% - 80px);
        list-style: none;
        li {
            color: #aaf;
            padding: 5px;
        }
    }
</style>

<ul>
    <div style="font-weight:600;">Table of Contents</div>
    {#each list as li}
        <a href="#{li.id}">
            <li>{li.txt}</li>
        </a>
    {/each}
</ul>
