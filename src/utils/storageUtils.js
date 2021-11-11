import store from 'store'    
const USER_KEY = 'user_key'

export default {
    // 保存
    saveUser(user){
        store.set(USER_KEY, user)
        // localStorage.setItem(USER_KEY,JSON.stringify(user))
    },

    // 读取user
    getUser() {
        return store.get(USER_KEY) || {}
        // return JSON.parse(localStorage.getItem(USER_KEY) || '{}')
    },

    // 删除user
    removeUser(){
        store.remove(USER_KEY)
    }
}

