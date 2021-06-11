import { ADDPERSON } from "../constant";
// 初始化人的列表
const initState = [{id:"001", name:"Tom", age:18}]
export default function personReducer(preState=initState, action){
    const {type, data} = action
    switch (type) {
        case ADDPERSON: //若是添加一个人
            return [data, ...preState]
        default:
            return preState
    }
}