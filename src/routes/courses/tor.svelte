<script>
  import config from "$lib/data/tor/config.json";
  import FAQ from "$lib/shared/faq.svelte";
  import InfoBox from "$lib/shared/infobox.svelte";
  import Document from "$lib/components/document.svelte";
  import Slides from "$lib/shared/slides.svelte";
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
  <Slides {config} />
</div>
