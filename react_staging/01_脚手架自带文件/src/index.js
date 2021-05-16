import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// 用于记录页面性能的
import reportWebVitals from './reportWebVitals';

// React.StrictMode 可以帮忙检查App组件以及子组件的写法正确性
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
