<script lang="ts">
	import type { FeaturedWork } from '$lib/featuredWork';
	import { fade } from 'svelte/transition';
	export let featuredWork: FeaturedWork;
	let inHover = false;
	let isLarge = false;

	function toggleHover() {
		inHover = !inHover;
	}

	function toggleIsLarge() {
		isLarge = !isLarge;
	}
</script>

<svelte:window
	on:wheel|nonpassive={(e) => {
		if (isLarge) {
			e.preventDefault();
		}
	}}
/>

<button
	class="mainContainer"
	on:mouseenter={toggleHover}
	on:mouseleave={toggleHover}
	on:click={toggleIsLarge}
>
	<img src={featuredWork.backgroundImage} alt={featuredWork.imageAlt} />
	{#if inHover}
		<div class="hiddenDescription" transition:fade>
			<h1>{featuredWork.company}</h1>
			<h3>{featuredWork.title}</h3>
		</div>
	{/if}
</button>

{#if isLarge}
	<div class="popUpContainer" transition:fade={{ duration: 200 }}>
		<div class="popupBox">
			<button class="exitButton" on:click={toggleIsLarge}><i class="fa-solid fa-x fa-2x" /></button>
			<h1>{featuredWork.title}</h1>
			<h2>{featuredWork.company}</h2>
			<p>{featuredWork.description}</p>
		</div>
	</div>
{/if}

<style>
	.mainContainer {
		text-decoration: none;
		border: none;
		text-align: left;
		background-color: #d0d0d0;
		width: 700px;
		max-height: 400px;
		position: relative;
		display: block;
		cursor: pointer;
	}

	.exitButton {
		border: none;
		text-decoration: none;
		background-color: #f1eee9;
		color: black;
		margin-left: auto;
	}

	button:hover {
		cursor: pointer;
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

	.popUpContainer {
		position: fixed;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: rgba(0, 0, 0, 0.5);
		z-index: 999;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.popupBox {
		background-color: #f1eee9;
		width: 800px;
		max-height: 500px;
		padding: 20px;
		display: flex;
		flex-direction: column;
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
