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
            <el-form :model="form" ref="ruleFormRef" :rules="rules" label-width="auto" style="max-width: 600px">
                <el-form-item label="账号" prop="name">
                    <el-input v-model="form.name" style="width:240px" placeholder="请输入您的用户名/账号" :prefix-icon="User"
                    size="large"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password1">
                    <el-input v-model="form.password1" placeholder="请输入您的密码" show-password style="width:240px"
                        :prefix-icon="Lock"
                        size="large"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="password2">
                    <el-input v-model="form.password2" placeholder="请再次输入您的密码" show-password style="width:240px"
                        :prefix-icon="Lock"
                        size="large"></el-input>
                </el-form-item>
                <el-form-item label="手机号" prop="phonenum">
                    <el-input v-model="form.phonenum" style="width:240px" placeholder="请输入您的手机号" :prefix-icon="Phone"
                    onkeyup="this.value=this.value.replace(/\D/g,'')" maxlength="11" size="large"></el-input>
                </el-form-item>
                <el-form-item label="验证码" prop="capthca">
                    <el-input v-model="form.capthca" placeholder="验证码" style="width:140px;" :prefix-icon="CaretRight"
                        maxlength="4" size="large" onkeyup="this.value=this.value.replace(/\D/g,'')"></el-input>
                    <el-button style="transform: translate(0px,0);height: 48px;">获取验证码</el-button>
                </el-form-item>
                <div class="back">
                    <RouterLink :to="{ path: '/login/log' }">返回</RouterLink>
                </div>
                <el-form-item>
                    <el-button @click="submitForm(ruleFormRef)">注册</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script lang='ts' setup name=''>
import { RouterLink } from 'vue-router';
import { reactive,ref } from 'vue';
import { Lock, User, CaretRight, Phone } from '@element-plus/icons-vue'
import type { FormInstance, FormRules } from 'element-plus'

interface formRules{
    name:string
    password1:string
    password2:string
    phonenum:string
    capthca:string
}
// const formSize = ref('default')
const ruleFormRef = ref<FormInstance>()
const form = reactive<formRules>({
    name: '',
    password1: '',
    password2:'',
    phonenum:'',
    capthca: '',
})

const rules = reactive<FormRules<formRules>>({
name:[
    {required:true, message:'请填写此项',trigger:'blur'},
    {pattern:'/^[a-zA-Z0-9][\w\d]*$/', message:'不能以特殊符号作为开头',trigger:'blur'}
],
password1:[
    {required:true, message:'请填写此项',trigger:'blur'},
    {pattern:'/^[a-zA-Z0-9][\w\d]*$/', message:'不能以特殊符号作为开头',trigger:'blur'}
],
password2:[
    {required:true, message:'请填写此项',trigger:'blur'},
    {pattern:'/^[a-zA-Z0-9][\w\d]*$/', message:'不能以特殊符号作为开头',trigger:'blur'}
],
phonenum:[
    {required:true, message:'请填写此项',trigger:'blur'},
    {min:11,message:'请输入11位手机号',trigger:'blur'}
],
capthca:[
    {required:true, message:'请填写此项',trigger:'blur'},
    {min:4,message:'请输入4位验证码',trigger:'blur'}
],
})

const submitForm = (formEl: FormInstance | undefined) => {
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

function onlog() {
    alert('正在登录');
}
</script>

<style scoped>
.questionBox {
    display: flex;
    flex-direction: column;
    /* position: absolute; */
    transform: translate(-770px, 610px);
}

.questionBox a {
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
    transform: translateY(-50px);
}

.back {
    display: flex;
    justify-content: end;
    font-size: 16px;
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

div {
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

.el-button {
    transform: translate(110px, 0);
    margin-top: 0px;
    width: 100px;
    height: 40px;
}

.el-input {
    font-size: 17px;
}

.el-form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.mid {
    margin: 5px;
    height: 25px;
    display: flex;
    font-size: 14px;
    justify-content: space-between;
}

.el-form-item {
    margin: 12px 0;
}
</style>
