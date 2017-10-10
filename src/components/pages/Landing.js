import '../../assets/css/Main.css';
import '../../assets/css/flexboxgrid.min.css';
import React, { Component } from 'react';
import Header from '../items/Header';
import FileSelectionArea from '../items/FileSelectionArea';

class App extends React.Component {
  openedFile(name, content) {
    this.props.openedFile(name);
  }
  render() {
    return (
      <FileSelectionArea openedFile={this.openedFile.bind(this)} />
    );
  }
}

export default App;
