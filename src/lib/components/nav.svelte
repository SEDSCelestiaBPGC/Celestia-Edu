<script>
  import { base } from "$app/paths";
</script>

<nav>
  <div class="part">
    <a href="{base}/">Home</a>
    <a href="{base}/news">News</a>
    <a href="{base}/content">Resources</a>
    <a target="_blank" href="http://sedscelestia.org">Celestia</a>
  </div>
</nav>

<style type="text/scss">
  nav {
    background: #fff;
    width: calc(100% - 20px);
    padding: 10px;
    display: flex;
    justify-content: space-between;
    .part {
      display: flex;
    }
    a {
      color: unset;
      width: 75px;
      text-align: center;
      margin: 10px;
      background: #fff;
      padding: 10px;
      outline: 2px solid #fff;
      border: 2px solid #aaa;
      transition: all 0.3s ease;
      &:hover {
        background: #eee;
      }
    }
  }
</style>
