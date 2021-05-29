// 引入React核心库
import React from 'react'
// 引入ReactDOM
import ReactDOM from 'react-dom'
// 引入路由 
import {BrowserRouter, HashRouter} from 'react-router-dom'
// 引入App
import App from './App'

// 渲染组件到页面
ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
, document.getElementById('root'))