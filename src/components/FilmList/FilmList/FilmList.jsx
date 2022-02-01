import React from 'react';
import './FilmList.css';
import { Link } from 'react-router-dom';

export default function FilmList({ films }) {
  return (
    <div className="container">
      {films.map(({ id, title, image }) => (
        <div className="imgCard" key={id}>
          <li>{title}</li>
          <Link to={`${id}`}>
            <img src={image}></img>
          </Link>
        </div>
      ))}
    </div>
  );
}
