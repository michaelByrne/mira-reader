import React, {Component} from 'react';

import Article from '../presentation/Article';
import TopicHead from '../presentation/TopicHead';

const fakeProps = {
  articles: [
    {
      id: "1",
      topic: "1",
      title: "Is my information safe with Mira?",
      author: "Walter",
      text: "We use the same 256-bit SSL encryption and physical security standards as traditional insurance companies. Your information is stored securely in a separate database using multi-layered hardware and software encryption. We never sell your personal information to any third parties."

    },
    {
      id: "2",
      topic: "1",
      title: "What is Mira and how are you different?",
      author: "Walter",
      text: "Mira helps you protect your family so that you can achieve peace of mind. If you are older, overweight, smoke or have a medical condition, purchasing life insurance can be harder and more expensive. Mira uses advanced technology and data to help you get life insurance at a better price, and through a faster and easier online process."
    },
    {
      id: "3",
      topic: "1",
      title: "Does Mira offer better prices?",
      author: "Walter",
      text: "Although we cannot guarantee better prices, by using advanced technology and data we can help you get life insurance specifically personalized for your needs as a diabetic. Our customers have saved up to 50% on their policies. We also never charge fees and don’t employ commissioned sales agents."
    },
    {
      id: "4",
      topic: "1",
      title: "Why should I get life insurance through Mira?",
      author: "Walter",
      text: "Some websites offer “free quotes”, but what they really do is sell your information to other agents. This never happens at Mira. Our licensed insurance professionals earn salaries rather than commissions, and will not push you products you don’t need. Also, because Mira is uniquely focused on helping higher risk customers, we can help you get life insurance based on your specific conditions and needs."
    }
  ]
}


class Collection extends Component{
  constructor(props){
    super(props);

    this.state = {selected: null};
    this.selectArticle = this.selectArticle.bind(this);
  }
  
  selectArticle(evt){
    if(evt.currentTarget.dataset.id === this.state.selected){
      this.setState({selected: null});
    }
    else
      this.setState({selected:evt.currentTarget.dataset.id});
  }
  
  
  render(){
    return(
      <div className="collection">
        <TopicHead {...this.props.location.state.topic} />
        <div>
          {fakeProps.articles.map(a => <Article key={a.id} handleSelect={this.selectArticle} {...a} selected={a.id === this.state.selected}/>)}
        </div>
      </div>
    )
  }
}


export default Collection;