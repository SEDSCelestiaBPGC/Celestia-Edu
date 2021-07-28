<script>
    import { onMount } from "svelte";

    let space = [];

    const timeSince = (dt) => ~~((+Date.now() - +new Date(dt)) / 36e5);

    onMount(() => {
        fetch("https://www.spaceflightnewsapi.net/api/v2/articles")
            .then((r1) => r1.json())
            .then((r) => (space = r));
    });
</script>

<section>
    {#each space as el}
        <a href={el.url} style="color: unset;">
            <div class="course">
                <img src={el.imageUrl} alt={el.title} />
                <div>
                    <div style="font-weight:600">{el.title}</div>
                    <div style="color:#444">
                        {el.newsSite} ({timeSince(el.publishedAt) +
                            " hours ago"})
                    </div>
                    <p>{el.summary}</p>
                </div>
            </div>
        </a>
    {/each}
</section>

<style type="text/scss">
    section {
        display: flex;
        flex-wrap: wrap;
    }
    a {
        margin: 10px;
        width: calc(50% - 20px);
    }
    .course {
        display: flex;
        width: 100%;
        height: auto;
        background: #fff;
        border: 1px solid #aaa;
        div,
        p {
            padding: 5px;
        }
        img {
            width: 200px;
            height: 200px;
            object-fit: cover;
        }
        cursor: pointer;
        transition: transform 0.2s ease;
        &:hover {
            transform: scale(1.03);
        }
    }
    @media (max-width: 768px) {
        a {
            margin: 10px;
            width: calc(100% - 20px);
        }
    }
</style>
