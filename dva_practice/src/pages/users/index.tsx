import React from 'react'
import { Table, Tag, Space } from 'antd';
import { connect } from 'dva'
function index(users) {
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
                <a>Edit</a>
                <a>Delete</a>
                </Space>
            ),
        },
    ];
    
    
    const {data} = users.users === undefined ? [] : users.users
    // console.log("index users", users)
    // console.log("index data", data)
    return (
        <div className="list-table">
            <Table columns={columns} dataSource={data} />
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