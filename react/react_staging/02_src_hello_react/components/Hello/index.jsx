import React,{Component} from 'react'
// import './Hello.css'
// 样式模块化，避免和Welcome的title样式混淆，把Hello的样式都用hello这个对象接收了
import hello from './index.module.css'

export default class Hello extends Component{
    render(){
        return (
            <h2 className={hello.title}>Hello!</h2>
        )
    }
}