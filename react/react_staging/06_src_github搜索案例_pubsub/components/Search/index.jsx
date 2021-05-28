import React, { Component } from 'react'
import axios from 'axios'
import PubSub from 'pubsub-js'
export default class Search extends Component {

    search = ()=>{
        console.log("Search组件发布消息")
        // PubSub.publish('searchUpdate', {name:"tom",age:18})
        // 获取用户的输入（连续解构赋值+重命名）
        const {keyWordElement:{value:keyWord}} = this 
        console.log(keyWord)
        // 发送请求前通知List更新状态
        PubSub.publish("searchUpdate", {isLoading: true, isFirst: false})
        // 发送网络请求
        // 因为本身就是从localhost:3000发请求，可以在url中不写
        axios.get(`/api1/search/users?q=${keyWord}`).then(
            response=>{
                // 请求成功后通知List更新状态
                // this.props.updateAppState({isLoading: false, users: response.data.items})
                // this.props.saveUsers(response.data.items)
                PubSub.publish("searchUpdate", {isLoading: false, users: response.data.items})
            },
            error=>{
                // 请求失败后通知List更新状态
                console.log("失败了，", error)
                // this.props.updateAppState({isLoading: false, err: error.message, users: []})
                PubSub.publish("searchUpdate", {isLoading: false, err: error.message, users: []})
            }
        )
    }

    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">搜索Github用户</h3>
                <div>
                {/* 回调类型的refs */}
                    <input ref={c => this.keyWordElement = c} type="text" placeholder="输入关键词点击搜索"/>&nbsp;
                    <button onClick={this.search}>搜索</button>
                </div>
            </section>
        )
    }
}
