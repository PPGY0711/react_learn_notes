import React, { Component } from 'react'
import {nanoid} from 'nanoid'
// 生成唯一字符串标识的库，比uuid库要轻量
// console.log(nanoid())
// console.log(nanoid())
// console.log(nanoid())
import PropTypes from 'prop-types'
import './index.css'
export default class Header extends Component {

    // 对接收的props进行：类型、必要性的限制
    static propTypes = {
        addTodo: PropTypes.func.isRequired
    }

    handleKeyUp = (event)=>{
        // 结构赋值
        const {keyCode, target} = event
        // 判断是否是回车按键
        if(keyCode !== 13) return 
        // console.log(target.value, keyCode)
        // 添加的todo名字不能为空
        if(target.value.trim() === ''){
            alert('输入不能为空')
            return
        }
        // 准备好一个todo对象
        const todoObj = {id:nanoid(), name:target.value, done:false}
        // 将todoObj传递给App
        this.props.addTodo(todoObj)
        // 清空输入
        target.value = ''
    }


    render() {
        return (
            <div className="todo-header">
                <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
            </div>
        )
    }
}
