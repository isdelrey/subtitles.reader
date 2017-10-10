import '../assets/css/App.css';
import React, { Component } from 'react';
import Header from './items/Header';
import Main from './Main';

class App extends React.Component {
  constructor() {
    super();
    this.state = {filename: ''};
  }
  openedFile(filename) {
    this.setState({filename: filename});
  }
  render() {
    return (
      <div>
        <Header filename={this.state.filename} />
        <Main openedFile={this.openedFile.bind(this)} />
      </div>
    );
  }
}

export default App;
