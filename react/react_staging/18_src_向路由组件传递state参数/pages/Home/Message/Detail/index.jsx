import React, { Component } from 'react'
import qs from 'querystring'

let obj = {name:'tom', age:18}
console.log(qs.stringify(obj))
let str = 'carName=Benz&price=199W'
console.log(qs.parse(str))

const data =[
    {id:"01",content:'你好，消息1'},
    {id:"02",content:'你好，消息2'},
    {id:"03",content:'你好，消息3'},
]

export default class Detail extends Component {
    render() {
        console.log(this.props)
        // 接收params参数
        // const {id,title} = this.props.match.params  

        // 接收search参数
        // const {search} = this.props.location
        // const {id,title} = qs.parse(search.slice(1))

        // 接收state参数
        const {id, title} = this.props.location.state || {}
        const findResult = data.find((dataObj)=>{
            return dataObj.id === id
        }) || {}
        return (
            <ul>
                <li>ID:{id}</li>
                <li>TITLE:{title}</li>
                <li>CONTENT:{findResult.content}</li>
            </ul>
        )
    }
}
