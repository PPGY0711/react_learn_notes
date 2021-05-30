import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import store from './redux/store'
ReactDOM.render(<App/>, document.getElementById("root1"))

// 监测redux中状态的改变，如redux的状态发生了改变，那么重新渲染组件
store.subscribe(()=>{
    ReactDOM.render(<App/>, document.getElementById("root1"))
})