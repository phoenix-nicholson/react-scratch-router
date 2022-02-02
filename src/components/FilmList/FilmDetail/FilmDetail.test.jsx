import { render, screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import FilmDetail from './FilmDetail';

const ponyo = [
  {
    id: '758bf02e-3122-46e0-884e-67cf83df1786',
    title: 'Ponyo',
    original_title: '崖の上のポニョ',
    original_title_romanised: 'Gake no ue no Ponyo',
    image: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/mikKSEdk5kLhflWXbp4S5mmHsDo.jpg',
    movie_banner: 'https://image.tmdb.org/t/p/original/6a1qZ1qat26mAIK3Lq8iYdGpyHm.jpg',
    description:
      "The son of a sailor, 5-year old Sosuke lives a quiet life on an oceanside cliff with his mother Lisa. One fateful day, he finds a beautiful goldfish trapped in a bottle on the beach and upon rescuing her, names her Ponyo. But she is no ordinary goldfish. The daughter of a masterful wizard and a sea goddess, Ponyo uses her father's magic to transform herself into a young girl and quickly falls in love with Sosuke, but the use of such powerful sorcery causes a dangerous imbalance in the world. As the moon steadily draws nearer to the earth and Ponyo's father sends the ocean's mighty waves to find his daughter, the two children embark on an adventure of a lifetime to save the world and fulfill Ponyo's dreams of becoming human.",
    director: 'Hayao Miyazaki',
    producer: 'Toshio Suzuki',
    release_date: '2008',
    running_time: '100',
    rt_score: '92',
    people: ['https://ghibliapi.herokuapp.com/people/'],
    species: ['https://ghibliapi.herokuapp.com/species/af3910a6-429f-4c74-9ad5-dfe1c4aa04f2'],
    locations: ['https://ghibliapi.herokuapp.com/locations/'],
    vehicles: ['https://ghibliapi.herokuapp.com/vehicles/'],
    url: 'https://ghibliapi.herokuapp.com/films/758bf02e-3122-46e0-884e-67cf83df1786',
  },
];

const server = setupServer(
  rest.get(`https://ghibliapi.herokuapp.com/films/`, (req, res, ctx) => {
    return res(ctx.json([ponyo]));
  })
);
beforeAll(() => server.listen());
afterAll(() => server.listen());

test.skip('should be able to go back to home page', async () => {
  render(<FilmDetail />);

  const backBtn = screen.getByRole('button');
  expect(backBtn).toBeInTheDocument();
});
