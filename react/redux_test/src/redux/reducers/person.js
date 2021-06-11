import { ADDPERSON } from "../constant";
// 初始化人的列表
const initState = [{id:"001", name:"Tom", age:18}]
export default function personReducer(preState=initState, action){
    const {type, data} = action
    switch (type) {
        case ADDPERSON: //若是添加一个人,不能对preState直接操作之后返回，因为react-redux底层对preState的变化比较是浅比较，只会比较地址变没变
            // preState.unshift(data)  //此处不能这样写，这样会导致preState被改写了，personReducer就不是纯函数了
            return [data, ...preState]
        default:
            return preState
    }
}