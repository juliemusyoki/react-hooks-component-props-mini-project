// src/components/ArticleList.js
import React from 'react';
import Article from './Article';

function ArticleList(props) {
  return (
    <main>
      {props.posts.map((post, index) => (
        <Article
        key={index}
        title={post.title}
        date={post.date || "January 1, 1970"}
        preview={post.preview}
        minutes={post.minutes || 5} // Assuming a default of 5 minutes if 'minutes' is not specified
      />
      
      ))}
    </main>
  );
}

export default ArticleList;
