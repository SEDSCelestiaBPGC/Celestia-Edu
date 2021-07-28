<script>
  import config from "$lib/data/tor/config.json";
  import { FAQ, InfoBox, Slides } from "$lib/shared";
  import { Document } from "$lib/components";
</script>

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

<style type="text/scss">
  section {
    padding: 10px;
  }
</style>
