import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import memoryUtils from '../../utils/memoryUtils'


export default class Admin extends Component {
    render() {
        const user = memoryUtils.user
        // 如果内存中没有user，当前没有登录
        if (!user || !user._id) {
            // 自动跳转到登录
            return <Redirect to="/login"></Redirect>
        }
        return (
            <div>
                Admin{user.username}
            </div>
        )
    }
}
