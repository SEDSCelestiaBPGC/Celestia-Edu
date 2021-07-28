<script>
  import { base } from "$app/paths";
  import crs from "$lib/data/courses.json";
  import HomeSlider from "$lib/mono/HomeSider.svelte";
</script>

<section>
  <HomeSlider />

  {#each crs as cr}
    <a href="{base}/courses/{cr.page}" style="color: unset;">
      <div class="course">
        <img src={cr.image} alt="" />
        <div>
          <div style="font-weight:600">{cr.long}</div>
          <div>{cr.short} ({cr.time})</div>
          <p>{cr.about}</p>
        </div>
      </div>
    </a>
  {/each}
</section>

<style type="text/scss">
  section:not(:first-of-type) {
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    overflow: scroll;
  }
  .course {
    display: flex;
    margin: 10px;
    width: calc(50% - 20px);
    height: 200px;
    background: #fff;
    border: 1px solid #aaa;
    div,
    p {
      padding: 5px;
    }
    img {
      width: 200px;
      height: 200px;
      object-fit: cover;
    }
    cursor: pointer;
    transition: transform 0.2s ease;
    &:hover {
      transform: scale(1.03);
    }
  }
  @media (max-width: 768px) {
    .course {
      width: calc(100% - 20px);
    }
  }
</style>
