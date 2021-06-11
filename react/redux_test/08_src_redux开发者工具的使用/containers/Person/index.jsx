import React, { Component } from 'react'
import {nanoid} from 'nanoid'
import { createAddPersonAction } from "../../redux/actions/person";
import { connect } from "react-redux";
class Person extends Component {

    addPerson = ()=>{
        const name = this.nameNode.value
        const age = this.ageNode.value*1
        // console.log(name, age)
        const personObj = {id:nanoid(), name, age}
        console.log(personObj)
        this.props.addPerson(personObj)
        this.nameNode.value = ''
        this.ageNode.value = ''
    }

    render() {
        
        return (
            <div>
                <h2>我是Person组件，上方组件求和为：{this.props.count}</h2>
                <input ref={c=>this.nameNode = c} type="text" placeholder="输入名字"/>
                <input ref={c=>this.ageNode = c} type="text" placeholder="输入年龄"/>
                <button onClick={this.addPerson}>添加</button>
                <ul>
                    {
                        this.props.rens.map((personObj)=>{
                            return <li key={personObj.id}>{personObj.name}--{personObj.age}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}


export default connect(
    state=> ({count:state.he, rens:  state.rens}),
    // mapDispatchToProps的一般写法
    // dispatch => ({add:data=>dispatch(createIncrementAction(data)),
    //     sub:data=>dispatch(createDecrementAction(data)),
    //     addAsync:(data, time)=>dispatch(createIncrementAsyncAction(data,time))
    // })
    // mapDispatchToProps的简写
    {
        addPerson: createAddPersonAction,
    }
)(Person)