<template>
  <div class="home-container">
    <h1 class="main-title"> Movie Catalog</h1>

    <SearchBar @select="onMovieSelect" />

    <MovieRow title="🎬 Popular" endpoint="/movie/popular" />
    <MovieRow title="🌟 Top Rated" endpoint="/movie/top_rated" />
    <MovieRow title="⏳ Upcoming" endpoint="/movie/upcoming" />
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import MovieRow from '../components/MovieRow.vue'
import SearchBar from '../components/SearchBar.vue'

const router = useRouter()

function onMovieSelect(movie: { id: number }) {
  router.push(`/movie/${movie.id}`)
}
</script>

<style scoped>
.home-container {
  padding: 2rem;
  background-color: #141414;
  color: #fff;
  min-height: 100vh;
  box-sizing: border-box;
  overflow-y: auto;
  padding-top: 4rem;
}
</style>
