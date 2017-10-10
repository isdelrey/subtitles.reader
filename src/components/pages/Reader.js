import '../../assets/css/Main.css';
import '../../assets/css/flexboxgrid.min.css';
import React, { Component } from 'react';
import Subtitles from '../items/Subtitles';
const { parse, stringify, resync, toMS, toSrtTime } = require('subtitle');

class App extends React.Component {
  constructor() {
    super();
    this.state = {parsed: ''};
  }
  render() {
    return (
      <Subtitles contents={this.state.parsed} />
    );
  }
}

export default App;
