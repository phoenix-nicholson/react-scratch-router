import { fetchGhibli } from '../services/api';
import { useEffect, useState } from 'react';
import FilmList from '../components/Films/filmList';

export default function Home() {
  const [films, setFilms] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchGhibli();
      setFilms(data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <FilmList films={films} />
    </div>
  );
}
