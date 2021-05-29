import React, { Component } from 'react'

const data =[
    {id:"01",content:'你好，消息1'},
    {id:"02",content:'你好，消息2'},
    {id:"03",content:'你好，消息3'},
]

export default class Detail extends Component {
    render() {
        console.log(this.props)
        // 接收params参数
        const {id,title} = this.props.match.params
        const findResult = data.find((dataObj)=>{
            return dataObj.id === id
        })
        return (
            <ul>
                <li>ID:{id}</li>
                <li>TITLE:{title}</li>
                <li>CONTENT:{findResult.content}</li>
            </ul>
        )
    }
}
