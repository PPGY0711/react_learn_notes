import React, { Component } from 'react'
import Count from './containers/Count'
import Person from './containers/Person'
// 引入store
// import store from './redux/store'
export default class App extends Component {
    render() {
        return (
            <div>
            {/* 以props的形式传入store给Count的容器组件 */}
                <Count/>
                <hr/>
                <Person/>
            </div>
        )
    }
}
