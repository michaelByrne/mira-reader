import React from 'react';

const Topic = ({click,id, name, sub, icon, articles, author}) => {
  return(
    <div className="topic" onClick={click} data-id={id}>
      <div className="topic-name">{name}</div>
      <div className="topic-sub">{sub}</div>
      <div className="topic-num">{articles.length} articles in this collection</div>
      <div className="topic-author">Written by <span className="author-name">{author}</span></div>
    </div>
  )
}

export default Topic;