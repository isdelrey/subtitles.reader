import '../assets/css/flexboxgrid.min.css';
import React from 'react';
import { inject } from 'mobx-react';
import Header from '../components/Header';
import Subtitles from '../components/Subtitles';

class App extends React.Component {
  componentWillMount() {
    if(typeof this.props.store.contents.files == "undefined")
      this.props.history.push("/");
    else
      this.file = this.props.store.contents.files[0];
  }
  render() {
    return (
      <div>
        <Header filename={this.file.filename} />
        <main>
          <Subtitles contents={this.file.contents} />
        </main>
      </div>
    );
  }
}

export default inject('store')(App);
