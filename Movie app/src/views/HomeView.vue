<template>
  <div>
    <h1>🎬 Movies</h1>
    <SearchBar v-model="movieStore.searchTerm" />
    <div v-if="movieStore.movies.length === 0">לא נמצאו סרטים</div>
    <div class="movie-grid">
      <MovieCard
        v-for="movie in movieStore.movies"
        :key="movie.id"
        :movie="movie"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { watchEffect } from 'vue'
import { useMovieStore } from '../stores/movieStore'
import SearchBar from '../components/SearchBar.vue'
import MovieCard from '../components/MovieCard.vue'

const movieStore = useMovieStore()

watchEffect(() => {
  movieStore.fetchMovies()
})
</script>

<style scoped>
.movie-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}
</style>
