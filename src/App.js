import React from 'react';
import './App.css';
import './Apps.scss';
import Img from './assets/TDS20201017180216.png';
import _ from 'lodash';
console.log(_.join(['Another', 'module', 'loaded!'], ' '));
const App = () => {
  return (
    <div className='dddd'>
      222222 <img src={Img} />
    </div>
  );
};
export default App;
