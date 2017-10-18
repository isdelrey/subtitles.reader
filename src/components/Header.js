import '../assets/css/Header.css';
import '../assets/css/flexboxgrid.min.css';
import React, { Component } from 'react';

class App extends React.Component {
  render() {
    return (
      <header className="row">
        <div className="col-lg-6 col-md-6 col-sm-6 menu">
          {this.props.filename ? <div className="hbutton"><div className="text"><b>Filename</b> &nbsp;{this.props.filename.split('.')[0]}</div><div className="button">✕</div></div> : null}
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 apptitle">
          <b>subtitles.</b>reader
        </div>
      </header>
    );
  }
}

export default App;
