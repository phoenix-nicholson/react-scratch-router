import React from 'react';

export default function FilmDetail(films) {
  return (
    <div>
      {films.map(({ id, title, description, running_time, image }) => (
        <div key={id}>
          <li>{title}</li>
          <li>{description}</li>
          <li>{running_time} minutes</li>
          <img src={image}></img>
        </div>
      ))}
    </div>
  );
}
