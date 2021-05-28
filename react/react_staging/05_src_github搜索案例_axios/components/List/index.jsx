import React, { Component } from 'react'
import Item from '../Item'
export default class List extends Component {
    render() {
        const {users, isFirst, isLoading, err} = this.props
        return (
        <div>
        {
            isFirst ? <h2>{'Enter name to Search'}</h2> :
            isLoading ? <h2>{'Loading'}</h2> :
            err !== '' ? <h2 className="text-danger">{err}</h2> :
            users.map((item, index)=>{
                return <Item key={item.id} avatar_url={item.avatar_url} html_url={item.html_url} login={item.login}/>
            })
        }
        </div>
        )
    }
}
