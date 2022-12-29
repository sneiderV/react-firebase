import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import WebFont from 'webfontloader';

WebFont.load({
    google: {
      families: ['Work Sans:400,500,700', 'sans-serif']
    }
  });
 
const Index = () => {
    return ( <App/> );
}
 
ReactDOM.render( <Index/>, document.getElementById('root'));