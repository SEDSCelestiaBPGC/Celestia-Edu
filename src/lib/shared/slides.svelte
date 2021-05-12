<script>
  export let config;
</script>

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

<main>
  {#each config.docs as doc, i}
    <section>
      <h2 class="toc-h2">Week {i + 1}</h2>
      <article>{doc.desc}</article>
      <article>
        <span class="h3">Slides</span>
        {#if doc.slides.length > 1}
          {#each doc.slides as sld, i}
            {#if sld[i]}
              <div>
                <span class="bold">Set {i + 1}:</span>
                <a target="_blank" href={sld}>Here</a>
              </div>
            {/if}
          {/each}
        {:else}
          <div>
            <span class="bold">Combined:</span>
            <a target="_blank" href={doc.slides[0]}>Here</a>
          </div>
        {/if}
      </article>
    </section>
  {/each}
</main>
