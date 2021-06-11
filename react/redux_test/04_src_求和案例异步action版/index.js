import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import store from './redux/store'
ReactDOM.render(<App/>, document.getElementById("root1"))

// react-redux在connect()()中做了监控
// store.subscribe(()=>{
//     ReactDOM.render(<App/>, document.getElementById("root1"))
// })