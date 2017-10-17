import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { HashRouter, Switch, Route } from 'react-router-dom';
// Since we are using HtmlWebpackPlugin WITHOUT a template, we should create our own root node in the body element before rendering into it
let root = document.createElement('div');
root.id = "root";
document.body.appendChild( root );

// Root element
let Root = class Root extends React.Component {
  render() {
    return (
        <App />
    );
  }
};


// Now we can render our application into it
render( <Root />, document.getElementById('root') );
