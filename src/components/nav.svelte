<script>
</script>

<style type="text/scss">
    nav {
        background: #fff;
        width: calc(100% - 20px);
        padding: 10px;
        display: flex;
        justify-content: space-between;
        .part {
            display: flex;
        }
        a {
            width: 75px;
            text-align: center;
            margin: 10px;
            background: #fff;
            padding: 10px;
            outline: 2px solid #fff;
            text-decoration: underline;
            border: 2px solid #aaa;
            transition: all 0.3s ease;
            &:hover {
                background: #eee;
                text-decoration: none;
            }
        }
    }
</style>

<nav>
    <div class="part"><a href="/">Home</a> <a href="/qiskit">QISKit</a></div>
</nav>
