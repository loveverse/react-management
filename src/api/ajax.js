import axios from 'axios'
import {message} from 'antd'

export default function ajax(url, data = {}, type = "GET") {
    let promise
    return new Promise((resolve, reject) => {
        // 执行异步ajax请求
        if (type === "GET") {
            promise = axios.get(url, {
                params: data   // 指定请求参数
            })
        } else {  // 发POST请求
            promise = axios.post(url, data)
        }
        // 成功了，调用resolve
        promise.then(response => {
            resolve(response.data)
            // 失败了，调用reject
        }).catch(error => {
            message.error("请求出错了：",error.message)
        })
    })

    
}

// 请求登录接口
ajax('/login', { username: "Tom", password: "123456" }, "POST").then()
// 添加用户
ajax("/manage/user/add", { username: "Tom", password: "123456", phone: "1234135213" }, "POST").then()