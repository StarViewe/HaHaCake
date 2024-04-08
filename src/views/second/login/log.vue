<template>
    <form>
        <div>
            <span></span>
            <input 
                v-model="username"
                type="text" 
                placeholder="请输入您的用户名/账号" 
                onkeyup="this.value=this.value.replace(/[^\w_]/g,'');"
                @input="namecheck"
                required>
        </div>
        <p id="p1">账号不能使用特殊符号作为开头</p>
        <div>
            <span></span>
            <input 
                @input="wordcheck"
                v-model="password"
                type="text" 
                placeholder="请输入您的密码" 
                onkeyup="this.value=this.value.replace(/[^\w_]/g,'');"
                required>
        </div>
        <p id="p2">密码不能使用特殊符号作为开头</p>
        <div class="captcha">
            <span></span>
            <input 
                id="captcha" 
                type="text" 
                placeholder="验证码" 
                onkeyup="this.value=this.value.replace(/\D/g,'')"
                pattern="[0-9]{6}"
                required
                title="请输入六位数字。">
            <span id="code"></span>
            <button>刷新验证码</button>
        </div>
        <div class="mid">
            <RouterLink :to="{path:'/phoneLog'}">手机验证码登录</RouterLink>
            <RouterLink :to="{path:'/Forget'}">忘记密码？</RouterLink>
        </div>
        <button>登录</button>
    </form>
</template>

<script lang='ts' setup name=''>
import { RouterLink } from 'vue-router';
import { reactive, ref } from 'vue';
let username = ref('')
let password = ref('')
let p1 = document.getElementById('p1')
function namecheck() {
    let firstcode = username.value.charAt(0).charCodeAt();
    if (!((firstcode <= 57 && firstcode >= 48) || (firstcode >= 97 && firstcode <= 122) || (firstcode <= 90 && firstcode >= 65))) {
        p1?.setAttribute('style','opacity: 1;')
        console.log('错误');
    }
    else{
        console.log("正确");
        p1?.setAttribute('style','opacity: 0;')
    }
}
function wordcheck(){
    let firstcode = password.value.charAt(0).charCodeAt();
    if (!((firstcode <= 57 && firstcode >= 48) || (firstcode >= 97 && firstcode <= 122) || (firstcode <= 90 && firstcode >= 65))) {
        console.log("输入不规范");
    }
}
</script>

<style scoped>
p{
    margin: 0;
    color: red;
    transform: translate(-25px,0);
    font-size: 12px;
    /* opacity: 0; */
}

#p1{
    opacity: 0;
}

#p2{
    opacity: 0;
}

.captcha{
    display: flex;
    justify-content: center;
    align-items: center;
}

.captcha span {
    width: 15%;
}

.captcha input {
    width: 30%;
}

.captcha button {
    width: 30%;
    padding: 0;
    height: 100%;
    border-radius: 0;
}

#code{
    width: 25%;
}

form {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

form div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 80%;
    background-color: beige;
    height: 40px;
    margin: 15px 0;
}

form div span {
    width: 15%;
    height: 40px;
    background-color: aqua;
}

input {
    width: 85%;
    height: 40px;
}

.mid{
    height: 25px;
    display: flex;
    justify-content: space-between;
}
</style>