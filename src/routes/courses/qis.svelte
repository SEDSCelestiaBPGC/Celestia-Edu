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

<div>
    <section>
        <h2 class="toc-h2">Quantum Information & Security</h2>
        <div style="display:flex;">
            <FAQ faq={config.faq} />
            <Document type="PDF" name="Handout" url={config.handout} />
        </div>
        <InfoBox info={config.info} />
    </section>
    <section>
        <h2 class="toc-h2">General Resources</h2>
        <article>
            <h3>Tools</h3>
            <div>
                Linear Algebra:
                <a
                    target="_blank"
                    href="https://youtube.com/watch?v=PFDu9oVAE-g">By
                    3Blue1Brown</a>
            </div>
            <div>
                Python:
                <a
                    target="_blank"
                    href="https://youtube.com/watch?v=JJmcL1N2KQs">By Brad
                    Traversy</a>
                (A Crash Course)
            </div>
        </article>
        <article>
            <h3>Quantum Computing</h3>
            <div>
                Simulations:
                <a target="_blank" href="https://algassert.com/quirk#circuit">On
                    Quirk</a>
            </div>
            <div>
                QISKIT Playlist:
                <a
                    target="_blank"
                    href="https://youtube.com/playlist?list=PLOFEBzvs-Vvp2xg9-POLJhQwtVktlYGbY">
                    qiskit youtube</a>
                (Includes Installations)
            </div>
        </article>
    </section>
    <section>
        <h2 class="toc-h2">Week 1</h2>
        <article>
            We will introuce the course with not much heavy material, just
            enough to give students an estimate of what is coming and what the
            course would prepare them for
        </article>
        <article>
            <h3>Slides</h3>
            <div>
                <span class="bold">Lecture 2:</span>
                <a target="_blank" href={config.docs.w1.l2}>Here</a>
            </div>
            <div>
                <span class="bold">Lecture 3:</span>
                <a target="_blank" href={config.docs.w1.l3}>Here</a>
            </div>
        </article>
    </section>
</div>
