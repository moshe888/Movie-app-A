<template>
  <div class="favorites-container">
    <header class="top-bar">
      <h1 class="main-title">🎬 Movie Catalog</h1>
      <nav class="nav-actions">
        <router-link to="/favorites" class="nav-btn">💖 Favorites</router-link>
      </nav>
    </header>

    <SearchBar @select="onMovieSelect" />

    <MovieRow title="🎬 Popular" endpoint="/movie/popular" />
    <MovieRow title="🌟 Top Rated" endpoint="/movie/top_rated" />
    <MovieRow title="⏳ Upcoming" endpoint="/movie/upcoming" />
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useMovieStore } from '../stores/movieStore'
import MovieRow from '../components/MovieRow.vue'
import SearchBar from '../components/SearchBar.vue'

const router = useRouter()
const store = useMovieStore()

function onMovieSelect(movie: { id: number }) {
  store.resetSearch()
  router.push(`/movie/${movie.id}`)
}
</script>

<style scoped>
.favorites-container {
  background: #141414;
  color: #fff;
  min-height: 100vh;
  padding: 2rem 1rem;
  box-sizing: border-box;
}

.top-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 2rem;
  border-bottom: 1px solid #2a2a2a;
  padding-bottom: 1rem;
}

.main-title {
  font-size: 2rem;
  font-weight: 700;
  margin: 0;
  color: #fff;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.6);
}

.nav-actions {
  display: flex;
  gap: 1rem;
}

.nav-btn {
  background-color: #ff5b99;
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  transition: background 0.2s ease;
}

.nav-btn:hover {
  background-color: #e14a87;
}
</style>
