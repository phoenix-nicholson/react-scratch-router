import { fetchGhibli } from '../../services/api';
import { useEffect, useState } from 'react';
import FilmList from '../../components/FilmList/FilmList/FilmList';

export default function Home() {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchGhibli();
      setFilms(data);
      setLoading(false);
    };
    fetchData();
  }, []);
  if (loading) return <h1>Loading...</h1>;
  return (
    <div>
      <h1 className="title">Studio Ghibli Films</h1>

      <FilmList films={films} />
    </div>
  );
}
