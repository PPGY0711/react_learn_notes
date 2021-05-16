import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'
export default class Item extends Component {

    state = {mouse:false}

    static propTypes = {
        updateTodo: PropTypes.func.isRequired,
        deleteTodo: PropTypes.func.isRequired
    }

    // 鼠标移入移出的回调
    handleMouse = (flag)=>{
        
        return ()=>{
            this.setState({mouse:flag})
        } 
        
    }
    
    // checkbox勾选和取消的回调
    handleCheck = (id)=>{
        return (event)=>{
            // console.log(id, event.target.checked)
            this.props.updateTodo(id, event.target.checked)
        }
    }

    // 删除一个todo的回调
    handleDelete = (id)=>{
        // console.log("通知App删除",id)
        //如果不写window.会报错，不认这个confirm是在哪个对象身上
        if(window.confirm('确定删除吗？')){
            this.props.deleteTodo(id)
        }
    }

    render() {
        const {id, name, done} = this.props
        const {mouse} = this.state
        return (
            <li style={{backgroundColor: mouse === true? '#ddd':'#fff'}} onMouseLeave={this.handleMouse(false)} onMouseEnter={this.handleMouse(true)}>
                <label>
                    <input type="checkbox" checked={done} onChange={this.handleCheck(id)}/>
                    <span>{name}</span>
                </label>
                <button onClick={()=>this.handleDelete(id)} className="btn btn-danger" style={{display:mouse === true? 'block':'none'}}>删除</button>
            </li>
        )
    }
}
