<template>
  <div class="search-wrapper">
    <input
      v-model="query"
      @input="onInput"
      @focus="cancelHide"
      @blur="hideWithDelay"
      placeholder="🎬 Search for a movie..."
      class="search-input"
    />
    <ul v-if="showSuggestions && suggestions.length" class="suggestion-list">
      <li
        v-for="movie in suggestions"
        :key="movie.id"
        @mousedown.prevent="selectMovie(movie)"
      >
        <img
          v-if="movie.poster_path"
          :src="`https://image.tmdb.org/t/p/w92${movie.poster_path}`"
          :alt="movie.title"
        />
        <div class="suggestion-info">
          <span class="suggestion-title">{{ movie.title }}</span>
          <span class="suggestion-meta">📅 {{ movie.release_date?.split('-')[0] || 'N/A' }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import api from '../api'

const emit = defineEmits(['select'])
const query = ref('')
const suggestions = ref<any[]>([])
const showSuggestions = ref(false)
let timeout: ReturnType<typeof setTimeout> | null = null

async function onInput() {
  if (query.value.length < 2) {
    suggestions.value = []
    return
  }

  const res = await api.get('/search/movie', {
    params: { query: query.value }
  })
  suggestions.value = res.data.results.slice(0, 5)
}

function selectMovie(movie: any) {
  query.value = movie.title
  showSuggestions.value = false
  emit('select', movie)
}

function hideWithDelay() {
  if (timeout) clearTimeout(timeout)
  timeout = setTimeout(() => {
    showSuggestions.value = false
  }, 200)
}

function cancelHide() {
  if (timeout) clearTimeout(timeout)
  showSuggestions.value = true
}
</script>

<style scoped>
.search-wrapper {
  position: relative;
  max-width: 600px;
  margin: 2rem auto;
}

.search-input {
  width: 100%;
  padding: 1rem 1.5rem;
  font-size: 1.1rem;
  border-radius: 12px;
  border: none;
  background: #1c1c1c;
  color: #fff;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
  font-family: 'Segoe UI', sans-serif;
}

.search-input::placeholder {
  color: #aaa;
}

.suggestion-list {
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  right: 0;
  background: #1f1f1f;
  border: 1px solid #333;
  z-index: 10;
  list-style: none;
  margin: 0;
  padding: 0;
  border-radius: 8px;
  max-height: 260px;
  overflow-y: auto;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.6);
}

.suggestion-list li {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  cursor: pointer;
  transition: background 0.2s ease;
  border-bottom: 1px solid #2a2a2a;
}

.suggestion-list li:hover {
  background-color: #2e2e2e;
}

.suggestion-list img {
  width: 48px;
  height: auto;
  border-radius: 4px;
  flex-shrink: 0;
}

.suggestion-info {
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.suggestion-title {
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.suggestion-meta {
  font-size: 0.8rem;
  color: #aaa;
  margin-top: 2px;
}
</style>
