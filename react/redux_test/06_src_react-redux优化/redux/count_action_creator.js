import { DECREMENT, INCREMENT } from "./constant"
// version 1中必须引入
// import store from "./store"

/* 
    该文件专门为Count组件生产action对象
*/

// 所谓的同步action，就是指action的值为Object对象类型
export const createIncrementAction = data => ({type:INCREMENT, data})

export const createDecrementAction = data => ({type:DECREMENT, data})

// 以上简写相当于：
// const createIncrementAction = (data) =>{
//     return {type:'increment', data: data}
// }

// 所谓的异步action，就是指action的值为函数类型
// version 1:显式引用store
// export const createIncrementAsyncAction = (data, time) =>{
//     return ()=>{
//         setTimeout(() => {
//             console.log('AsyncAction:', time)
//             store.dispatch(createIncrementAction(data))
//         }, time);
//     }
// }

// version 2:隐式得到store的dispatch使用
export const createIncrementAsyncAction = (data, time) =>{
    
    return (dispatch)=>{
        setTimeout(() => {
            console.log('AsyncAction:', time)
            dispatch(createIncrementAction(data))
        }, time);
    }
}

// 异步action中一般都会调用同步action，不是一定要用的