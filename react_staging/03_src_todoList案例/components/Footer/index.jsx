import React, { Component } from 'react'
import './index'
export default class Footer extends Component {

    //全选checkbox的回调
    handleCheckAll = (event)=>{
        this.props.checkAllTodo(event.target.checked)
    }

    //清除所有已完成的回调 
    clearAllDone = ()=>{
        this.props.clearAllDone()
    }

    render() {
        const {todos} = this.props
        // 已完成的个数
        const doneCount = todos.reduce((preValue, curValue)=>{
            if(curValue.done === true)
                preValue += 1
            return preValue
        },0)
    
        // 总数
        const totalCount = todos.length
        return (
            <div className="todo-footer">
                <label>
                <input type="checkbox" onChange={this.handleCheckAll} checked={doneCount === totalCount && doneCount ? true:false}/>
                </label>
                <span>
                <span>已完成{doneCount}</span> / 全部{totalCount}
                </span>
                <button onClick={this.clearAllDone} className="btn btn-danger">清除已完成任务</button>
            </div>
        )
    }
}
