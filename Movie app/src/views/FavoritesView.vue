<template>
  <div class="favorites-container">
    <header class="top-bar">
      <h1>💖 Favorites</h1>
      <router-link to="/" class="home-btn">🏠 Home</router-link>
    </header>




    <div v-if="favorites.length" class="favorites-grid">
      <MovieCard
        v-for="movie in favorites"
        :key="movie.id"
        :movie="movie"
      />
    </div>

    <p v-else class="empty">You haven’t added any favorites yet.</p>
  </div>
</template>

<script setup lang="ts">
import { useMovieStore } from '../stores/movieStore'
import MovieCard from '../components/MovieCard.vue'
 import { computed } from 'vue'


const store = useMovieStore()

const favorites = computed(() => store.favorites)
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

.top-bar h1 {
  font-size: 1.8rem;
  margin: 0;
}

.home-btn {
  background-color: #ff5b99;
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  transition: background 0.2s ease;
}

.home-btn:hover {
  background-color: #e14a87;
}

.favorites-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}

.empty {
  text-align: center;
  margin-top: 2rem;
  font-size: 1.2rem;
  color: #bbb;
}
</style>
