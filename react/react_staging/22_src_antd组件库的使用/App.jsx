import React, { Component } from 'react'
import {Button, DatePicker} from 'antd'
// 有了config-override.js的配置，就可以按需引入antd的css
// import 'antd/dist/antd.css'
import { WechatOutlined ,WeiboOutlined, SearchOutlined } from "@ant-design/icons";
export default class App extends Component {
    render() {
        return (
            <div>
                App.....

                <button>点我</button><br/>
                <Button type="primary">Primary Button</Button><br/>
                <Button>Defautlt Button</Button><br/>
                <Button type="link">Link Button</Button><br/>
                <Button type="dashed">Dashed Button</Button><br/>
                <Button type="ghost">Ghost Button</Button><br/>
                <Button type="text">Text Button</Button><br/>   
                <Button type="primary" icon={<SearchOutlined />}>
                Search
                </Button>
                <WechatOutlined /><br/> 
                <WeiboOutlined />
                <DatePicker/>
            </div>
        )
    }
}
