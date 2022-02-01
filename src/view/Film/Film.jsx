import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FilmDetail from '../../components/FilmList/FilmDetail/FilmDetail';
import { fetchFilmId } from '../../services/api';

export default function Film() {
  const [film, setFilm] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchFilmId(id);
      setFilm(data);
      setLoading(false);
    };
    fetchData();
  }, [id]);

  if (loading) return <h1>Loading...</h1>;

  return (
    <div>
      <FilmDetail film={film} />
    </div>
  );
}
