<template>
  <div class="movie-card">
    <button class="fav-btn" @click.stop="toggle">
      {{ isFav ? '💔' : '💖' }}
    </button>

    <router-link :to="`/movie/${movie.id}`">
      <img
        v-if="movie.poster_path"
        :src="posterUrl"
        :alt="movie.title"
      />
      <div class="info">
        <h3>{{ movie.title }}</h3>
        <div class="meta">
          <span>📅 {{ shortDate }}</span>
          <span>⭐ {{ movie.vote_average }}</span>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useMovieStore } from '../stores/movieStore'
import type { Movie } from '../types/Movie'

const props = defineProps<{ movie: Movie }>()
const store = useMovieStore()

const posterUrl = computed(() =>
  props.movie.poster_path ? `https://image.tmdb.org/t/p/w342/${props.movie.poster_path}` : ''
)

const shortDate = computed(() =>
  props.movie.release_date?.split('-')[0] || ''
)

const isFav = computed(() =>
  store.favorites.some(f => f.id === props.movie.id)
)

function toggle() {
  store.toggleFavorite(props.movie)
}
</script>

<style scoped>
.movie-card {
  position: relative;
  width: 200px;
  margin: 0 8px 1rem 0;
  border-radius: 8px;
  overflow: hidden;
  background: #141414;
  text-decoration: none !important;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
}
.movie-card a {
  text-decoration: none !important;
  outline: none !important;
  box-shadow: none !important;
  border: none;
}


.movie-card:hover {
  transform: scale(1.02);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.35);
}

.movie-card img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-bottom: 1px solid #222;
}

.info {
  padding: 0.75rem;
  background: #1e1e1e;
  text-align: center;
}

.info h3 {
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  margin: 0;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.meta {
  margin-top: 0.4rem;
  font-size: 0.8rem;
  color: #bbb;
  display: flex;
  justify-content: space-between;
}

.fav-btn {
  position: absolute;
  top: 8px;
  right: 8px;
  background: rgba(0, 0, 0, 0.6);
  border: none;
  color: #ff5b99;
  font-size: 1.4rem;
  border-radius: 50%;
  padding: 4px 6px;
  cursor: pointer;
  z-index: 2;
  transition: transform 0.2s ease;
}

.fav-btn:hover {
  transform: scale(1.2);
  background: rgba(0, 0, 0, 0.8);
}

</style>
