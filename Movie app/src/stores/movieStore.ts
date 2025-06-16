import { defineStore } from 'pinia'
import api from '../api'

export interface Movie {
  id: number
  title: string
  release_date: string
  poster_path: string
  vote_average: number
  overview: string
  backdrop_path?: string
}

export const useMovieStore = defineStore('movies', {
  state: () => ({
    movies: [] as Movie[],
    categoryMovies: {} as Record<string, Movie[]>,
    selectedMovie: null as Movie | null,
    searchTerm: '',
    isLoading: false,
    error: '',
    favorites: [] as Movie[]


  }),

  getters: {
    hasResults(state): boolean {
      return state.movies.length > 0
    },
    noResults(state): boolean {
      return !state.isLoading && state.movies.length === 0 && !state.error
    }
  },

  actions: {
    async fetchMovies() {
      this.isLoading = true
      this.error = ''
      try {
        const trimmed = this.searchTerm.trim()
        const endpoint = trimmed ? '/search/movie' : '/movie/popular'
        const params = trimmed ? { query: trimmed } : {}

        const res = await api.get(endpoint, { params })
        this.movies = res.data.results || []
      } catch (err: any) {
        console.error('Failed to fetch movies from API:', err)
        this.error = err?.message || 'Something went wrong'
      } finally {
        this.isLoading = false
      }
    },

    async fetchCategory(type: string) {
      try {
        if (this.categoryMovies[type]?.length) return

        const res = await api.get(`/movie/${type}`)
        const results = res.data.results || []
        this.categoryMovies[type] = results
      } catch (err) {
        console.error(`Failed to fetch ${type} movies:`, err)
      }
    },

    async fetchMovieById(id: number) {
      try {
        const { data } = await api.get(`/movie/${id}`)
        this.selectedMovie = data
      } catch (err) {
        console.error('Failed to fetch movie by ID:', err)
      }
    },
    resetSearch() {
      this.searchTerm = ''
      this.movies = []
    },
    toggleFavorite(movie: Movie) {
  const exists = this.favorites.find(m => m.id === movie.id)
  if (exists) {
    this.favorites = this.favorites.filter(m => m.id !== movie.id)
  } else {
    this.favorites.push(movie)
  }
  localStorage.setItem('favorites', JSON.stringify(this.favorites))
},

loadFavorites() {
  const stored = localStorage.getItem('favorites')
  this.favorites = stored ? JSON.parse(stored) : []
}

  }
})
