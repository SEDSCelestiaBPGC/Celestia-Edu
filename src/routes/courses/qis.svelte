<script>
    import config from "$data/qis/config.json";
    import FAQ from "$shared/faq.svelte";
    import InfoBox from "$shared/infobox.svelte";
    import Document from "$components/document.svelte";
</script>

<style type="text/scss">
    section {
        padding: 10px;
    }
</style>

<section>
    <h2>Quantum Information & Security</h2>
    <div style="display:flex;">
        <FAQ faq={config.faq} />
        <Document type="PDF" name="Handout" url={config.handout} />
    </div>
    <InfoBox info={config.info} />
</section>
<section>
    <h2>Week 1</h2>
    <article>
        We will introuce the course with not much heavy material, just enough to
        give students an estimate of what is coming and what the course would
        prepare them for
    </article>
</section>
