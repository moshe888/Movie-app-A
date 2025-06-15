<template>
  <div class="row-container">
    <h2 class="row-title">{{ title }}</h2>

    <div class="scroll-wrapper">
      <button
        v-if="showLeftArrow"
        class="scroll-btn left"
        @click="scrollLeft"
      >
        ❮
      </button>

      <div ref="scrollContainer" class="row-scroll">
        <MovieCard
          v-for="movie in movieList"
          :key="movie.id"
          :movie="movie"
        />
      </div>

      <button
        class="scroll-btn right"
        @click="scrollRight"
      >
        ❯
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useMovieStore } from '../stores/movieStore'
import MovieCard from './MovieCard.vue'

const props = defineProps<{
  title: string
  endpoint: '/movie/popular' | '/movie/top_rated' | '/movie/upcoming'
}>()

const store = useMovieStore()
const scrollContainer = ref<HTMLDivElement | null>(null)
const showLeftArrow = ref(false)

onMounted(() => {
  const type = props.endpoint.split('/')[2] as 'popular' | 'top_rated' | 'upcoming'
  store.fetchCategory(type)

  scrollContainer.value?.addEventListener('scroll', updateArrowVisibility)
  updateArrowVisibility()
})

const movieList = computed(() => {
  switch (props.endpoint) {
    case '/movie/popular':
      return store.popularMovies
    case '/movie/top_rated':
      return store.topRatedMovies
    case '/movie/upcoming':
      return store.upcomingMovies
    default:
      return []
  }
})

function scrollLeft() {
  scrollContainer.value?.scrollBy({ left: -400, behavior: 'smooth' })
  setTimeout(updateArrowVisibility, 300)
}

function scrollRight() {
  scrollContainer.value?.scrollBy({ left: 400, behavior: 'smooth' })
  setTimeout(updateArrowVisibility, 300)
}

function updateArrowVisibility() {
  if (scrollContainer.value) {
    showLeftArrow.value = scrollContainer.value.scrollLeft > 10
  }
}
</script>

<style scoped>
.row-container {
  margin-bottom: 2rem;
  position: relative;
}

.row-title {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  padding-left: 1rem;
  color: #fff;
}

.scroll-wrapper {
  position: relative;
}

.row-scroll {
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  padding: 0;
  gap: 0;
}

.row-scroll::-webkit-scrollbar {
  display: none;
}

.row-scroll > * {
  flex: 0 0 auto;
  width: 220px;
}

.scroll-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(20, 20, 20, 0.6);
  border: none;
  color: white;
  font-size: 2rem;
  padding: 0.25rem 0.75rem;
  cursor: pointer;
  z-index: 10;
  transition: background 0.2s ease;
}

.scroll-btn:hover {
  background-color: rgba(20, 20, 20, 0.9);
}

.scroll-btn.left {
  left: 0;
}

.scroll-btn.right {
  right: 0;
}
</style>
