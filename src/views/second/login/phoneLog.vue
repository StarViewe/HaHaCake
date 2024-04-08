<template>
    <div class="loginBox">
        <div class="up">
            <h2>手机验证码登录</h2>
        </div>
        <div class="middle">
            <form>
                <div>
                    <span></span>
                    <input 
                        type="text" 
                        placeholder="请输入您的手机号码" 
                        pattern="[0-9]{11}"
                        onkeyup="this.value=this.value.replace(/\D/g,'')" 
                        required
                        title="请输入十一位手机号。">
                </div>
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
                    <button>获取验证码</button>
                </div>
                <div class="back">
                    <RouterLink :to="{ path: '/login/log' }">返回</RouterLink>
                </div>
                <button>登录</button>
            </form>
        </div>
    </div>
</template>
<style scoped>
.loginBox {
    width: 400px;
    height: 400px;
    background-color: aqua;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.back{
    display: flex;
    justify-content: end;
    font-size: 16px;
}

.up {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 18%;
    width: 100%;
    background-color: aquamarine;
}

.middle {
    height: 82%;
    width: 100%;
    background-color: azure;
}

.captcha {
    display: flex;
    justify-content: center;
    align-items: center;
}

.captcha span {
    width: 15%;
}

.captcha input {
    width: 55%;
}

.captcha button {
    width: 30%;
    padding: 0;
    height: 100%;
    border-radius: 0;
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
 
</style>
 <script lang='ts' setup name=''>
    import { RouterLink,RouterView } from 'vue-router';
 </script>
 