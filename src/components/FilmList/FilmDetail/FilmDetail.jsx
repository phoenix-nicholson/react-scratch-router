import React from 'react';

export default function FilmDetail({ films }) {
  return (
    <div>
      <div>
        <li>{films.title}</li>
        <li>{films.description}</li>
        <li>{films.running_time} minutes</li>
        <img src={films.image}></img>
      </div>
    </div>
  );
}
