import React from 'react';
import ReactDOM from 'react-dom';
import { firebase } from './lib/firebase';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <h1 className="text-red-500">Hello, World</h1>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
