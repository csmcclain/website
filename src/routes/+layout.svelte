<script lang="ts">
	import '@fortawesome/fontawesome-free/css/all.min.css';
	let showSidebar = false;
	let innerWidth = 500;

	function toggleShowSidebar() {
		showSidebar = !showSidebar;
	}

	function handleResize() {
		if (innerWidth >= 799 && showSidebar) {
			showSidebar = false;
		}
	}

	function handleOrientationChange() {
		showSidebar = false;
	}
</script>

<svelte:head>
	<title>Cats Rule!</title>
	<link
		href="https://fonts.googleapis.com/css2?family=Gentium+Plus:ital,wght@0,400;0,700;1,400;1,700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<svelte:window
	bind:innerWidth
	on:resize={handleResize}
	on:orientationchange={handleOrientationChange}
/>

<nav>
	<ul class="sidebar" style:display={showSidebar ? 'flex' : 'none'}>
		<li>
			<button class="disableHoverColor" on:click={toggleShowSidebar} style:margin-left="auto"
				><i class="fa-solid fa-x fa-2x" /></button
			>
		</li>
		<li>
			<a href="https://www.linkedin.com/in/christopher-mcclain/"
				><i class="fa-brands fa-linkedin fa-2x" style:color="#0077B5" /></a
			>
		</li>
		<li><a href="https://github.com/csmcclain"><i class="fa-brands fa-github fa-2x" /></a></li>
		<li><a href="mailto:christopher.mcclain@icloud.com" style:font-size="24px">hire me</a></li>
	</ul>
	<ul>
		<li><a href="/" class="disableHoverColor">Christopher McClain</a></li>
		<li class="hideOnMobile">
			<a href="https://www.linkedin.com/in/christopher-mcclain/"
				><i class="fa-brands fa-linkedin fa-lg" style:color="#0077B5" /></a
			>
		</li>
		<li class="hideOnMobile">
			<a href="https://github.com/csmcclain"><i class="fa-brands fa-github fa-lg" /></a>
		</li>
		<li>
			<a class="hideOnMobile disableHoverColor" href="mailto:christopher.mcclain@icloud.com"
				><p class="hireMeButton">hire me</p></a
			>
		</li>
		<li class="menu-button">
			<button on:click={toggleShowSidebar}><i class="fa-solid fa-bars fa-2x" /></button>
		</li>
	</ul>
</nav>

<slot innerWidth />

<style>
	:global(*) {
		margin: 0;
		padding: 0;
	}

	:global(body) {
		min-height: 100vh;
		background-color: #f1eee9;
		font-family: 'Gentium Plus';
		font-size: 24px;
		min-width: 300px;
	}

	i {
		margin: 0;
	}

	nav {
		background-color: #f1eee9;
		box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.1);
		width: 100%;
		padding: 0 20%;
		box-sizing: border-box;
		position: sticky;
		top: 0;
	}

	nav ul {
		width: 100%;
		list-style: none;
		display: flex;
		justify-content: flex-end;
		align-items: center;
	}

	nav li {
		height: 60px;
	}

	nav a,
	button {
		height: 100%;
		padding: 0 30px;
		text-decoration: none;
		display: flex;
		align-items: center;
		color: black;
	}

	nav button {
		border: none;
		background: none;
	}

	nav a:hover {
		background-color: #d0d0d0;
	}

	nav li:first-child {
		margin-right: auto;
	}

	.disableHoverColor {
		background-color: transparent !important;
	}

	.sidebar {
		position: fixed;
		top: 0;
		right: 0;
		height: 100vh;
		width: 300px;
		z-index: 999;
		background-color: rgba(241, 238, 233, 0.9);
		backdrop-filter: blur(10px);
		box-shadow: -10px 0px -10px rgba(0, 0, 0, 0.2);
		flex-direction: column;
		align-items: flex-start;
		justify-content: flex-start;
	}

	.sidebar li {
		width: 100%;
		margin-bottom: 10px;
	}

	.sidebar a {
		justify-content: center;
	}

	.hireMeButton {
		border: 2px solid #ec994b;
		padding: 0px 15px;
		color: #ec994b;
		box-shadow: 5px 5px #ec994b;
		transition: all 125ms ease-in-out;
	}

	.hireMeButton:hover {
		box-shadow: 0 0 0 0 #ec994b;
	}

	.menu-button {
		display: none;
	}

	@media (max-width: 800px) {
		nav {
			padding: 0 10%;
		}

		.hideOnMobile {
			display: none;
		}

		.menu-button {
			display: block;
		}
	}

	@media (max-width: 400px) {
		:global(body) {
			font-size: 18px;
		}

		.sidebar {
			width: 100%;
		}

		nav {
			padding: 0 5%;
		}
	}
</style>
