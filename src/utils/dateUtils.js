export function formateDate(time){
    if(!time) return ''
    let date = new Date(time)
    
    let hour = date.getHours()
    hour = hour < 10? "0" + hour: hour

    let minute = date.getMinutes()
    minute = minute < 10? "0" + minute:minute

    let second = date.getSeconds()
    second = second < 10? "0" + second:second

    return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + hour + ":" + minute + ":" + second
}