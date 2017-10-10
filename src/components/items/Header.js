import '../../assets/css/Header.css';
import '../../assets/css/flexboxgrid.min.css';
import React, { Component } from 'react';

class App extends React.Component {
  render() {
    return (
      <header class="row">
        <div class="col-lg-6 col-md-6 col-sm-6 filename">
          {this.props.filename}
        </div>
        <div class="col-lg-6 col-md-6 col-sm-6 apptitle">
          Subtitles Reader
        </div>
      </header>
    );
  }
}

export default App;
