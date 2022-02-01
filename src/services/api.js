export async function fetchGhibli() {
  const response = await fetch(`https://ghibliapi.herokuapp.com/films`);
  const data = await response.json();

  console.log('data', data);
  return data;
}

export async function fetchFilmId(id) {
  const response = await fetch(`https://ghibliapi.herokuapp.com/films/${id}`);
  const data = await response.json();

  console.log('data', data);
  return data;
}
