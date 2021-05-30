import React, { Component } from 'react'
// 引入store，用于redux中保存的状态
import store from '../../redux/store'

export default class Count extends Component {

    /* 
        如果有多个组件使用redux管理状态，那么这么写，代码会比较冗余，改到最外层的入口文件index.js中写
        componentDidMount(){
        // 检测redux中状态的变化，只要变化就调用render
        store.subscribe(()=>{
            this.setState({})
        })
    } */

    // state = {count:0}
    // 保留自己的状态（count状态交给redux管理）
    state = {carName:'Benz S600'}
    inc = ()=>{
        const {value} = this.selectedNum
        // 通知redux加
        store.dispatch({type:'increment', data:value*1})
    }

    dec = ()=>{
        const {value} = this.selectedNum
        // 通知redux加
        store.dispatch({type:'decrement', data:value*1})
    }

    incIfOdd = ()=>{
        const {value} = this.selectedNum
        const count = store.getState()
        // console.log(count)
        if(count % 2 === 1){
            store.dispatch({type:'increment', data:value*1})
        }
    }

    decAsync = ()=>{
        setTimeout(() => {
            const {value} = this.selectedNum
            store.dispatch({type:'increment', data:value*1})
        }, 500);
    }
    render() {
        return (
            <div>
                <h1>当前求和为:{store.getState()}</h1>
                <select ref={c=>this.selectedNum = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp;
                <button onClick={this.inc}>+</button>&nbsp;
                <button onClick={this.dec}>-</button>&nbsp;
                <button onClick={this.incIfOdd}>当前求和为奇数再加</button>&nbsp;
                <button onClick={this.decAsync}>异步加</button>
            </div>
        )
    }
}
