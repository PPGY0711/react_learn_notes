import { DECREMENT, INCREMENT } from "./constant"

/* 
    该文件专门为Count组件生产action对象
*/
export const createIncrementAction = data => ({type:INCREMENT, data})

export const createDecrementAction = data => ({type:DECREMENT, data})

// 以上简写相当于：
// const createIncrementAction = (data) =>{
//     return {type:'increment', data: data}
// }