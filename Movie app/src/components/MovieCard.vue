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
      <span class="title">{{ movie.title }}</span>
      <span class="meta">📅 {{ shortDate }}</span>
      <span class="meta">⭐ {{ movie.vote_average }}</span>
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
    ? `https://image.tmdb.org/t/p/w342/${props.movie.poster_path}`
    : ''
)

const shortDate = computed(() => props.movie.release_date?.split('-')[0] || '')
</script>

<style scoped>
.movie-card {
  width: 180px;
  border-radius: 8px;
  overflow: hidden;
  background-color: #141414;
  text-decoration: none;
  color: inherit;
  transition: transform 0.2s ease;
  display: flex;
  flex-direction: column;
}


.movie-card:hover {
  transform: scale(1.05);
}

img {
  width: 100%;
  height: 240px;
  object-fit: contain; /* במקום cover */
  background-color: #000; /* שומר מראה נקי מסביב לתמונה */
  display: block;
  border-bottom: 1px solid #222;
}



.movie-info {
  padding: 0.4rem 0.6rem;
  background-color: #1e1e1e;
  color: #eee;
  font-size: 0.8rem;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.title {
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.meta {
  color: #aaa;
  font-size: 0.75rem;
}
</style>
