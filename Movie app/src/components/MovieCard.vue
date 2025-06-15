<template>
  <router-link
    :to="`/movie/${movie.id}`"
    class="movie-card"
  >
    <img
      v-if="movie.poster_path"
      :src="posterUrl"
      :alt="movie.title"
    />
    <div class="movie-info">
      <h3
        class="movie-title"
        :title="movie.title"
      >
        {{ movie.title }}
      </h3>
      <div class="movie-meta">
        <span>📅 {{ shortDate }}</span>
        <span>⭐ {{ movie.vote_average }}</span>
      </div>
    </div>
  </router-link>
</template>

<script setup lang="ts">
import { computed } from 'vue'

import type { Movie } from '../types/Movie'

const props = defineProps<{
  movie: Movie
}>()


const posterUrl = computed(() =>
  props.movie.poster_path
    ? `https://image.tmdb.org/t/p/w342/${props.movie.poster_path}`
    : ''
)

const shortDate = computed(() => props.movie.release_date?.split('-')[0] || '')
</script>

<style scoped>
.movie-card {
  width: 200px;
  border-radius: 0;
  overflow: hidden;
  background-color: #141414;
  text-decoration: none;
  color: inherit;
  transition: transform 0.2s ease;
  display: flex;
  flex-direction: column;
}

.movie-card:hover {
  transform: scale(1.02);
}

img {
  width: 100%;
  height: 280px;
  object-fit: cover;
  display: block;
  border: none;
}

.movie-info {
  width: 100%;
  padding: 0.5rem;
  background-color: #1e1e1e;
  color: #eee;
  font-size: 0.85rem;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  box-sizing: border-box;
}

.movie-title {
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
  cursor: default;
}

.movie-meta {
  display: flex;
  justify-content: space-between;
  font-size: 0.75rem;
  color: #bbb;
}
</style>
