import React from 'react';
import './filmList.css';

export default function FilmList({ films }) {
  return (
    <div className="container">
      <ul>
        {films.map((item) => (
          <div className="imgCard" key={item.id}>
            <li>
              {item.title}
              <img src={item.image}></img>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}
