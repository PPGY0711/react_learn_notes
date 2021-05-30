import React, { Component } from 'react'
export default class Count extends Component {

    // state = {count:0}
    state = {carName:'Benz S600'}
    inc = ()=>{
        const {value} = this.selectedNum
        this.props.add(value*1)
    }

    dec = ()=>{
        const {value} = this.selectedNum
        this.props.sub(value*1)
    }

    incIfOdd = ()=>{
        const {value} = this.selectedNum
        if(this.props.count % 2 !== 0){
            this.props.add(value*1)
        }
    }

    incAsync = ()=>{
       const {value} = this.selectedNum 
       this.props.addAsync(value*1, 500)   
    }
    render() {
        console.log("UI组件接收到的props是：",this.props)
        return (
            <div>
                <h1>当前求和为:{this.props.count}</h1>
                <select ref={c=>this.selectedNum = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp;
                <button onClick={this.inc}>+</button>&nbsp;
                <button onClick={this.dec}>-</button>&nbsp;
                <button onClick={this.incIfOdd}>当前求和为奇数再加</button>&nbsp;
                <button onClick={this.incAsync}>异步加</button>
            </div>
        )
    }
}
