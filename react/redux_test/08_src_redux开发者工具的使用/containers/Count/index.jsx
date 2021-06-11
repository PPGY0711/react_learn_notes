import React, { Component } from 'react'
// 引入connect用于连接UI组件与redux
import {connect} from 'react-redux'
// 引入action
import { 
    createDecrementAction, 
    createIncrementAction, 
    createIncrementAsyncAction
 } from '../../redux/actions/count'

//  定义UI组件
class Count extends Component {
 
     // state = {count:0}
     state = {carName:'Benz S600'}
     inc = ()=>{
         const {value} = this.selectedNum
         this.props.add(value*1)
     }
 
     dec = ()=>{
         const {value} = this.selectedNum
         this.props.sub(value*1)
     }
 
     incIfOdd = ()=>{
         const {value} = this.selectedNum
         if(this.props.count % 2 !== 0){
             this.props.add(value*1)
         }
     }
 
     incAsync = ()=>{
        const {value} = this.selectedNum 
        this.props.addAsync(value*1, 500)   
     }
     render() {
         console.log("UI组件接收到的props是：",this.props)
         return (
             <div>
                <h2>我是Count组件，下方组件人数为：{this.props.rens.length}</h2>
                <h4>当前求和为:{this.props.count}</h4>
                <select ref={c=>this.selectedNum = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp;
                <button onClick={this.inc}>+</button>&nbsp;
                <button onClick={this.dec}>-</button>&nbsp;
                <button onClick={this.incIfOdd}>当前求和为奇数再加</button>&nbsp;
                <button onClick={this.incAsync}>异步加</button>
             </div>
         )
     }
 }
 
// 使用connect()()创建并暴露一个Count的容器组件
// 第一次调用connect的时候可以传入两个参数，这两个参数都必须是函数类型
export default connect(
    state=> ({count:state.he, rens:  state.rens}),
    // mapDispatchToProps的一般写法
    // dispatch => ({add:data=>dispatch(createIncrementAction(data)),
    //     sub:data=>dispatch(createDecrementAction(data)),
    //     addAsync:(data, time)=>dispatch(createIncrementAsyncAction(data,time))
    // })
    // mapDispatchToProps的简写
    {
        add: createIncrementAction,
        sub: createDecrementAction,
        addAsync: createIncrementAsyncAction
    }
)(Count)

