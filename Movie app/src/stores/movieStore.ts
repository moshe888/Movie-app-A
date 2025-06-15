import { defineStore } from 'pinia'
import api from '../api'

export const useMovieStore = defineStore('movies', {
  state: () => ({
    movies: [] as any[],
    searchTerm: ''
  }),
  actions: {
    async fetchMovies() {
      try {
        const endpoint = this.searchTerm.trim()
          ? '/search/movie'
          : '/movie/popular'

        const params = this.searchTerm.trim()
          ? { query: this.searchTerm }
          : {}

        const res = await api.get(endpoint, { params })
        this.movies = res.data.results
      } catch (err) {
          console.error('Failed to fetch movies from API:', err)
      }
    }
  }
})
