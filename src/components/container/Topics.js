import React, {Component} from 'react';
import {withRouter} from 'react-router';

import Topic from '../presentation/Topic';


const fakeProps = {
  topics: [
    {
      id: "1",
      name: "FAQ",
      sub: "Most common questions our customers have",
      icon: undefined,
      articles: ["1","2","3","4"],
      author: "Walter"
    },
    {
      id: "2",
      name: "Life Insurance 101",
      sub: "Learn how life insurance works, the different types of polices you can get, and whether or not it is right for you",
      icon: undefined,
      articles: ["5","6","7","8","9"],
      author: "Walter"
    }
  ]
};


class Topics extends Component{
  constructor(props){
    super(props);

    this.state = {topics: fakeProps.topics};
    this.handleSelected = this.handleSelected.bind(this);
  }

  handleSelected(evt){
    this.props.history.push({pathname: '/topic/1', state: {topic: fakeProps.topics.filter(t => t.id === evt.currentTarget.dataset.id)[0]}});
  }
  
  render(){
    return(
      <div className="topic-wrapper">{this.state.topics.map(t => <Topic click={this.handleSelected} key={t.id} {...t} />)}</div>
    )
  }
}

export default withRouter(Topics);