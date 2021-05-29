import React, { Component } from 'react'
import {Link, Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
export default class App extends Component {

    render() {
        return (
            <div>
                <div className="row">
                <div className="col-xs-offset-2 col-xs-8">
                    <div className="page-header"><h2>React Router Demo</h2></div>
                </div>
                </div>
                {/* <BrowserRouter> */}
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                    {/* 原生html中，靠<a>跳转不同的页面 */}
                        {/* <div className="list-group">
                        <a className="list-group-item active" href="./about.html">About</a>
                        <a className="list-group-item" href="./home.html">Home</a> 
                        </div>*/}
                        {/* 在React中靠路由链接实现切换组件 -- 编写路由链接 */}
                    
                            <Link className="list-group-item" to="/about">About</Link>
                            <Link className="list-group-item" to="/home">Home</Link>
                        
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                {/* 注册路由 */}
                            
                                    <Route path="/about" component={About}></Route>
                                    <Route path="/home" component={Home}></Route>
                                
                            </div>
                        </div>
                    </div>
                </div>
                {/* </BrowserRouter> */}
            </div>
        )
    }
}
