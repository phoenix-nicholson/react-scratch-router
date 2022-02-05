import { screen, render } from '@testing-library/react';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import Home from './Home';
import { mockMovieList } from '../../__mocks__/TestData';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

const server = setupServer(
  rest.get(`https://ghibliapi.herokuapp.com/films`, (req, res, ctx) => {
    return res(ctx.json(mockMovieList));
  })
);

beforeAll(() => server.listen());
afterAll(() => server.listen());

test('Should render Home page', async () => {
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );

  const heading = screen.getByRole('heading');
  expect(heading).toBeInTheDocument();

  const filmList = await screen.findAllByRole('link');
  expect(filmList).toHaveLength(22);

  const link = await screen.findByRole('link', { name: /castle in the sky/i });
  screen.debug(link);
  userEvent.click(link);
  expect(link).toBeInTheDocument();
});
