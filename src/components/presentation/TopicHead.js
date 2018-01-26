import React from 'react';

const TopicHead = ({id,name, sub, articles, author}) => {
  return(
    <div className="topic-head">
      <div className="head-hed">{name}</div>
      <div className="head-sub">{sub}</div>
      <div className="topic-num">{articles.length} articles in this collection</div>
      <div className="topic-author">Written by <span className="author-name">{author}</span></div>
    </div>
  )
};


export default TopicHead;