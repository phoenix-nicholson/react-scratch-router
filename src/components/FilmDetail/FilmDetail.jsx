import React from 'react';

export default function FilmDetail({ films }) {
  return (
    <div>
      {films.map((item) => (
        <div key={item.id}>
          <li>{item.title}</li>
          <li>{item.description}</li>
          <li>{item.running_time} minutes</li>
          <img src={item.image}></img>
        </div>
      ))}
    </div>
  );
}
