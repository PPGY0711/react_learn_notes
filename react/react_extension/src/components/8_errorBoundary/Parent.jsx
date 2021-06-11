import React, { Component } from 'react'
import Child from './Child'
export default class Parent extends Component {

    state = {
        hasError:''  //用于标识子组件是否产生错误
    }
    // 当Parent的子组件出现报错时，会触发它的调用并携带错误信息
    static getDerivedStateFromError(error){
        console.log('@@@@ ',error)
        return {hasError:error}
    }

    componentDidCatch(){
        console.log("渲染组件时出错")
        console.log("统计错误次数，发送给后台，反馈给服务器，通知编码人员进行bug的解决")
    }

    render() {
        return (
            <div>
                <h3>我是Parent组件</h3>
                {this.state.hasError ? <h2>当前网络不稳定，稍后再试</h2>:<Child/>}
            </div>
        )
    }
}
