import React, { Component } from 'react'
import axios from 'axios'
export default class Search extends Component {

    search = ()=>{
        
        // 获取用户的输入
        // const {value} = this.keyWordElement
        // 结构赋值的连续写法，不过最终只定义了value，keyWordElement并没有单独定义
        // const {keyWordElement:{value}} = this
        // // 连续结构赋值+重命名(这里改成了keyWord)
        const {keyWordElement:{value:keyWord}} = this 
        console.log(keyWord)
        // 发送请求前通知App更新状态
        this.props.updateAppState({isLoading: true, isFirst: false})
        // 发送网络请求
        // 因为本身就是从localhost:3000发请求，可以在url中不写
        axios.get(`/api1/search/users?q=${keyWord}`).then(
            response=>{
                // 请求成功后通知App更新状态
                this.props.updateAppState({isLoading: false, users: response.data.items})
                // this.props.saveUsers(response.data.items)
            },
            error=>{
                console.log("失败了，", error)
                this.props.updateAppState({isLoading: false, err: error.message, users: []})
                
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
