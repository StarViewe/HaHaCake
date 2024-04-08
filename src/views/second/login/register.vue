<template>
    <form>
        <div>
            <span></span>
            <input 
                type="text" 
                placeholder="请输入您的用户名(将作为账号使用)" 
                onkeyup="this.value=this.value.replace(/[^\w_]/g,'');"
                required>
        </div>
        <div>
            <span></span>
            <input 
                type="text" 
                placeholder="请输入您的密码" 
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
        <button>注册</button>
    </form>
</template>

<script lang='ts' setup name=''>

</script>

<style scoped>
.captcha{
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