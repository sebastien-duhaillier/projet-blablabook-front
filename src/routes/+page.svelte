<script>
	import CarouselSwiper from '$lib/components/CarouselSwiper.svelte';
	let { data } = $props();
</script>

<div class="home-content">
	<h1>Notre sélection</h1>
	<CarouselSwiper books={data.book} />

	<a href="/catalogue"><button class="catalog">Voir le catalogue</button></a>

	<div class="about">
		<p>
			BlaBlaBook est une plateforme pensée pour tous les passionnés de lecture qui souhaitent
			organiser, partager et redécouvrir leurs bibliothèques personnelles. Née de l’envie d’un
			groupe de lecteurs de mieux gérer leurs collections, BlaBlaBook permet de suivre ses livres,
			éviter les doublons, retrouver ses lectures passées et même échanger des romans entre amis.
		</p>
	</div>
</div>

<style>
	.home-content {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
		padding: 1rem;
	}

	.catalog {
		margin-top: 2rem;
	}

	.about {
		margin-top: 2rem;
		max-width: 600px;
		text-align: center;
	}
</style>
