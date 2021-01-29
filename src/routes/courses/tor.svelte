<script>
    import config from "$data/tor/config.json";
    import FAQ from "$shared/faq.svelte";
    import InfoBox from "$shared/infobox.svelte";
    import Document from "$components/document.svelte";
</script>

<style type="text/scss">
    section {
        padding: 10px;
    }
</style>

<div>
    <section>
        <h2 class="toc-h2">Theory of Relativity</h2>
        <div style="display:flex;">
            <FAQ faq={config.faq} />
            <Document type="PDF" name="Handout" url={config.handout} />
        </div>
        <InfoBox info={config.info} />
    </section>
    <section>
        <h2 class="toc-h2">Week 1</h2>
        <article>
            We will introuce the course with not much heavy material, just
            enough to give students an estimate of what is coming and what the
            course would prepare them for
        </article>
        <article>
            <h3>Notes</h3>
            <div>
                <span class="bold">Lecture 3:</span>
                <a target="_blank" href={config.docs.w1.l3}>Here</a>
            </div>
        </article>
    </section>
    <section>
        <h2 class="toc-h2">Week 2</h2>
        <article>
            We will introuce the course with not much heavy material, just
            enough to give students an estimate of what is coming and what the
            course would prepare them for
        </article>
        <article>
            <h3>Notes</h3>
            <div>
                <span class="bold">Lecture 3:</span>
                <a target="_blank" href={config.docs.w2.l3}>Here</a>
            </div>
        </article>
    </section>
</div>
