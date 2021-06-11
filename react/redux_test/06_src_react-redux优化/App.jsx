import React, { Component } from 'react'
import Count from './containers/Count'
// 引入store
import store from './redux/store'
export default class App extends Component {
    render() {
        return (
            <div>
            {/* 以props的形式传入store给Count的容器组件 */}
                <Count store={store}/>
            </div>
        )
    }
}
