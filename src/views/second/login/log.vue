<!-- <template>
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
</style> -->

<template>
<div>
   <el-form ref="ruleFormRef" :model="form" :rules="rules" label-width="auto" style="max-width: 600px">
    <el-form-item label="账号" prop="name">
        <el-input v-model="form.name" 
        style="width:240px" 
        placeholder="请输入您的用户名/账号"
        :prefix-icon="User"
        size="large"
        @input = "oncheck"
        ></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
        <el-input 
        v-model="form.password" 
        placeholder="请输入您的密码"
        show-password
        style="width:240px"
        :prefix-icon="Lock"
        size="large"
        ></el-input>
    </el-form-item>
    <el-form-item label="验证码" prop="capthca">
        <el-input 
        v-model="form.capthca" 
        placeholder="验证码"
        style="width:140px;"
        :prefix-icon="CaretRight"
        onkeyup="this.value=this.value.replace(/\D/g,'')"
        maxlength="4"
        size="large"
        ></el-input>
        <div class="capthca"></div>
    </el-form-item>
    <div class="mid">
            <RouterLink :to="{path:'/phoneLog'}">手机验证码登录</RouterLink>
            <RouterLink :to="{path:'/Forget'}">忘记密码？</RouterLink>
    </div>
    <el-form-item>
        <el-button @click="submitForm(ruleFormRef)">登录</el-button>
    </el-form-item>
   </el-form>
</div>
</template>

<script lang='ts' setup name=''>
import { reactive,ref } from 'vue';
import { Lock,User,CaretRight } from '@element-plus/icons-vue'
import { RouterLink } from 'vue-router';
import type { FormInstance, FormRules } from 'element-plus'

interface formRules{
    name:string
    password:string
    capthca:string
}
// const formSize = ref('default')
const ruleFormRef = ref<FormInstance>()//获取dom元素
const form = reactive<formRules>({
    name: '',
    password:'',
    capthca: '',
})

const rules = reactive<FormRules<formRules>>({
name:[
    {required:true, message:'请填写此项',trigger:'blur'},
    {pattern:'/^[a-zA-Z0-9][\w\d]*$/', message:'不能以特殊符号作为开头',trigger:'blur'}
],
password:[
    {required:true, message:'请填写此项',trigger:'blur'},
    {pattern:'/^[a-zA-Z0-9][\w\d]*$/', message:'不能以特殊符号作为开头',trigger:'blur'}
],
capthca:[
    {required:true, message:'请填写此项',trigger:'blur'},
    {min:4,message:'请输入4位验证码',trigger:'blur'}
],
})

const submitForm = (formEl: FormInstance | undefined) => { //formEl 形参
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!')
      return false
    }
  })
}

function oncheck(){
    console.log(form.name[0]);
    // form.name[0]=form.name[0].replace(/[\W]/g,'')
}
</script>

<style scoped>
     div{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    ::v-deep .el-form-item__label {
        /* color: rgb(0, 0, 0); */
        font-size: 17px;
    }

    ::v-deep .el-input__inner {
        height: 45px;
    }

    .capthca{
        width: 100px;
        height: 45px;
        background-color: antiquewhite;
    }

    .el-button{
        transform: translate(110px,0);
        margin-top: 0px;
        width: 100px;
        height: 40px;
    }

    .el-input{
        font-size: 17px;
    }

   .el-form {
       display: flex;
       justify-content: center;
       align-items: center;
       flex-direction: column;
   }

   .mid{
        margin: 5px;
        height: 25px;
        display: flex;
        font-size: 14px;
        justify-content: space-between;
    }

   .el-form-item{
        margin: 12px 0;
   }

</style>

