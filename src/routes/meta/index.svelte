<script>
  import { onMount } from "svelte";
  import metadata from "$lib/data/meta.json";
  const date_config = {
    weekday: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    month: "short",
    day: "numeric",
  };

  const date = new Date(metadata.time)
    .toLocaleString("en-GB", date_config)
    .split(", ");

  let location;
  onMount(() => (location = window.location.href));
</script>

<section>
  <article>Last Updated {date[1]} ({metadata.build.version})</article>
  <article>
    Checkpoint: {date[2]} &nbsp; Build Number: {metadata.build.current}
  </article>
  <article>
    {#if location?.includes("https")}
      <svg viewBox="0 0 32 32" width="24" height="24" stroke="#0f0">
        <circle cx="16" cy="16" r="14" />
        <g transform="scale(0.5) translate(15,15)">
          <path stroke-width="4" d="M2 20 L12 28 30 4" />
        </g>
      </svg>
      <div style="position:relative;top:3px;left:3px;">
        Running Securely &nbsp; <code>on HTTPS</code>
      </div>
    {:else}
      <svg viewBox="0 0 32 32" width="24" height="24" stroke="#f00">
        <circle cx="16" cy="16" r="14" />
        <g transform="scale(0.5) translate(15,15)">
          <path stroke-width="4" d="M2 30 L30 2 M30 30 L2 2" />
        </g>
      </svg>
      <div style="position:relative;top:3px;left:3px;">
        Running Unsecurely &nbsp; <code>Not HTTPS!</code>
      </div>
    {/if}
  </article>
  <article>
    Created by {metadata.author} of {metadata.owner}
  </article>
</section>

<style>
  section {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
  }
  article {
    width: 20%;
    display: flex;
    margin: 10px 30%;
  }
  svg {
    fill: none;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 2;
  }
</style>
