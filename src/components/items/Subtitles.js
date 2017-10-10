import '../../assets/css/Subtitles.css';
import '../../assets/css/flexboxgrid.min.css';
import React, { Component } from 'react';
import Header from './Header';
import Subtitle from './Subtitle';

class App extends React.Component {
 constructor() {
   super();
 }
 render() {
   return (
     <div class="subtitles takesmainsize row center-lg center-md center-sm middle-lg middle-md middle-sm">
       <Subtitle>jeg er Ivø</Subtitle>
     </div>
   );
 }
}

export default App;
