<script>
    import { Nav, Footer } from "$lib/components";
</script>

<Nav />

<slot />

<div class="clearfix">&nbsp;<br /></div>
<Footer />

<style>
    .clearfix {
        display: block;
        margin: 20px;
        padding: 20px;
    }
</style>
