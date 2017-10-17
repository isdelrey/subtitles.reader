import '../assets/css/FileSelectionArea.css';

import React, { Component } from 'react';
import Header from './Header';
import Dropzone from 'react-dropzone';

let utf8_encode = (s) => {
  return decodeURIComponent(escape(s));
}

 class App extends React.Component {
   openFile(files) {
     if(typeof files != undefined) {
       let file = files[0];
       const reader = new FileReader();
       reader.onload = () => {
            const fileAsBinaryString = reader.result;
            this.props.openedFile({
              filename: file.name,
              contents: utf8_encode(fileAsBinaryString)
            });
        };
        reader.onabort = () => alert("File opening aborted.");
        reader.onerror = () => alert("File could not be read.");

        reader.readAsBinaryString(file);
    }
   }
   render() {
     return (
       <Dropzone disabledStyle={ {} } rejectStyle={ {} } onDrop={this.openFile.bind(this)} className="takesmainsize">
         <div className="takesmainsize row center-lg center-md center-sm middle-lg middle-md middle-sm">
           <div className="message">
             To read a subtitle file <b>drop it here</b> or <b>click</b> to select it.
           </div>
         </div>
       </Dropzone>
     );
   }
 }

 export default App;
