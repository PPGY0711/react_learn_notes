import React, { Component } from 'react'

export default class Demo extends Component {
    state = {count:0}
    add = ()=>{
        // 1.对象式的setState
        // const {count} = this.state
        // this.setState({count: count+1},()=>{
        //     console.log("setState异步执行之后的回调",this.state.count)
        // })
        // console.log("add中同步执行的输出",this.state.count)
        // 2.函数式的setState
        // this.setState((state, props)=>{
        //     console.log(state)
        //     console.log(props)
        //     return {count:state.count+1}
        // })
        this.setState(state=>({count:state.count+1}))
    }
    render() {
        return (
            <div>
                <h1>当前求和为:{this.state.count}</h1>
                <button onClick={this.add}>点我加1</button>
            </div>
        )
    }
}
