import React from 'react';
import './FilmList.css';
import { Link } from 'react-router-dom';

export default function FilmList({ films }) {
  return (
    <div className="container">
      <ul className="container">
        {films.map(({ id, title, image }) => (
          <div className="imgCard" key={id}>
            <Link to={`${id}`}>
              <h4 className="film-title">{title}</h4>

              <img className="listImg" src={image}></img>
            </Link>
          </div>
        ))}
      </ul>
    </div>
  );
}
