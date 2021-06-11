import React, { Component } from 'react'
import './index.css'
import C from '../1_setState'
export default class Demo extends Component {
    render() {
        return (
            <div className="parent">
                <h3>我是Parent组件</h3>
                {/* <A>
                    <B/>
                </A> */}
                <A render={(name)=><C name={name}/>}/>
            </div>
        )
    }
}


class A extends Component{
    state = {name:"tom"}
    render(){
        console.log(this.props)
        return(
            <div className="a">
                <h3>我是A组件</h3>
                {/* <B/> */}
                {/* {this.props.children} */}
                {this.props.render(this.state.name)}
            </div>
        )
    }
}

class B extends Component{
    render(){
        console.log('render---B')
        return(
            <div className="b">
                <h3>我是B组件, {this.props.name}</h3>
            </div>
        )
    }
}