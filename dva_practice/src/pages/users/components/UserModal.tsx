import React, {useEffect} from 'react'
import { Form, Input, Modal, Button } from 'antd';
const UserModal = (props) => {
    // console.log(props)
    const [form] = Form.useForm();
    const {visible, closeHandler, record} = props
    useEffect(()=>{
        // 中间执行的相当于componentDidMount和componentDidUpdate     
        form.setFieldsValue(record)
        // // 返回的函数相当于componentWillUnmount
        // return ()=>{clearInterval(timer)}
    },[props.visible])
    return (
        <div>
            <Modal forceRender title="Basic Modal" visible={visible} onOk={closeHandler} onCancel={closeHandler}>
            {/* {JSON.stringify(props.record)} */}
            <Form
                form={form}
                name="basic"
                >
                <Form.Item
                    label="Name"
                    name="name"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Email"
                    name="email"
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Create Time"
                    name="create_time"
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Status"
                    name="status"
                >
                    <Input />
                </Form.Item>
                </Form>
            </Modal>
        </div>
    )
}

export default UserModal;