<script lang="ts">
	import { works } from '$lib/featuredWork';
	import WorkTile from '$lib/WorkTile.svelte';
</script>

<div class="landingBlock">
	<div class="landingText">
		<h2>Hello! I am Christopher, <br />a software engineer from Utah.</h2>
		<p>
			I have researched certificate based authentication, automated application deployments into the
			AWS cloud, and written API's for User lifecycle management.
		</p>
		<p>Now, I write code that protects users the moment they connect to the internet.</p>
		<a href="mailto:christopher.mcclain@icloud.com">christopher.mcclain@icloud.com</a>
		<h3>Featured Work</h3>
	</div>
	<div class="featuredBlock">
		{#each works as featuredWork}
			<WorkTile {featuredWork} />
		{/each}
	</div>
</div>

<style>
	.landingBlock {
		margin-top: 30px;
		margin: 30px auto;
		max-width: 1500px;
		box-sizing: border-box;
		padding: 50px 30px 0 30px;
	}

	.landingText {
		max-width: 600px;
	}

	p {
		margin: 30px 0 30px 0;
	}

	a {
		color: black;
		transition: all 400ms ease-in-out;
	}

	a:hover {
		color: white;
		background-color: #ec994b;
		border-radius: 4px;
	}

	h3 {
		margin-top: 80px;
	}

	.featuredBlock {
		margin-top: 40px;
		display: flex;
		flex-wrap: wrap;
		row-gap: 30px;
		column-gap: 40px;
		justify-content: space-between;
		width: auto;
	}

	@media (max-width: 850px) {
		.landingBlock {
			width: auto;
		}
	}
</style>
