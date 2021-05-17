// 创建外壳组件App
import React, {Component} from 'react'
// 如果不想这么引入的话，可以把组件文件夹下的每个组件都用index.css,index.jsx来开发，这样子引入可以写成，因为脚手架可以直接找到index.jsx当作组件定义
import Hello from './components/Hello'
import Welcome from './components/Welcome/Welcome'
// 这里之所以能用花括号形式引入Component是因为Component在react核心库中是分别暴露出来的，而不是通过结构赋值方式取出的
// const {Component} = React //这种方式是一结构赋值的方式从React对象身上取Component

// 创建并暴露App组件
export default class App extends Component{
    render(){
        return (
            <div>
                <Hello></Hello>
                <Welcome></Welcome>
            </div>
        )
    }
}

// 默认暴露App组件
// export default App