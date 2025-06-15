<template>
  <div class="details-container" v-if="movie">
    <div class="backdrop" :style="backdropStyle">
      <div class="overlay">
        <div class="content">
          <img :src="posterUrl" :alt="movie.title" class="poster" />
          <div class="info">
            <h1>{{ movie.title }}</h1>
            <p class="meta">
              <span>📅 {{ movie.release_date }}</span>
              <span>⭐ {{ movie.vote_average }}</span>
            </p>
            <p class="overview">{{ movie.overview }}</p>
            <router-link to="/" class="back-link">← Back to Home</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="loading">Loading...</div>
</template>

<script setup lang="ts">
import { onMounted, ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import type { Movie } from '../types/Movie'

import api from '../api'

 

const route = useRoute()
const movie = ref<Movie | null>(null)

const fetchMovie = async () => {
  try {
    const { data } = await api.get(`/movie/${route.params.id}`)
    movie.value = data
  } catch (error) {
    console.error('Failed to fetch movie:', error)
  }
}

onMounted(() => {
  fetchMovie()
})

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
}

.overlay {
  background: rgba(0, 0, 0, 0.8);
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
  width: 300px;
  border-radius: 10px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.6);
}

.info {
  flex: 1;
  max-width: 600px;
}

h1 {
  margin: 0 0 1rem;
  font-size: 2.5rem;
}

.meta {
  font-size: 1rem;
  color: #ccc;
  margin-bottom: 1.5rem;
  display: flex;
  gap: 1.5rem;
}

.overview {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  color: #eee;
}

.back-link {
  text-decoration: none;
  color: #61dafb;
  font-weight: 500;
  font-size: 1rem;
}

.back-link:hover {
  text-decoration: underline;
}

.loading {
  text-align: center;
  padding: 5rem;
  font-size: 1.5rem;
  background-color: #111;
  color: #858585;
}
</style>
