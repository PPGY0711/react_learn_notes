import {Reducer, Effect, Subscription} from 'umi'
import {getRemoteList} from './service'

interface UserModelType {
    namespace: 'users';
    state: {};
    reducers: {
        getList: Reducer
    },
    effects:{
        getRemote: Effect
    },
    subscriptions:{
        setup: Subscription
    }
}

const UserModel:UserModelType = {
    namespace: 'users',
    //写仓库的初始值
    state: {}, 
    //其中都是一个个函数，格式:function_name(){}
    reducers:{ 
        getList(state, {payload}){
            // return newState;
            // action= {type, payload}
            console.log("getList", payload)
            return payload
        },
    },
    //其中都是一个个异步函数，函数名之前加上*，变成generator函数，格式:*function_name(){}
    // 由于是异步函数，返回或者做什么之前都要等一会儿，要用yield关键字
    effects:{  
        // *function_name(action, effects){
        //     // yield put()
        // }
        // effects={put,call}
        
        *getRemote(action, {put, call}){
            const data = yield call(getRemoteList);
            console.log("getRemote", data)
            yield put({
                type:'getList',
                payload: {data}
            });
        }
    },
    //其中都是一个个函数，格式:function_name(){}
    subscriptions:{
        // function_name({ dispatch, history }, done){
            // dispatch(action)
            // action=object
            // {
            //     type:"getList",
            //     payload:{} //要传的数据全部写在payload里面
            // }
        // }
        setup({dispatch, history}){
            return history.listen(({pathname})=>{
                if(pathname === '/users'){
                    dispatch({
                        type:'getRemote',
                        payload:{}
                    })
                }
            })
        }
    }
}

export default UserModel