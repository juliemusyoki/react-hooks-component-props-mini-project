// src/components/Article.js
import React from 'react';

function Article(props) {
  const { title, date, preview, minutes } = props;

  const coffeeCups = '☕️'.repeat(Math.ceil(minutes / 5));
  const bentoBoxes = '🍱'.repeat(Math.ceil(minutes / 10));

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
      {minutes <= 30 ? <span>{coffeeCups} {minutes} min read</span> : <span>{bentoBoxes} {minutes} min read</span>}
    </article>
  );
}

export default Article;
