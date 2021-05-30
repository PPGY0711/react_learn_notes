// 引入Count的UI组件
import Count from '../../components/Count'
// 引入connect用于连接UI组件与redux
import {connect} from 'react-redux'
import { 
    createDecrementAction, 
    createIncrementAction, 
    createIncrementAsyncAction
 } from '../../redux/count_action_creator'

/* 
    1.mapStateToProps函数返回的是一个对象：
    2.返回对象中的key作为状态传递给UI组件props的key，value就作为传递给UI组件props的value
    3.mapStateToProps用于传递状态 
*/
// redux调用这个函数的时候会把getState()的结果传进去的
function mapStateToProps(state){
    return {count:state}
}

/* 
    1.mapDispatchToProps函数返回的是一个对象：
    2.返回对象中的key作为状态传递给UI组件props的key，value就作为传递给UI组件props的value
    3.mapDispatchToProps用于传递操作状态的方法
*/
// ——把操作状态的方法带过去
function mapDispatchToProps(dispatch){
    return {
        add:data=>dispatch(createIncrementAction(data)),
        sub:data=>dispatch(createDecrementAction(data)),
        addAsync:(data, time)=>dispatch(createIncrementAsyncAction(data,time))
    }
}

// 使用connect()()创建并暴露一个Count的容器组件
// 第一次调用connect的时候可以传入两个参数，这两个参数都必须是函数类型
export default connect(mapStateToProps,mapDispatchToProps)(Count)

