import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import MovieCard from '../src/components/MovieCard.vue'

const mockMovie = {
  id: 1,
  title: 'Inception',
  release_date: '2010-07-16',
  poster_path: '/poster.jpg',
  vote_average: 8.8,
  overview: 'A mind-bending thriller.'
}

describe('MovieCard', () => {
  it('renders movie title and metadata', () => {
    const wrapper = mount(MovieCard, {
      props: {
        movie: mockMovie
      },
      global: {
        plugins: [createTestingPinia()]
      }
    })

    expect(wrapper.text()).toContain('Inception')
    expect(wrapper.text()).toContain('2010')
    expect(wrapper.text()).toContain('8.8')
  })

  it('renders poster image', () => {
    const wrapper = mount(MovieCard, {
      props: {
        movie: mockMovie
      },
      global: {
        plugins: [createTestingPinia()]
      }
    })

    const img = wrapper.find('img')
    expect(img.exists()).toBe(true)
    expect(img.attributes('src')).toContain(mockMovie.poster_path)
  })
})
