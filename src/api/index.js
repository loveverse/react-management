import ajax from './ajax'
// import jsonp from 'jsonp'

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
// 天气
// 接口有问题
export const reqWeather = (city) => ajax('https://api.66mz8.com/api/weather.php', {location: city})
// reqWeather("武汉").then(value => console.log(value));


/* 
    jsonp请求的接口函数
*/
// 网上免费api接口post请求接口有问题
// ------------------------------后面解决模块化问题------------------------------
// export const reqWeather = (city) => axios(`https://api.66mz8.com/api/weather.php?location=${city}`).then(value => {
    
// }).catch(error => {

// })
// reqWeather("北京")


/* 
    - jsonp只能解决get跨域问题
    - 不是ajax请求，是一般的get请求
    - 暂未解决
    jsonp引发Cross-Origin Read Blocking (CORB) blocked cross-origin response https://api.66mz8.com/api/weather.php?location%E6%AD%A6%E6%B1%89&[object%20Object]=__jp0 with MIME type application/json. See https://www.chromestatus.com/feature/5629709824032768 
*/
// export const reqWeather = (city) => {
//     const url = `https://api.66mz8.com/api/weather.php?location${city}`
//     jsonp(url,{
//         param: {
//             "content-type" : "application/json"
//         }
//     },(err, data) => {
//         console.log('jsonp', err, data.wea_img);
//     })
// }
// reqWeather("武汉")