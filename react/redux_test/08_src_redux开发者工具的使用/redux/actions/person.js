import {ADDPERSON} from '../constant'
// 创建增加一个人的动作对象
export const createAddPersonAction = (personObj)=>({type: ADDPERSON, data:personObj})