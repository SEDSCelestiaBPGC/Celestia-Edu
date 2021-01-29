<script>
	import Nav from "$components/nav.svelte";
	import crs from "$data/courses.json";
	import Footer from "$components/footer.svelte";
</script>

<style type="text/scss">
	section {
		padding: 10px;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
	}
	.course {
		display: flex;
		margin: 10px;
		width: 550px;
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
</style>

<Nav />
<section>
	{#each crs as cr}
		<a href="/courses/{cr.page}" style="color: unset;">
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

<Footer />
