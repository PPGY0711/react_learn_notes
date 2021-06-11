import { DECREMENT, INCREMENT } from "../constant"
// version 1中必须引入
// import store from "./store"

/* 
    该文件专门为Count组件生产action对象
*/

// 所谓的同步action，就是指action的值为Object对象类型
export const increment = data => ({type:INCREMENT, data})

export const decrement = data => ({type:DECREMENT, data})

// version 2:隐式得到store的dispatch使用
export const incrementAsync = (data, time) =>{
    
    return (dispatch)=>{
        setTimeout(() => {
            console.log('AsyncAction:', time)
            dispatch(increment(data))
        }, time);
    }
}

// 异步action中一般都会调用同步action，不是一定要用的