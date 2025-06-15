import { describe, test, expect, vi, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useMovieStore } from '../src/stores/movieStore'
import api from '../src/api'

vi.mock('../src/api', () => ({
  default: {
    get: vi.fn()
  }
}))

const mockedApi = api as unknown as { get: ReturnType<typeof vi.fn> }

describe('movieStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
    mockedApi.get.mockReset()  
  })

  test('fetchMovies loads popular movies when searchTerm is empty', async () => {
    const store = useMovieStore()

    mockedApi.get.mockResolvedValueOnce({
      data: {
        results: [
          { id: 1, title: 'Inception' },
          { id: 2, title: 'Interstellar' }
        ]
      }
    })

    await store.fetchMovies()

    expect(mockedApi.get).toHaveBeenCalledWith('/movie/popular', { params: {} })
    expect(store.movies.length).toBe(2)
    expect(store.movies[0].title).toBe('Inception')
  })

  test('fetchMovies searches movies when searchTerm is set', async () => {
    const store = useMovieStore()
    store.searchTerm = 'Matrix'

    mockedApi.get.mockResolvedValueOnce({
      data: {
        results: [{ id: 99, title: 'The Matrix' }]
      }
    })

    await store.fetchMovies()

    expect(mockedApi.get).toHaveBeenCalledWith('/search/movie', {
      params: { query: 'Matrix' }
    })
    expect(store.movies[0].title).toBe('The Matrix')
  })
})
