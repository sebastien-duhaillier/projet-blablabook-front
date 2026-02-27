<script>
	import { onMount } from 'svelte';
	import '@splidejs/splide/dist/css/splide.min.css';
	export let books = [];

	let splideEl;

	onMount(() => {
		import('@splidejs/splide').then(({ Splide }) => {
			new Splide(splideEl, {
				type: 'loop',
				perPage: 4,
				autoplay: true,
				interval: 3000,
				speed: 11000,
				pauseOnHover: false,
				pagination: false,
				arrows: false,
			}).mount();
		});
	});
</script>

<div bind:this={splideEl} class="splide">
	<div class="splide__track">
		<ul class="splide__list">
			{#each books as book}
				<li class="splide__slide">
					<a href={`/livre/${book.id}`}>
						<img src={book.cover} alt={book.title} style="width:180px;height:260px;object-fit:cover;border-radius:8px;" />
					</a>
				</li>
			{/each}
		</ul>
	</div>
</div>
