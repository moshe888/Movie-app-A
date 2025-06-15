<template>
  <div class="home-container">
    <h1 class="main-title">🎬 Movie Catalog</h1>
    
    <SearchBar v-model="searchTerm" />
    <MovieRow title="🎬 Popular" endpoint="/movie/popular" />
    <MovieRow title="🌟 Top Rated" endpoint="/movie/top_rated" />
    <MovieRow title="⏳ Upcoming" endpoint="/movie/upcoming" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import MovieRow from '../components/MovieRow.vue'
import SearchBar from '../components/SearchBar.vue'

const searchTerm = ref('')
</script>

<style scoped>
.home-container {
  padding: 2rem;
  background-color: #141414;
  color: #fff;
  min-height: 100vh;
  box-sizing: border-box;
  overflow-y: auto;
  padding: 2rem;
  padding-top: 4rem;
}
</style>
 