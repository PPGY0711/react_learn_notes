/* 自定义Promise函数模块 */
// ES5定义模块方法：IIFE -> 匿名函数自调用（自调用函数表达式 or 函数表达式自调用）
/* 
写法
(function(params){

})() */
(function(window){

    const PENDING = 'pending'
    const RESOLVED = 'resolved'
    const REJECTED = 'rejected'

    // Promise构造函数
    // executor:执行器函数（同步执行）
    function Promise(executor){
        const self = this
        this.status = PENDING     //给promise对象指定status属性，初始值为pending
        this.data = undefined       //给promise对象指定一个用于存储结果数据的属性
        this.callbacks = []         //每个元素的结构{onResolved(){},onRejected(){}}
        
        function resolve(value){
            // 如果当前状态不是pending，直接结束
            // 通过函数名直接调用的时候，this会被解析成window
            // if(this.status !== PENDING){
            //     return
            // }
            if(self.status !== PENDING){
                return
            }

            // 将状态改为resolved
            self.status = RESOLVED
            //保存value数据
            self.data = value
            //如果有待执行callback函数，立即异步执行回调
            if(self.callbacks.length>0){
                //通过setTimeout把所有成功的回调放到回调队列中执行
                setTimeout(() => {
                    self.callbacks.forEach(callbacksObj => {
                        callbacksObj.onResolved(value)
                    });
                },0);
            }
        }

        function reject(reason){
            // 如果当前状态不是pending，直接结束
            if(self.status !== PENDING){
                return
            }

            // 将状态改为resolved
            self.status = REJECTED
            //保存value数据
            self.data = reason
            //如果有待执行callback函数，立即异步执行回调
            if(self.callbacks.length>0){
                //通过setTimeout把所有成功的回调放到回调队列中执行
                setTimeout(() => {
                    self.callbacks.forEach(callbacksObj => {
                        callbacksObj.onRejected(reason)
                    });
                },0);
            }
        }

        try{
            executor(resolve, reject)
        }catch(error){
            //如果执行器抛出异常，promise对象变为失败
            reject(error)
        }
        
    }

    /* 
    Promise原型对象的then()
    指定成功和失败的回调函数
    返回一个新的Promise对象
    返回promise的结果由onResolved/onRejected执行结果决定
    */
    Promise.prototype.then = function(onResolved, onRejected){
        const self = this
        onResolved = typeof onResolved === 'function' ? onResolved : value => value //向后传递成功的value
        // 指定默认的失败的回调（实现错误/异常穿透的关键点）
        onRejected = typeof onRejected === 'function' ? onRejected : reason => {throw reason}

        //返回一个新的promise对象
        return new Promise((resolve, reject)=>{
            // 调用指定的回调函数处理，根据执行结果，改变return的promise状态
            function handle(callback){
                try{
                    /* 
                    1.如果抛出异常，return的promise就会失败，reason就是error
                    2.如果没有抛出异常，回调函数执行返回不是Promise，return的promise成功，value就是返回值
                    3.如果没有抛出异常，回调函数执行返回是Promise，return的promise就是这个promise的结果
                    */
                    const result = callback(self.data)  
                    if(result instanceof Promise){
                        //3.如果没有抛出异常，回调函数执行返回是Promise，return的promise就是这个promise的结果
                        // result.then(
                            // value => {
                            //     resolve(value) //当result成功时，让return的promise也成功，value就是返回的值
                            // },
                            // reason =>{
                            //     reject(reason) //当result失败时，让return的promise也失败，reason就是返回的值
                            // }
                        // )
                        result.then(resolve, reject)
                    }else{
                        //2.如果没有抛出异常，回调函数执行返回不是Promise，return的promise成功，value就是返回值
                        resolve(result)
                    }
                }catch(error){
                    // 1.如果抛出异常，return的promise就会失败，reason就是error
                    reject(error)
                }
            }
            if(self.status === PENDING){
                // 假设当前状态还是pending状态，将回调函数保存到callbacks容器中缓存起来
                self.callbacks.push({
                    // 不仅要执行这两个回调，还要改状态
                    onResolved(value){
                        handle(onResolved)
                    },
                    onRejected(reason){
                        handle(onRejected)
                    },
                })
            }else if(self.status === RESOLVED){
                // 'resolved'
                // 如果当前是resolved状态，异步执行onResolved并改变return的promise状态
                setTimeout(() => {
                    handle(onResolved)
                });
            }else{
                //'rejected'
                // 如果当前是rejected状态，异步执行onRejected并改变return的promise状态
                setTimeout(() => {
                    handle(onRejected)
               });
            }
        })
    }

    /* 
    Promise原型对象的catch()
    指定失败的回调函数
    返回一个新的Promise对象
    */
    Promise.prototype.catch = function(onRejected){
        return this.then(undefined, onRejected)
    }

    /* 
    Promise函数对象的resolve方法
    返回一个指定结果的成功的Promise
    */
    Promise.resolve = function(value){
        //返回一个成功/失败的promise
        return new Promise((resolve, reject)=>{
            // value是promise
            if(value instanceof Promise){
                value.then(resolve, reject)
            }else{
                // value不是promise => promise变为成功，数据是value
                resolve(value)
            }
        })
    }

    /* 
    Promise函数对象的reject方法
    返回一个指定结果的失败的Promise
    */
    Promise.reject = function(reason){
        //返回一个失败的Promise
        return new Promise((resolve, reject)=>{
            reject(reason)
        })
    }

    /* 
    Promise函数对象的all方法
    返回一个promise，只有当所有promise都成功时才成功，否则只要有一个失败的就失败
    */
    Promise.all = function(promises){
            
    }

    /* 
    Promise函数对象的race方法
    返回一个promise，其结果由第一个完成的promise决定
     */
    Promise.race = function(promises){
        
    }
    window.Promise = Promise
})(window)