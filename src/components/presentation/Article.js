import React from 'react';


const Article = ({selected,handleSelect,id,title,author,text}) => {
  if(selected === false) {
    return (
      <div className="article" onClick={handleSelect} data-id={id}>
        <div className="topic-name">{title}</div>
        <div className="topic-num">Written by <span className="author-name">{author}</span></div>
        <div className="topic-author">Updated over a week ago</div>
      </div>
    )
  }
  else{
    return(
      <div className="article" onClick={handleSelect} data-id={id}>
        <div className="topic-name">{title}</div>
        <div className="topic-num">Written by <span className="author-name">{author}</span></div>
        <div className="topic-author">Updated over a week ago</div>
        <div className="article-text">{text}</div>
      </div>
    )
  }
}

export default Article;