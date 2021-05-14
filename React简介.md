---
typora-copy-images-to:media
---

## React简介

### 1.是什么？

React是用于构建用户界面的JS库

1. 发送请求获取数据
2. 处理数据（过滤、整理格式等）
3. 操作DOM呈现页面

React是一个将 数据渲染为HTML视图的开源JS库

### 2.谁开发的？

由Facebook开发，且开源

### 3.为什么要学？

1. 原生JS操作DOM繁琐，效率低（**DOM-API操作UI**）

   ```javascript
   document.getElementById('app')
   document.querySelector('#app')
   document.getElemetsByTagName('span')
   ```

2. 使用JS直接操作DOM，浏览器会进行大量的**重绘重排**

3. 原生JS没有组件化编码方案，代码复用率低

### 4.React的特点

1. 采用**组件化**模式、**声明式编码**，提高开发效率及组件复用率

2. 在React Native中可以使用React语法进行**移动端开发**（用JS写Andriod，iOS应用）
3. 使用**虚拟DOM**+优秀的**Diffing算法**，尽量减少与真实DOM的交互
   1. 新增加数据的时候，比较DOM有没有改变，没有改变则不会生产真实DOM

5. ### 学习React之前要掌握的JS基础知识

   1. 判断this指向
   2. class（类）
   3. ES6语法规范
   4. npm包管理器
   5. 原型、原型链
   6. 数组常用方法
   7. 模块化