import React from 'react';
import './filmList.css';

export default function FilmList({ films }) {
  return (
    <div className="container">
      {films.map((item) => (
        <div className="imgCard" key={item.id}>
          <li>{item.title}</li>
          <img src={item.image}></img>
        </div>
      ))}
    </div>
  );
}
