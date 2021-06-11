/* import React, { Component } from 'react'
import ReactDOM from 'react-dom'
export default class Demo extends React.Component {
    state = {count:0}

    myRef = React.createRef()
    add = ()=>{
        this.setState(state=>({count:state.count+1}))
    }
    unmount = ()=>{
        ReactDOM.unmountComponentAtNode(document.getElementById('root'))
    }
    show = ()=>{
        alert(this.myRef.current.value)
    }
    componentDidMount(){
        this.timer = setInterval(() => {
            this.setState(state=>({count:state.count+1}))
        }, 1000);
    }
    componentWillUnmount(){
        clearInterval(this.timer)
    }
    render() {
        return (
            <div>
                <input type="text" ref={this.myRef}/>
                <h2>当前求和为: {this.state.count}</h2>
                <button onClick={this.add}>点我加1</button>
                <button onClick={this.unmount}>点击卸载</button>
                <button onClick={this.show}>点击展示</button>
                
            </div>
        )
    }
} */


import React from 'react'
import ReactDOM from 'react-dom'
export default function Demo() {

    const [count, setCount] = React.useState(0)
    const myRef = React.useRef()
    React.useEffect(()=>{
        // 中间执行的相当于componentDidMount和componentDidUpdate
        // console.log("#")
        let timer = setInterval(() => {
            setCount(count=>count+1)
        }, 1000);
        // 返回的函数相当于componentWillUnmount
        return ()=>{clearInterval(timer)}
    },[])
    // 传给useEffect的第二个参数是一个数组，在其中给定需要监控的对象
    // 如果传的是空数组，则什么变量都不监视，这个函数就只会在初始化的时候调用1次
    // 如果不传这个参数则会监视所有的state对象

    // 加的回调
    function add(){
        // console.log("点击了加1按钮")
        // setCount(count+1) //第一种写法
        setCount(count=>count+1)
    }
    // 卸载的回调
    function unmount(){
        ReactDOM.unmountComponentAtNode(document.getElementById('root'))
    }
    // 提示输入的回调
    function show(){
        alert(myRef.current.value)
    }
    return (
        <div>
            <input type="text" ref={myRef}/>
            <h2>当前求和为: {count}</h2>
            <button onClick={add}>点我加1</button>
            <button onClick={unmount}>点我卸载</button>
            <button onClick={show}>点我展示</button>
        </div>
    )
}

