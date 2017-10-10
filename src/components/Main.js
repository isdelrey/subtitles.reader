import '../assets/css/Main.css';
import '../assets/css/flexboxgrid.min.css';
import React, { Component } from 'react';
import Header from './items/Header';
import Landing from './pages/Landing';
import Reader from './pages/Reader';

class App extends React.Component {
  constructor() {
    super();
    this.state = {contents: ''};
  }
  openedFile(fileame, contents) {
    this.props.openedFile(name);
    this.setState({contents: contents});
  }
  render() {
    return (
      <main>
        <Landing openedFile={this.openedFile.bind(this)} />
        <Reader contents={this.state.contents} />
      </main>
    );
  }
}

export default App;
