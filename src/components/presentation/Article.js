import React, {Component} from 'react';


class Article extends Component {
  constructor(props){
    super(props);

    this.state = {expanded: props.selected};
  }


  render(){
    if(this.props.selected === false) {
      return (
        <div className="article" onClick={this.props.handleSelect} data-id={this.props.id}>
          <div className="topic-name">{this.props.title}</div>
          <div className="topic-num">Written by <span className="author-name">{this.props.author}</span></div>
          <div className="topic-author">Updated over a week ago</div>
        </div>
      )
    }
    else{
      return(
        <div className="article" onClick={this.props.handleSelect} data-id={this.props.id}>
          <div className="topic-name">{this.props.title}</div>
          <div className="topic-num">Written by <span className="author-name">{this.props.author}</span></div>
          <div className="topic-author">Updated over a week ago</div>
          <div className="article-text">{this.props.text}</div>
        </div>
      )
    }
  }
}


export default Article;