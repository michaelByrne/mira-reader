import React, {Component} from 'react';
import './App.css';

import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';

import Topics from './components/container/Topics';
import Collection from './components/container/Collection';

// Topics -> [Topic] -> Collection
//                      /        \
//                 TopicHead   [Article]


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route render={({location}) => (
            <Switch location={location}>
              <Route path="/topic/:id" component={Collection} />
              <Route path="/" component={Topics} />
            </Switch>
        )}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
