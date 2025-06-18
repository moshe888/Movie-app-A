<template>
  <!-- טוען -->
  <div v-if="store.isLoading" class="loading">Loading...</div>

  <!-- פרטי הסרט -->
  <div v-else-if="movie" class="details-container">
    <div class="backdrop" :style="backdropStyle">
      <div class="overlay">
        <div class="content">
          <img :src="posterUrl" :alt="movie.title" class="poster" />
          <div class="info">
            <h1 class="movie-title">{{ movie.title }}</h1>
            <p class="meta">
              <span>📅 {{ movie.release_date }}</span>
              <span>⭐ {{ movie.vote_average }}</span>
            </p>
            <p class="overview">{{ movie.overview }}</p>
            <router-link to="/" class="back-link">🎬 Back to Home</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- לא נמצא -->
  <div v-else-if="shouldShowNotFound" class="loading">❌ Movie not found.</div>
</template>


<script setup lang="ts">
import { onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useMovieStore } from '../stores/movieStore'

const store = useMovieStore()
const route = useRoute()

onMounted(() => {
  const id = Number(route.params.id)
  if (!isNaN(id)) {
    store.selectedMovie = null   
    store.fetchMovieById(id)
  }
})

const movie = computed(() => store.selectedMovie) 

const posterUrl = computed(() =>
  movie.value?.poster_path
    ? `https://image.tmdb.org/t/p/w500/${movie.value.poster_path}`
    : '/placeholder-poster.png'
)

const backdropStyle = computed(() =>
  movie.value?.backdrop_path
    ? `background-image: url('https://image.tmdb.org/t/p/original/${movie.value.backdrop_path}');`
    : 'background-color: #000;'
)

const  shouldShowNotFound = computed(() => {
  return !store.isLoading && !movie.value
})

</script>

<style scoped>
.details-container {
  min-height: 100vh;
  color: #fff;
  font-family: 'Segoe UI', sans-serif;
}

.backdrop {
  background-size: cover;
  background-position: center;
  position: relative;
  min-height: 100vh;
  box-shadow: inset 0 0 120px 30px rgba(0, 0, 0, 0.9);
}

.overlay {
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(20, 20, 20, 0.95));
  min-height: 100vh;
  padding: 4rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.content {
  display: flex;
  gap: 2rem;
  max-width: 1000px;
  align-items: flex-start;
  flex-wrap: wrap;
}

.poster {
  width: 320px;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.7);
}

.info {
  flex: 1;
  max-width: 600px;
}

.movie-title {
  margin: 0 0 1rem;
  font-size: 2.75rem;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
  color: #ffcc00;
}

.meta {
  font-size: 1.1rem;
  color: #ccc;
  margin-bottom: 1.5rem;
  display: flex;
  gap: 2rem;
}

.overview {
  font-size: 1.15rem;
  line-height: 1.6;
  margin-bottom: 2.5rem;
  color: #eee;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
}

.back-link {
  display: inline-block;
  background-color: #ff5b99;
  color: #fff;
  padding: 0.6rem 1.2rem;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: bold;
  text-decoration: none;
  transition: background-color 0.2s ease;
}

.back-link:hover {
  background-color: #e14a87;
}

.loading {
  text-align: center;
  padding: 5rem;
  font-size: 1.5rem;
  background-color: #111;
  color: #858585;
}
</style>
