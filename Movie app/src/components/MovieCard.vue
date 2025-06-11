

<template>
  <router-link :to="`/movie/${movie.id}`" class="block bg-white rounded shadow-md p-4 hover:shadow-lg transition">
    <img v-if="movie.poster_path" :src="posterUrl" :alt="movie.title" class="w-full rounded" />
    <h2 class="text-lg font-bold mt-2">{{ movie.title }}</h2>
    <p class="text-gray-500 text-sm">📅 {{ movie.release_date }}</p>
    <p class="text-yellow-500 text-sm">⭐ {{ movie.vote_average }}</p>
  </router-link>
</template>



<script setup lang="ts">
defineProps<{
  movie: {
    title: string
    release_date: string
    vote_average: number
    poster_path: string
  }
}>()

const posterUrl = `https://image.tmdb.org/t/p/w300/${__props.movie.poster_path}`
</script>

<style scoped>
.card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 8px;
  text-align: center;
  background-color: #fff;
}

img {
  width: 100%;
  border-radius: 4px;
}
</style>
