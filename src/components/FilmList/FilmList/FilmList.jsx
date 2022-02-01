import React from 'react';
import './FilmList.css';
import { Link } from 'react-router-dom';

export default function FilmList({ films }) {
  return (
    <div className="container">
      {films.map(({ id, title, image }) => (
        <div className="imgCard" key={id}>
          <h4 className="title">{title}</h4>
          <Link to={`${id}`}>
            <img className="listImg" src={image}></img>
          </Link>
        </div>
      ))}
    </div>
  );
}
