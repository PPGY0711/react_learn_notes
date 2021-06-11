import React, { PureComponent } from 'react'
import './index.css'
export default class Parent extends PureComponent {
    state = {carName:'Benz S600'}
    changeCar = ()=>{
        this.setState({carName:'Porsche 911'})
    }
    render() {
        console.log("Parent---render")
        const {carName} = this.state
        return (
            <div className="parent">
                <h3>我是Parent组件</h3>
                <span>我的车名字是：{carName}</span><br/>
                <button onClick={this.changeCar}>点我换车</button>
                <Child/>
            </div>
        )
    }
}

class Child extends PureComponent{
    render() {
        console.log("Child---render")
        return (
            <div className="child">
                <h3>我是Child组件</h3>
                {/* <span>我接到的车名字是：{this.props.carName}</span><br/> */}
            </div>
        )
    }
}