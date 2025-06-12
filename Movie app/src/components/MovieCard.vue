<template>
  <router-link
    :to="`/movie/${movie.id}`"
    class="movie-wrapper"
  >
    <img
      v-if="movie.poster_path"
      :src="posterUrl"
      :alt="movie.title"
    />
    <div class="card">
      <h2>{{ movie.title }}</h2>
      <p>📅 {{ movie.release_date }}</p>
      <p>⭐ {{ movie.vote_average }}</p> 
    </div>
  </router-link>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  movie: {
    id: number
    title: string
    release_date: string
    vote_average: number
    poster_path: string
  }
}>()

const posterUrl = computed(() =>
  props.movie.poster_path
    ? `https://image.tmdb.org/t/p/w300/${props.movie.poster_path}`
    : ''
)
</script>

<style scoped>
.movie-wrapper {
  display: block;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  padding: 16px;
  transition: box-shadow 0.3s ease;
  text-decoration: none;
  color: inherit;
}

.movie-wrapper:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.card {
  border: 1px solid #ffffff;
  border-radius: 8px;
  padding: 8px;
  text-align: center;
  background-color: #ffffff;
  color: #131010;
}

img {
  width: 100%;
  border-radius: 4px;
}
</style>
