<template>

    <div class="ph-title">手机验证码登录</div>
    <div class="middle">
        <el-form :model="form" ref="ruleFormRef" :rules="rules" label-width="auto" style="max-width: 600px">
            <el-form-item label="手机号" prop="phonenum">
                <el-input v-model="form.phonenum" style="width:240px" placeholder="请输入您的手机号" :prefix-icon="Phone"
                    onkeyup="this.value=this.value.replace(/\D/g,'')" size="large"></el-input>
            </el-form-item>
            <el-form-item label="验证码" prop="capthca">
                <el-input v-model="form.capthca" placeholder="验证码" style="width:125px;" :prefix-icon="CaretRight"
                    maxlength="4" size="large" onkeyup="this.value=this.value.replace(/\D/g,'')"></el-input>
                <el-button style="transform: translate(0px,0);height: 48px;margin-left: 15px;">获取验证码</el-button>
            </el-form-item>
            <div class="back">
                <RouterLink :to="{ path: '/login/log' }">返回</RouterLink>
            </div>
            <el-form-item>
                <el-button @click="submitForm(ruleFormRef)" class="log-button">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script lang='ts' setup name=''>
import { reactive, ref } from 'vue';
import { CaretRight, Phone } from '@element-plus/icons-vue'
import type { FormInstance, FormRules } from 'element-plus'

interface formRules {
    phonenum: string
    capthca: string
}
// const formSize = ref('default')
const ruleFormRef = ref<FormInstance>()
const form = reactive<formRules>({
    phonenum: '',
    capthca: '',
})

const rules = reactive<FormRules<formRules>>({
    phonenum: [
        { required: true, message: '请填写此项', trigger: 'blur' },
        { min: 11, message: '请输入11位手机号', trigger: 'blur' }
    ],
    capthca: [
        { required: true, message: '请填写此项', trigger: 'blur' },
        { min: 4, message: '请输入4位验证码', trigger: 'blur' }
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
.loginBox {
    width: 400px;
    height: 500px;
    /* background-color: aqua; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    left: 500px;
    /* border: 1px solid; */
    border-radius: 12px;
    box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.1);
}

.ph-title {
    position: relative;
    margin-top: 30px;
    color: inherit;
    display: flex;
    height: 60px;
    font-size: 24px;
    font-weight: 700;
}

.up {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 18%;
    width: 100%;
    /* background-color: aquamarine; */
}

.middle {
    height: 82%;
    width: 100%;
    /* background-color: azure; */
}

.back {
    display: flex;
    justify-content: end;
    font-size: 16px;
    margin: 0;
    transform: translateY(5px);
    margin-right: 10px;
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
    /* background-color: beige; */
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

.log-button {
    transform: translate(35px, 0);
    margin-top: 0px;
    width: 250px;
    height: 40px;
    /* background-color: dodgerblue; */
    letter-spacing: 4px;
    /* color: #ffffff; */
    font-size: 14px;
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
    margin: 20px 0;
    transform: translateY(10px);
}
</style>
