// 引入React核心库
import React from 'react'
// 引入ReactDOM
import ReactDOM from 'react-dom'
// 引入路由 
// 样式丢失解决方式3：使用HashRouter，这样子会把路由对应路径全部解释成前端的资源，不会影响样式的路径（少见）
import {HashRouter} from 'react-router-dom'
// 引入App
import App from './App'

// 渲染组件到页面
ReactDOM.render(
    <HashRouter>
        <App/>
    </HashRouter>
, document.getElementById('root'))