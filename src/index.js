import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import _ from 'lodash';
console.log(_.join(['Another', 'module', 'loaded!'], ' '));
ReactDOM.render(<App />, document.getElementById('root'));
