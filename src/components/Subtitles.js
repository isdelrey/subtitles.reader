import '../assets/css/Subtitles.css';
import '../assets/css/flexboxgrid.min.css';
import React, { Component } from 'react';
import Header from './Header';
import { parse as parser } from 'subtitle';

class App extends React.Component {
 constructor() {
   super();
 }
 center() {
   let next = this.state;
   let top = next.containerStyle.marginTop - document.getElementsByClassName("active")[0].offsetTop  + window.innerHeight*0.28;
   next.containerStyle = {
     marginTop: top
   };
   this.setState(next, () => {
     console.log("Centering to " + (-top));
   });
 }
 time(n) {
   let next = this.state;
   next.time = n;
   this.setState(next, () => {
     console.log("Time changed to " + next.time);
     this.center();
   });
 }
 position(n) {
   let next = this.state;
   next.position = next.position + n || 0;
   next.position = (next.position < this.state.subtitles.length && next.position >= 0) ? next.position : next.position - n;
   this.setState(next, () => {
     let time = this.state.subtitles[next.position].start;
     console.log("Active is now " + next.position + " (" + time + "ms)");
     this.time(time);
   });
 }
 parse(contents) {
   let next = this.state || {};
   next.subtitles = parser(contents);
   next.time = next.subtitles[0].start;
   this.setState(next, () => console.log("Parsed"));
 }
 componentWillMount() {
   this.setState({ containerStyle: {
     marginTop: window.innerHeight*0.28
   } });
   this.parse(this.props.contents);
   document.addEventListener('keydown', (event) => {
      if (event.keyCode == 38 || event.keyCode == 40) {
          event.preventDefault();
          this.position((event.keyCode == 40) ? 1 : -1);
      }
  });
 }
 render() {
   return (
     <div className="subtitles takesmainsize row center-lg center-md center-sm middle-lg middle-md middle-sm" refs="container" style={this.state.containerStyle}>
       { this.state.subtitles.map(subtitle => <div className={(subtitle.start <= this.state.time && subtitle.end >= this.state.time) ? "active" : ""}>{subtitle.text}</div>) }
     </div>
   );
 }
}

export default App;
