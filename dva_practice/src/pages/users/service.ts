import { request } from 'umi';

export const getRemoteList = async (params) => {
    // console.log("getRemoteList", params)
    // 这里一定要加这个params接收参数，不然会报错，显示getRemoteList是未定义的函数
    return request('/api/users', {
        method: 'get',
        // params: { id: 1 },
      })
        .then(function(response) {
          console.log(response);
          return response;
        })
        .catch(function(error) {
          console.log(error);
    });
    // const data = [
    //     {
    //       key: '1',
    //       name: 'John Brown',
    //       age: 32,
    //       address: 'New York No. 1 Lake Park',
    //       tags: ['nice', 'developer'],
    //     },
    //     {
    //       key: '2',
    //       name: 'Jim Green',
    //       age: 42,
    //       address: 'London No. 1 Lake Park',
    //       tags: ['loser'],
    //     },
    //     {
    //       key: '3',
    //       name: 'Joe Black',
    //       age: 32,
    //       address: 'Sidney No. 1 Lake Park',
    //       tags: ['cool', 'teacher'],
    //     },
    // ];
}