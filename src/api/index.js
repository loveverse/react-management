import ajax from './ajax'
import jsonp from 'jsonp'

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


/* 
    jsonp请求的接口函数
*/

export const reqWeather = (city) => {
    const url = `https://api.66mz8.com/api/weather.php?location=${city}`
    
    jsonp(url, {}, (err, data) => {
        console.log('jsonp',err, data);
    })
}

reqWeather('武汉')