import React from 'react';
import { useHistory } from 'react-router-dom';
import './FilmDetail.css';

export default function FilmDetail({ films }) {
  const history = useHistory();

  const handleClick = () => {
    history.push('/');
  };
  return (
    <div>
      <div>
        <h1>{films.title}</h1>
        <button className="btn" onClick={handleClick}>
          back to list
        </button>
        <h4> {films.description} </h4>
        <h5>Run time: {films.running_time} minutes</h5>
        <img className="img" src={films.image}></img>
      </div>
    </div>
  );
}
