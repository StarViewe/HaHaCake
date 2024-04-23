<template>
  <div class="for-title">重置密码</div>
  <el-form
    :model="form"
    ref="ruleFormRef"
    :rules="rules"
    label-width="auto"
    style="max-width: 600px"
  >
    <el-form-item label="账号" prop="name" class="reg-form">
      <el-input
        v-model="form.name"
        style="width: 240px"
        placeholder="请输入您的用户名/账号"
        :prefix-icon="User"
        size="large"
      ></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password1" class="reg-form">
      <el-input
        v-model="form.password1"
        placeholder="请输入您的密码"
        show-password
        style="width: 240px"
        :prefix-icon="Lock"
        size="large"
      ></el-input>
    </el-form-item>
    <el-form-item label="确认密码" prop="password2" class="reg-form">
      <el-input
        v-model="form.password2"
        placeholder="请再次输入您的密码"
        show-password
        style="width: 240px"
        :prefix-icon="Lock"
        size="large"
      ></el-input>
    </el-form-item>
    <el-form-item label="手机号" prop="phonenum" class="reg-form">
      <el-input
        v-model="form.phonenum"
        style="width: 240px"
        placeholder="请输入您的手机号"
        :prefix-icon="Phone"
        onkeyup="this.value=this.value.replace(/\D/g,'')"
        maxlength="11"
        size="large"
      ></el-input>
    </el-form-item>
    <el-form-item label="验证码" prop="capthca" class="reg-form">
      <el-input
        v-model="form.capthca"
        placeholder="验证码"
        style="width: 125px"
        :prefix-icon="CaretRight"
        maxlength="4"
        size="large"
        onkeyup="this.value=this.value.replace(/\D/g,'')"
      ></el-input>
      <el-button
        style="transform: translate(0px, 0); height: 48px; margin-left: 15px"
      >
        获取验证码
      </el-button>
    </el-form-item>
    <div class="back">
      <RouterLink :to="{ path: '/login/log' }">返回</RouterLink>
    </div>
    <el-form-item>
      <el-button @click="submitForm(ruleFormRef)" class="for-button">
        重置密码
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup name="">
import { RouterLink } from 'vue-router'
import { reactive, ref } from 'vue'
import { Lock, User, CaretRight, Phone } from '@element-plus/icons-vue'
import type { FormInstance, FormRules } from 'element-plus'

interface formRules {
  name: string
  password1: string
  password2: string
  phonenum: string
  capthca: string
}
// const formSize = ref('default')
const ruleFormRef = ref<FormInstance>()
const form = reactive<formRules>({
  name: '',
  password1: '',
  password2: '',
  phonenum: '',
  capthca: '',
})
const validateConfirmPassword = (rule: any, value: any, callback: any) => {
  if (value !== form.password1) {
    callback(new Error('两次输入的密码不一致'))
  } else {
    callback()
  }
}
const rules = reactive<FormRules<formRules>>({
  name: [
    { required: true, message: '请填写此项', trigger: 'blur' },
    {
      pattern: '^[0-9a-zA-Z]',
      message: '不能以特殊符号作为开头',
      trigger: 'blur',
    },
    {
      pattern: '^[0-9a-zA-Z][0-9a-zA-Z_]*$',
      message: '句中不能包含特殊符号',
      trigger: 'blur',
    },
  ],
  password1: [
    { required: true, message: '请填写此项', trigger: 'blur' },
    {
      pattern: '^[0-9a-zA-Z]',
      message: '不能以特殊符号作为开头',
      trigger: 'blur',
    },
    { min: 6, message: '密码长度不能少于六位', trigger: 'blur' },
    {
      pattern: '^[0-9a-zA-Z][0-9a-zA-Z_]*$',
      message: '句中不能包含特殊符号',
      trigger: 'blur',
    },
  ],
  password2: [
    { required: true, message: '请填写此项', trigger: 'blur' },
    {
      pattern: '^[0-9a-zA-Z]',
      message: '不能以特殊符号作为开头',
      trigger: 'blur',
    },
    {
      pattern: '^[0-9a-zA-Z][0-9a-zA-Z_]*$',
      message: '句中不能包含特殊符号',
      trigger: 'blur',
    },
    { validator: validateConfirmPassword, trigger: 'blur' },
  ],
  phonenum: [
    { required: true, message: '请填写此项', trigger: 'blur' },
    { min: 11, message: '请输入11位手机号', trigger: 'blur' },
  ],
  capthca: [
    { required: true, message: '请填写此项', trigger: 'blur' },
    { min: 4, message: '请输入4位验证码', trigger: 'blur' },
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
  alert('正在登录')
}
</script>

<style scoped>
.questionBox {
  display: flex;
  flex-direction: column;
  /* position: absolute; */
  transform: translate(-770px, 610px);
}

body .reg-form {
  margin: 10px 0;
}

.questionBox a {
  margin: 5px;
}

.loginBox {
  width: 400px;
  height: 600px;
  /* background-color: aqua; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  left: 500px;
  top: -70px;
  /* border: 1px solid; */
  border-radius: 12px;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.1);
}

.for-title {
  position: relative;
  color: inherit;
  display: flex;
  height: 35px;
  font-size: 24px;
  font-weight: 700;
  margin-top: 20px;
  margin-bottom: 15px;
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
  /* background-color: aquamarine; */
}

.middle {
  height: 87%;
  width: 100%;
  /* background-color: azure; */
}

div {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

::v-deep .el-form-item__label {
  color: inherit;
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
  outline: none;
}

.for-button {
  transform: translate(35px, 0);
  margin-top: 0px;
  width: 250px;
  height: 40px;

  font-size: 14px;
  /* margin-top: 65px; */
  /* width: 250px; */
  margin-bottom: 10px;
  outline: none;
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
