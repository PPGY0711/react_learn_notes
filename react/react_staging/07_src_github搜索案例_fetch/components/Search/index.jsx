import React, { Component } from 'react'
// import axios from 'axios'
import PubSub from 'pubsub-js'
export default class Search extends Component {

    search = async ()=>{
        console.log("Search组件发布消息")
        // PubSub.publish('searchUpdate', {name:"tom",age:18})
        // 获取用户的输入（连续解构赋值+重命名）
        const {keyWordElement:{value:keyWord}} = this 
        console.log(keyWord)
        // 发送请求前通知List更新状态
        PubSub.publish("searchUpdate", {isLoading: true, isFirst: false})
        // #region 
        // 发送网络请求 ---- 使用fetch发送(未优化)
        /* fetch(`/api1/search/users2?q=${keyWord}`).then(
            response=>{
                console.log('联系服务器成功了')
                return response.json()
            },
            error=>{
                console.log('联系服务器失败了',error)
                // 没联系成就不要往下传了，中断Promise链
                return new Promise(()=>{})
            }
        ).then(
            response=>{
                console.log("获取数据成功了", response)
                // PubSub.publish("searchUpdate", {isLoading: false, users: response.data})
            },
            error=>{
                console.log("获取数据失败了", error)
                // PubSub.publish("searchUpdate", {isLoading: false, err: error.message, users: []})
            }
        ) */
        //#endregion
        // 发送网络请求 ---- 使用fetch发送(简化版)
        try {
            // fetch的设计利用了关注分离，不是一下子把数据传回来，要先确认连不连得上服务器，能做再继续
            const response = await fetch(`/api1/search/users2?q=${keyWord}`)
            const data = await response.json()
            console.log(data)
            PubSub.publish("searchUpdate", {isLoading: false, users: data.items})
            
        } catch (error) {
            console.log("请求出错：", error)
            PubSub.publish("searchUpdate", {isLoading: false, err: error.message, users: []})
            
        }
        // #region 发送网络请求 ---- 使用axios发送
        // 因为本身就是从localhost:3000发请求，可以在url中不写
        /* axios.get(`/api1/search/users2?q=${keyWord}`).then(
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
        ) */
        // #endregion
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
