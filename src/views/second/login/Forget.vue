<template>
    <div class="questionBox">
        <a href="">Bug反馈</a>
        <a href="">改进意见</a>
        <a href="">人工客服</a>
    </div>
    <div class="loginBox">
        <div class="up">
            <h2>重置密码</h2>
        </div>
        <div class="middle">
            <form>
                <div>
                    <span></span>
                    <input 
                        type="text" 
                        placeholder="请输入您想申诉的用户名/账号" 
                        onkeyup="this.value=this.value.replace(/[^\w_]/g,'');"
                        required>
                </div>
                <div>
                    <span></span>
                    <input 
                        type="text" 
                        placeholder="请输入新密码" 
                        onkeyup="this.value=this.value.replace(/[^\w_]/g,'');"
                        required>
                </div>
                <div>
                    <span></span>
                    <input 
                        type="text" 
                        placeholder="请再次确认新密码" 
                        onkeyup="this.value=this.value.replace(/[^\w_]/g,'');"
                        required>
                </div>
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
                    <RouterLink :to="{path:'/_404'}" id="a">遇到困难？请联系我</RouterLink>
                    <RouterLink :to="{path:'/login/log'}">返回</RouterLink>
                </div>
                <button>重置密码</button>
            </form>
        </div>
    </div>
</template>
<style scoped>
.questionBox{
    display: flex;
    flex-direction: column;
    position: absolute;
    transform: translate(930px,560px);
}

.questionBox a{
    margin: 5px;
}

.loginBox {
    position: relative;
    width: 400px;
    height: 600px;
    background-color: aqua;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.back{
    display: flex;
    justify-content: space-between;
    font-size: 16px;
}

#a{
    font-size: 12px;
}

.up {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 13%;
    width: 100%;
    background-color: aquamarine;
}

.middle {
    height: 87%;
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
 