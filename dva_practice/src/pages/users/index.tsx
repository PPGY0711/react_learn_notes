import React, {useState} from 'react'
import { Table, Space } from 'antd';
import { connect } from 'dva'
import UserModal from './components/UserModal';
function index(users) {

    const [modalVisible, setModalVisible] = useState(false); //在useState里面传变量的初始值
    // const [state, setstate] = useState(initialState)
    const [record, setRecord] = useState(undefined)
    const columns = [
        {
          title: 'ID',
          dataIndex: 'id',
          key: 'id',
        },
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
            title: 'Create Time',
            dataIndex: 'create_time',
            key: 'create_time',
          },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <Space size="middle">
                {/* function(text, record, index) {}
                 render生成复杂数据的渲染函数，参数分别为当前行的值，当前行数据，行索引 */}
                {/* {console.log("text",text)}
                {console.log("record",record)} */}
                <a onClick={()=>{editHandler(record)}}>Edit</a>
                <a>Delete</a>
                </Space>
            ),
        },
    ];
    
    const editHandler = (record)=>{
        setModalVisible(true)
        setRecord(record)
    }
    const closeHandler = ()=>{
        setModalVisible(false)
    }

    const {data} = users.users === undefined ? [] : users.users
    // console.log("index users", users)
    // console.log("index data", data)
    return (
        <div className="list-table">
            <Table columns={columns} dataSource={data} rowKey="id"/>
            <UserModal visible={modalVisible} closeHandler={closeHandler} record={record}/>
        </div>
    )
}

const mapStateToProps = ({users})=>{
    console.log("mapStateToProps", users.data) //还有loading, router属性
    return {
        users: users.data
    };
};

export default connect(mapStateToProps)(index);