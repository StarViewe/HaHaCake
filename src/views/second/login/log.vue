<template>
    <div class="login-title" :style="{ color: loginColor }">
        账号登录
    </div>
    <div>
        <el-form ref="ruleFormRef" :model="form" :rules="rules" label-width="auto" style="max-width: 600px">
            <el-form-item label="账号" prop="name">
                <el-input v-model="form.name" style="width:240px" placeholder="请输入您的用户名/账号" :prefix-icon="User"
                    size="large" @input="oncheck"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input v-model="form.password" placeholder="请输入您的密码" show-password style="width:240px"
                    :prefix-icon="Lock" size="large"></el-input>
            </el-form-item>
            <el-form-item label="验证码" prop="capthca">
                <el-input v-model="form.capthca" placeholder="验证码" style="width:125px;" :prefix-icon="CaretRight"
                    onkeyup="this.value=this.value.replace(/\D/g,'')" maxlength="4" size="large"></el-input>
                <div class="capthca" style="margin-left: 15px;"></div>
            </el-form-item>
            <div class="mid">
                <RouterLink :to="{ path: '/phoneLog' }">手机验证码登录</RouterLink>
                <RouterLink :to="{ path: '/Forget' }">忘记密码？</RouterLink>
            </div>
            <el-form-item>
                <el-button @click="submitForm(ruleFormRef)">登录</el-button>
            </el-form-item>
            <div class="bottom">
                <RouterLink :to="{ path: '/login/register' }">点击注册新账号</RouterLink>
            </div>
        </el-form>
    </div>
</template>

<script lang='ts' setup name=''>
import { reactive, ref, onMounted } from 'vue';
import { Lock, User, CaretRight } from '@element-plus/icons-vue'
import { RouterLink } from 'vue-router';
import type { FormInstance, FormRules } from 'element-plus'
const loginColor = ref('')

interface formRules {
    name: string
    password: string
    capthca: string
}
// const formSize = ref('default')
const ruleFormRef = ref<FormInstance>()//获取dom元素

// import { RouterLink, RouterView } from 'vue-router';
// import { reactive, ref, onMounted } from 'vue';
const backgroundImg = ref('');
const textColor = ref('');
// import { toggleTheme } from '../../first/login.vue';
backgroundImg.value = localStorage.getItem('backgroundImg') || '/public/images/back-image1.jpg'; // 从本地存储中获取背景图片

onMounted(() => {
    // 设置背景图片样式
    applyBackgroundImage();
    // 设置字体颜色
    applyTextColor();
});

function toggleTheme() {
    backgroundImg.value = backgroundImg.value === '/public/images/back-image1.jpg'
        ? '/public/images/back-image2.jpg'
        : '/public/images/back-image1.jpg';


    localStorage.setItem('backgroundImg', backgroundImg.value); // 保存背景图片到本地存储


    applyBackgroundImage();// 设置背景图片样式
    applyTextColor()
}

function applyBackgroundImage() {
    document.body.style.backgroundImage = `url(${backgroundImg.value})`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-repeat';
}

function applyTextColor() {
    textColor.value = backgroundImg.value === '/public/images/back-image1.jpg' ? 'black' : 'white';
}

function applyLoginColor() {
    loginColor.value = backgroundImg.value === '/public/images/back-image1.jpg' ? 'black' : 'white';
}
// applyLoginColor()
const form = reactive<formRules>({
    name: '',
    password: '',
    capthca: '',
})

const rules = reactive<FormRules<formRules>>({
    name: [
        { required: true, message: '请填写此项', trigger: 'blur' },
        { pattern: '^[0-9a-zA-Z]', message: '不能以特殊符号作为开头', trigger: 'blur' },
        { pattern: '^[0-9a-zA-Z][0-9a-zA-Z_]*$', message: '句中不能包含特殊符号', trigger: 'blur' }

    ],
    password: [
        { required: true, message: '请填写此项', trigger: 'blur' },
        { pattern: '^[0-9a-zA-Z]', message: '不能以特殊符号作为开头', trigger: 'blur' },
        { pattern: '^[0-9a-zA-Z][0-9a-zA-Z_]*$', message: '句中不能包含特殊符号', trigger: 'blur' }

    ],
    capthca: [
        { required: true, message: '请填写此项', trigger: 'blur' },
        { min: 4, message: '请输入4位验证码', trigger: 'blur' }
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

function oncheck() {
    console.log(form.name[0]);
    // form.name[0]=form.name[0].replace(/[\W]/g,'')
}
</script>

<style scoped>
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

.capthca {
    width: 100px;
    height: 45px;
    background-color: antiquewhite;
}

.el-button {
    transform: translate(35px, 0);
    margin-top: 0px;
    width: 250px;
    height: 40px;
    /* background-color: dodgerblue; */
    letter-spacing: 4px;
    /* color: #ffffff; */
    font-size: 14px;
    outline: none;
}

.login-button {
    margin-top: 65px;
    width: 250px;


}

.login-button:hover {
    filter: brightness(120%);
}

.login-title {
    position: relative;
    color: inherit;
    display: flex;
    height: 35px;
    font-size: 24px;
    font-weight: 700;
    margin-top: 40px;
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

.bottom {
    font-size: 14px;
    margin-left: 200px;
}
</style>
