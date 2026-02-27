<script>
	import { Swiper, SwiperSlide } from 'swiper/svelte';
	import 'swiper/css';
	import 'swiper/css/autoplay';
	import SwiperCore, { Autoplay } from 'swiper';

	SwiperCore.use([Autoplay]);

	export let books = [];
</script>

<Swiper
	autoplay={{ delay: 100, disableOnInteraction: false }}
	loop={true}
	slidesPerView={4}
	spaceBetween={20}
	speed={11000}
	class="mySwiper"
>
	{#each books as book}
		<SwiperSlide>
			<a href={`/livre/${book.id}`} class="slide">
				<img src={book.cover} alt={book.title} />
			</a>
		</SwiperSlide>
	{/each}
</Swiper>

<style>
	.mySwiper {
		width: 100vw;
		padding: 1rem;
	}
	.slide img {
		width: 180px;
		height: 260px;
		object-fit: cover;
		border-radius: 8px;
	}
</style>
