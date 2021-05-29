import React, { Component } from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './pages/Home'  //Home是路由组件，放在pages文件夹下
import About from './pages/About'  //About是路由组件，放在pages文件夹下
import Header from './components/Header'  //Header是一般组件，放在components文件夹下
import MyNavLink from './components/MyNavLink'
export default class App extends Component {

    render() {
        return (
            <div>
                <div className="row">
                <Header></Header>
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
                        {/* NavLink比Link功能多一些，点击的时候会自动给className后面加上' active'，如果想指定active的样式需要在activeClassName属性当中给出 */}
                            {/* <NavLink activeClassName="atguigu" className="list-group-item" to="/about">About</NavLink> */}
                            {/* <NavLink activeClassName="atguigu" className="list-group-item" to="/home">Home</NavLink> */}
                            {/* 使用自己封装的NavLink，避免重复，就使用统一的样式 */}
                            <MyNavLink to="/api/home">Home</MyNavLink>
                            <MyNavLink to="/api/about">About</MyNavLink>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                {/* 注册路由,拿Switch包一下的话值会匹配第一次搜到的对应路由，不会多次匹配 */}
                                <Switch>
                                    <Route path="/api/about" component={About}></Route>
                                    <Route path="/api/home" component={Home}></Route>
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
                {/* </BrowserRouter> */}
            </div>
        )
    }
}
