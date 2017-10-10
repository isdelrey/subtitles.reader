 import '../../assets/css/FileSelectionArea.css';
 import '../../assets/css/flexboxgrid.min.css';
 import React, { Component } from 'react';
 import Header from './Header';
 import Dropzone from 'react-dropzone';

 class App extends React.Component {
   openFile(files) {
     if(typeof files != undefined) {
       let file = files[0];
       const reader = new FileReader();
       reader.onload = () => {
            const fileAsBinaryString = reader.result;
            this.props.openedFile(file.name, fileAsBinaryString);
        };
        reader.onabort = () => alert("File opening aborted.");
        reader.onerror = () => alert("File could not be read.");

        reader.readAsBinaryString(file);
    }
   }
   render() {
     return (
       <Dropzone disabledStyle rejectStyle onDrop={this.openFile.bind(this)} class="takesmainsize">
         <div class="takesmainsize row center-lg center-md center-sm middle-lg middle-md middle-sm">
           <div class="message">
             To read a subtitle file <b>drop it here</b> or <b>click</b> to select it.
           </div>
         </div>
       </Dropzone>
     );
   }
 }

 export default App;
