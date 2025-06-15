import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'
import MovieCard from '../src/components/MovieCard.vue'

const mockMovie = {
  id: 1,
  title: 'Inception',
  release_date: '2010-07-16',
  vote_average: 8.8,
  poster_path: '/image.jpg'
}

const router = createRouter({
  history: createWebHistory(),
  routes: [] // no actual routes needed for the test
})

describe('MovieCard', () => {
  it('renders movie title and metadata', async () => {
    router.push('/')
    await router.isReady()

    const wrapper = mount(MovieCard, {
      global: {
        plugins: [router]
      },
      props: {
        movie: mockMovie
      }
    })

    expect(wrapper.text()).toContain('Inception')
    expect(wrapper.text()).toContain('2010')
    expect(wrapper.text()).toContain('8.8')
  })
})
