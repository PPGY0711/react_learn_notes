import React, { Component } from 'react'

export default class Count extends Component {
    state = {count:0}
    inc = ()=>{
        const {value} = this.selectedNum
        const {count} = this.state
        this.setState({count:count+value*1})
    }

    dec = ()=>{
        const {value} = this.selectedNum
        const {count} = this.state
        this.setState({count:count-value*1})
    }

    incIfOdd = ()=>{
        const {value} = this.selectedNum
        const {count} = this.state
        if(count % 2 === 1){
            this.setState({count:count+value*1})
        }
    }

    decAsync = ()=>{
        setTimeout(() => {
            const {value} = this.selectedNum
            const {count} = this.state
            this.setState({count:count+value*1})
        }, 500);
    }
    render() {
        return (
            <div>
                <h1>当前求和为:{this.state.count}</h1>
                <select ref={c=>this.selectedNum = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="4">3</option>
                </select>&nbsp;
                <button onClick={this.inc}>+</button>&nbsp;
                <button onClick={this.dec}>-</button>&nbsp;
                <button onClick={this.incIfOdd}>当前求和为奇数再加</button>&nbsp;
                <button onClick={this.decAsync}>异步加</button>
            </div>
        )
    }
}
