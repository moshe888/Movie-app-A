import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import MovieCard from '../src/components/MovieCard.vue'

const mockMovie = {
  id: 1,
  title: 'Inception',
  release_date: '2010-07-16',
  vote_average: 8.8,
  poster_path: '/image.jpg'
}

describe('MovieCard', () => {
  it('renders movie title and metadata', () => {
    const wrapper = mount(MovieCard, {
      props: {
        movie: mockMovie
      }
    })

    expect(wrapper.text()).toContain('Inception')
    expect(wrapper.text()).toContain('2010')
    expect(wrapper.text()).toContain('8.8')
  })

  it('renders poster image with correct src', () => {
    const wrapper = mount(MovieCard, {
      props: {
        movie: mockMovie
      }
    })

    const img = wrapper.find('img')
    expect(img.exists()).toBe(true)
    expect(img.attributes('src')).toContain(mockMovie.poster_path)
  })
})