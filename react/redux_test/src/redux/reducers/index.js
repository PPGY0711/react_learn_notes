// 该文件用于汇总所有的Reducer，生成一个总的Reducer
// 引入createStore，专门用于创建redux中最为核心的store对象
import {combineReducers} from 'redux'
// 引入为Count组件服务的reducer
import count from './count'
// 引入为Person组件服务的reducer
import persons from './person'

// 汇总所有的reducer变为一个总的Reducer
// 传入combineReducers的对象就是store管理的总对象
export default combineReducers({
    count,
    persons
})