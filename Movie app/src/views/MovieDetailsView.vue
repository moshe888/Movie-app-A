<template>
  <div v-if="movie">
    <h1>{{ movie.title }}</h1>
    <img :src="posterUrl" :alt="movie.title" />
        <p><strong>Release Date:</strong> {{ movie.release_date }}</p>
        <p><strong>Rating:</strong> {{ movie.vote_average }}</p>

    <p>{{ movie.overview }}</p>
    <router-link to="/">🔙 Back</router-link>
  </div>
  <div v-else>Loading...</div>
</template>

<script setup lang="ts">
import { onMounted, ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import api from '../api'

interface Movie {
  id: number
  title: string
  release_date: string
  poster_path: string
  vote_average: number
  overview: string
}

const route = useRoute()
const movie = ref<Movie | null>(null)

const fetchMovie = async () => {
  try {
    const { data } = await api.get(`/movie/${route.params.id}`)
    console.log('Movie data:', data)
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
    ? `https://image.tmdb.org/t/p/w300/${movie.value.poster_path}`
    : ''
)
</script>

<style scoped>
img {
  width: 300px;
  border-radius: 8px;
  margin-bottom: 1rem;
}
</style>
