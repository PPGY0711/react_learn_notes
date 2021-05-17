---
typora-copy-images-to:media
---
## 准备
### 1.1. 区别实例对象与函数对象
1. 实例对象：new函数产生的对象，称为实例对象，简称为对象
2. 函数对象：将函数作为对象使用时，简称为函数对象
```javascript
    function Fn(){

    }
    const fn = new Fn()
    console.log(Fn.prototype)
    Fn.bind({})
    $('test')
    $.get('/test')
```
### 1.2. 二种类型的回调函数
#### 1.2.1. 同步回调
1. 理解：立即执行，完全执行完了才结束，不会放入回调队列中
2. 例子：数组遍历相关的回调函数/Promise的executor函数
#### 1.2.2. 异步回调
1. 理解：不会立即执行，放入回调队列中将来执行
2. 定时器回调/ajax回调/Promise的成功|失败的回调

### 1.3. JS的Error处理
#### 1.3.1. 错误的类型
1. Error：所有错误的父类型
2. ReferenceError：引用的变量不存在
3. TypeError：数据类型不正确的错误
4. RangeError：数据值不在其所允许的范围内
5. SyntaxError：语法错误
#### 1.3.2. 错误处理
1. 捕获错误：try...catch
2. 抛出错误：throw error
#### 1.3.3. 错误对象
1. message属性：错误相关信息
2. stack属性：函数调用栈记录信息

## Promise的理解和使用
### 2.1. Promise是什么？
#### 2.1.1. 理解
1. 抽象表达：Promise是JS中进行一步编程的新的解决方案（旧的是谁？）
2. 具体表达：
   1. 从语法上来说：Promise是一个构造函数
   2. 从功能上来说：Promise对象用来封装一个异步操作并可以获取其结果
#### 2.1.2 Promise的状态改变
0. 有3个状态:pending（初始）、resolved、rejected
1. pending变为resolved
2. pending变为rejected
说明：只有这2中，且一个promise对象只能改变一次，无论变为成功还是失败，都会有一个结果数据，成功的数据一般称为value，失败的数据一般称为reason
#### 2.1.3 Promise基本流程
![](media/promise working schedule.jpg)

### 2.2. 为什么要使用Promise？
#### 2.2.1 指定回调函数的方式更加灵活
1. 旧的：必须在启动异步任务前指定
2. promise：启动异步任务=>返回promise对象=>给promise对象绑定回调函数（甚至可以在异步任务结束之后指定/多个）
#### 2.2.2 支持链式调用，可以解决回调地狱问题
1. 什么是回调地狱？回调函数嵌套调用，外部回调函数异步执行的结果是内部嵌套的回调函数的条件
2. 回调地狱的缺点？不便于阅读/不便于异常处理
3. 解决方案？promise链式调用
4. 终极解决方案？async/await