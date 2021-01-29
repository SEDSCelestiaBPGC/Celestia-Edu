<script>
    export let obj;
</script>

<style type="text/scss">
    section {
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        &::-webkit-scrollbar {
            display: none;
        }
        iframe {
            width: 90%;
            height: 90%;
            border-radius: 20px;
        }
    }
</style>

<section>
    <iframe src={'/examples' + obj.at} title={obj.name} frameborder="0" />
</section>
