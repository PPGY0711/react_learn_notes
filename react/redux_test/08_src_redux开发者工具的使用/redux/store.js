/* 
    该文件专门用于暴露一个store对象，整个应用只有一个store对象
*/
// 引入createStore，专门用于创建redux中最为核心的store对象
import {createStore, applyMiddleware, combineReducers} from 'redux'
// 引入为Count组件服务的reducer
import countReducer from './reducers/count'
// 引入为Person组件服务的reducer
import personReducer from './reducers/person'
// 引入redux-thunk，用于支持异步任务
import thunk from 'redux-thunk'
// 引入redux-devtools-extension
import { composeWithDevTools } from "redux-devtools-extension";
// 汇总所有的reducer变为一个总的Reducer
// 传入combineReducers的对象就是store管理的总对象
const allReducer = combineReducers({
    he: countReducer,
    rens: personReducer
})
// 暴露store
export default createStore(allReducer, composeWithDevTools(applyMiddleware(thunk)))
// export default createStore(countReducer)

