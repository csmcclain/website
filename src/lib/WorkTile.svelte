<script lang="ts">
	import type { FeaturedWork } from '$lib/featuredWork';
	import { fade } from 'svelte/transition';
	export let featuredWork: FeaturedWork;
	let inHover = false;

	function toggleHover() {
		inHover = !inHover;
	}
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="mainContainer" on:mouseenter={toggleHover} on:mouseleave={toggleHover}>
	<img src={featuredWork.backgroundImage} alt={featuredWork.imageAlt} />
	{#if inHover}
		<div class="hiddenDescription" transition:fade>
			<h4>{featuredWork.company}</h4>
			<p>{featuredWork.title}</p>
		</div>
	{/if}
</div>

<style>
	.mainContainer {
		background-color: #d0d0d0;
		width: 700px;
		max-height: 400px;
		position: relative;
		display: block;
	}

	img {
		object-fit: contain;
		max-width: 500px;
		min-height: 400px;
		margin: auto;
		display: block;
	}

	.hiddenDescription {
		position: absolute;
		top: 0px;
		left: 0px;
		z-index: 100;
		box-sizing: border-box;
		opacity: 0.8;
		background-color: #ec994b;
		width: 100%;
		height: 100%;
		padding: 5px 15px;
	}

	@media (max-width: 600px) {
		img {
			max-width: 250px;
			min-height: 200px;
		}
	}

	@media (max-width: 400px) {
		img {
			max-width: 200px;
			min-height: 150px;
		}
	}
</style>
