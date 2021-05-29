import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
class Header extends Component {

    back = ()=>{
        this.props.history.goBack()
    }

    forward = ()=>{
        this.props.history.goForward()
    }

    go = ()=>{
        this.props.history.go(2)
    }

    render() {
        console.log("Header组件的props：", this.props)
        return (
            <div className="col-xs-offset-2 col-xs-8">
                <div className="page-header"><h2>React Router Demo</h2></div>
                <button onClick={this.back}>后退</button> &nbsp;
                <button onClick={this.forward}>前进</button> &nbsp;
                <button onClick={this.go}>go动作:前进2步</button> &nbsp;
            </div>
        )
    }
}

export default withRouter(Header)
// withRouter是一个函数
// withRouter可以加工一般组件，让一般组件具备路由组件所特有的API
// withRouter的返回值是一个新组件