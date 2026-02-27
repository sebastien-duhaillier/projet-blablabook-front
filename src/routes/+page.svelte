<script>
	let { data } = $props();
	console.log('Livres chargés pour le carousel:', data.book);
</script>

<div class="home-content">
	<h1>Notre sélection</h1>

	{#if data.book && data.book.length > 0}
		<div class="carousel-container">
			<div class="carousel-track">
				{#each data.book.concat(data.book) as book}
					<a href={`/livre/${book.id}`} class="slide">
						<img src={book.cover} alt={book.title} />
					</a>
				{/each}
			</div>
		</div>
	{:else}
		<p style="color: red; text-align: center;">Aucun livre à afficher dans le carousel.</p>
	{/if}

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

	.carousel-container {
		width: 100vw;
		overflow: hidden;
		background-color: var(--couleur-bleu-vert);
		padding: 1rem;
	}

	.carousel-track {
		display: flex;
		width: 100%;
		gap: 1rem;
		animation: scroll 60s linear infinite;
	}

	.slide img {
		width: 380px;
		height: 380px;
		object-fit: cover;
		border-radius: 8px;
		box-shadow: 0 2px 8px rgba(0,0,0,0.12);
	}

	@keyframes scroll {
		from {
			transform: translateX(0);
		}
		to {
			transform: translateX(-50%);
		}
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
