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
// 天气/*  */
// 接口post请求有问题
export const reqWeather = (city) => ajax('https://api.66mz8.com/api/weather.php', { location: city })
// reqWeather("武汉").then(value => console.log(value));


// 获取一级/二级分类的列表
// api挂掉了
export const reqCategorys = (parentId) => ajax('/manage/category/list', { parentId })
// 添加分类
export const reqAddCategory = (parentId, categoryName) => ajax('/manage/category/add', { parentId, categoryName }, "POST")

// 更新分类
export const reqUpdateCategory = ({ categoryId, categoryName }) => ajax('/manage/category/update', { categoryId, categoryName }, "POST")

/*
    - jsonp只能解决get跨域问题
    - 不是ajax请求，是一般的get请求
    基本原理：
        浏览器端：
            动态生成script来请求后台接口(src就是接口的url)
            定义好用于接收响应数据的函数(fn)，并将函数名通过请求参数提交给后台(callback=fn)
        服务器端：
            接收到请求处理产生结果数据后，返回一个函数调用的js代码，并将结果数据作为实参传入函数调用
        浏览器端：
            收到响应自动执行函数调用的js代码，也就执行了提前定义好的回调函数，并得到了需要的结果数据

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