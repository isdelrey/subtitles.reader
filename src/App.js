import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'mobx-react';
import Header from './components/Header';
import Landing from './pages/Landing';
import Reader from './pages/Reader';
import Store from './Store.js';
import './assets/css/App.css';

class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <Provider store={new Store()}>
        <HashRouter settings={this.settings}>
          <Switch>
            <Route exact path="/" component={Landing}/>
            <Route path="/reader" component={Reader}/>
          </Switch>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
