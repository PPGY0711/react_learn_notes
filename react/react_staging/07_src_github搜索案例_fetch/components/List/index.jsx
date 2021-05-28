import React, { Component } from 'react'
import Item from '../Item'
import PubSub from 'pubsub-js'
export default class List extends Component {

    state = {
        users:[],  //初始化状态，users初始值为空数组
        isFirst: true, //是否为第一次打开页面
        isLoading: false, //是否处于请求加载中
        err: '' //存储请求相关的错误信息
    } 

    componentDidMount(){
        this.token = PubSub.subscribe('searchUpdate', (msg, stateObj)=>{
            // console.log("List组件收到消息了")
            // console.log(msg,stateObj)
            this.setState(stateObj)
        })
    }

    componentWillUnmount(){
        PubSub.unsubscribe(this.token)
    }

    render() {
        const {users, isFirst, isLoading, err} = this.state
        return (
        <div>
        {
            isFirst ? <h2>{'Enter name to Search'}</h2> :
            isLoading ? <h2>{'Loading......'}</h2> :
            err !== '' ? <h2 className="text-danger">{err}</h2> :
            users.map((item, index)=>{
                return <Item key={item.id} avatar_url={item.avatar_url} html_url={item.html_url} login={item.login}/>
            })
        }
        </div>
        )
    }
}
