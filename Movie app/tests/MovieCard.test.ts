import { render } from '@testing-library/vue'
import MovieCard from '../src/components/MovieCard.vue'

const mockMovie = {
  id: 1,
  title: 'Inception',
  release_date: '2010-07-16',
  vote_average: 8.8,
  poster_path: '/inception.jpg'
}

test('renders movie title and rating', () => {
  const { getByText } = render(MovieCard, {
    props: { movie: mockMovie }
  })

  getByText('Inception')
  getByText('⭐ 8.8')
})
