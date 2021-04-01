<script>
    export let type, name, url;
</script>

<article>
    <h3>{name}</h3>
    <a href={url}> <img src="/assets/{type.toLowerCase()}.png" alt="" /> </a>
</article>

<style type="text/scss">
    article {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: calc(25% - 30px);
        img {
            width: 75px;
            height: 75px;
            object-fit: contain;
        }
    }
</style>
