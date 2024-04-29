import { defineStore } from "pinia";
let useUserStore = defineStore("users", {
    state: () => {
        return {
            token: localStorage.getItem("TOKEN");
        }
    },
    actions: {
        async userLogin(data: loginForm){
            let result = await reqLogin(data);
            if(result.code == 200){
                //获取token
                this.token = result.data.token;
                //本地化存储token使之持久化存储
                localStorage.setItem("TOKEN",result.data.token);
                //确保返回一个成功的promise
                return 'ok';
            }else{
                return Promise.reject(new Error(result.data.message))
            }
        }
    },
    getters: {

    },
})
export default useUserStore;