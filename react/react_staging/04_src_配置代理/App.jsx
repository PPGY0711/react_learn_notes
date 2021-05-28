import React, { Component } from 'react'
import axios from 'axios'
export default class App extends Component {

    getStudentData = ()=>{
        // 规定了代理之后只需要给代理发请求，同时从代理收请求，然后自己就不用直接发到5000端口，解决跨域问题
        // axios.get('http://localhost:3000/students').then(
        // 3000根目录就是自己的public文件夹，如果自己有的资源，请求就不会再转发，如果public下没有，才会去请求5000端口
        // axios.get('http://localhost:3000/index.html').then(
        axios.get('http://localhost:3000/api1/students').then(
        response =>{
            console.log('成功了，',response.data)
        },
        error =>{
            console.log("失败了，",error.message)
        })
    }

    getCarData = ()=>{
        axios.get('http://localhost:3000/api2/cars').then(
        response =>{
            console.log('成功了，',response.data)
        },
        error =>{
            console.log("失败了，",error.message)
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.getStudentData}>点我获取学生数据</button><br/>
                <button onClick={this.getCarData}>点我获取汽车数据</button>
            </div>
        )
    }
}
