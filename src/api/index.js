import ajax from './ajax'

/* 
    包含应用中所有接口的请求函数
    每个函数的返回值都是promise
*/

/* export function reqLogin(username, password){
    ajax('./login', {username, password}, "POST")
} */

// 登录
export const reqLogin = (username, password) => ajax('/login', { username, password }, "POST")
// 添加用户
export const reqAddUser = (user) => ajax('/manage/user/add', user, "POST")