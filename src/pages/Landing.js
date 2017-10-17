import '../assets/css/flexboxgrid.min.css';
import React from 'react';
import { inject } from 'mobx-react';
import Header from '../components/Header';
import FileSelectionArea from '../components/FileSelectionArea';

class App extends React.Component {
  openedFile(file) {
    this.props.store.push('files', file);
    console.log("%j", this.props.store.contents);
    this.props.history.push("reader");
  }
  render() {
    return (
      <div>
        <Header />
        <main>
          <FileSelectionArea openedFile={this.openedFile.bind(this)} />
        </main>
      </div>
    );
  }
}

export default inject('store')(App);
