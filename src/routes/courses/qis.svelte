<script>
    import config from "$data/qis/config.json";
    import FAQ from "$shared/faq.svelte";
    import InfoBox from "$shared/infobox.svelte";
    import Document from "$components/document.svelte";
</script>

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
            <span class="h3">Tools</span>
            <div>
                Linear Algebra:
                <a
                    target="_blank"
                    href="https://youtube.com/watch?v=PFDu9oVAE-g"
                    >By 3Blue1Brown</a
                >
            </div>
            <div>
                Python:
                <a
                    target="_blank"
                    href="https://youtube.com/watch?v=JJmcL1N2KQs"
                    >By Brad Traversy</a
                >
                (A Crash Course)
            </div>
        </article>
        <article>
            <span class="h3">Quantum Computing</span>
            <div>
                Simulations:
                <a target="_blank" href="https://algassert.com/quirk#circuit"
                    >On Quirk</a
                >
            </div>
            <div>
                QISKIT Playlist:
                <a
                    target="_blank"
                    href="https://youtube.com/playlist?list=PLOFEBzvs-Vvp2xg9-POLJhQwtVktlYGbY"
                >
                    qiskit youtube</a
                >
                (Includes Installations)
            </div>
        </article>
    </section>
    {#each config.docs as doc, i}
        <section>
            <h2 class="toc-h2">Week {i + 1}</h2>
            <article>
                {doc.desc}
            </article>
            <article>
                <span class="h3">Slides</span>
                {#each doc.slides as sld, i}
                    {#if sld[i]}
                        <div>
                            <span class="bold">Lecture {i + 1}:</span>
                            <a target="_blank" href={sld}>Here</a>
                        </div>
                    {/if}
                {/each}
            </article>
        </section>
    {/each}
</div>

<style type="text/scss">
    section {
        padding: 10px;
        .h3 {
            font-size: 1.25em;
            line-height: 1.66em;
            font-weight: 600;
        }
    }
</style>
