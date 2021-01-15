<script>
    import config from "$data/qis/config.json";
    import FAQ from "$shared/faq.svelte";
</script>

<style type="text/scss">
    section {
        padding: 10px;
    }
</style>

<section>
    <h2>Quantum Information & Security</h2>
    <FAQ faq={config.faq} />
</section>
