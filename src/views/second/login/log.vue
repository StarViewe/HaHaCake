<template>
    <!-- 该登录页面使用了element-plus集成，并基于此进行html元素的编写与css的排版。 -->
    <div class="login-title" :style="{ color: loginColor }">
        账号登录
    </div>
    <div>
        <!-- 以下为登录表单,所有数据均为响应式 -->
        <el-form ref="ruleFormRef" :model="form" :rules="rules" label-width="auto" style="max-width: 600px">
            <!-- 本处为账号输入框 -->
            <el-form-item label="账号" prop="username">
                <el-input v-model="form.username" style="width:240px" placeholder="请输入您的用户名/账号" :prefix-icon="User"
                    size="large" @input="oncheck"></el-input>
            </el-form-item>
            <!-- 本处为密码输入框 -->
            <el-form-item label="密码" prop="password">
                <el-input v-model="form.password" placeholder="请输入您的密码" show-password style="width:240px"
                    :prefix-icon="Lock" size="large"></el-input>
            </el-form-item>
            <el-form-item label="验证码" prop="capthca">
                <el-input v-model="form.capthca" placeholder="验证码" style="width:125px;" :prefix-icon="CaretRight"
                    maxlength="4" size="large" id="verify" @change="checkCaptcha"></el-input>
                <canvas id="canvas" width="100" height="45" style="margin-left:15px;margin-top: 5px;"></canvas>
            </el-form-item>
            <div class="mid">
                <!-- 本处利用了路由进行页面的跳转 -->
                <RouterLink :to="{ path: '/login/phoneLog' }">手机验证码登录</RouterLink>
                <RouterLink :to="{ path: '/login/Forget' }">忘记密码？</RouterLink>
            </div>
            <el-form-item>
                <el-button @click="submit">登录</el-button>
            </el-form-item>
            <div class="bottom">
                <RouterLink :to="{ path: '/login/register' }">点击注册新账号</RouterLink>
            </div>
        </el-form>
    </div>
</template>

<!-- <script lang="ts">

</script> -->
<script lang="ts" setup>
import { reactive, ref, onMounted } from 'vue';
import { Lock, User, CaretRight } from '@element-plus/icons-vue'
import { RouterLink } from 'vue-router';
import type { FormInstance, FormRules } from 'element-plus'
import { ElMessage, ElNotification } from 'element-plus'

// import useUserStore from '@/store/modules/users';
import { useRouter } from 'vue-router';
import axios from 'axios'

// let useStore = useUserStore();

let $router = useRouter();

const loginColor = ref('')
interface formRules {
    username: string
    password: string
    capthca: string
}
// const formSize = ref('default')
const ruleFormRef = ref<FormInstance>()//获取dom元素
//通过ts约束数据类型,并将数据响应化
const form = reactive<formRules>({
    username: '',
    password: '',
    capthca: '',
})

let submit = function doSubmit(vm: any) {
    let url = "http://101.37.83.158:8081/users/login";
    let data = {
        username: form.username,
        password: form.password
    };

    axios.post(url, data, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(r => {
        // 处理响应

        // 验证登录账号与注册账号是否一致
        const loggedInUsername = form.username;
        const registeredUsername = localStorage.getItem('registeredUsername');
        const loggedInPassword = form.password;
        const registeredPassword = localStorage.getItem('registeredPassword')
        if (loggedInUsername === registeredUsername && loggedInPassword === registeredPassword) {
            ElMessage.success({
                message: '登录成功',
                type: 'success',
                onClose: () => {
                    // 在消息框关闭时执行路由跳转
                    $router.push({ path: '/content/homepage' });
                }
            })


            // 登录账号与注册账号一致
            // 这里可以进行相应的逻辑处理
        } else {
            // 登录账号与注册账号不一致
            // 这里可以进行相应的逻辑处理 
            ElMessage.error('用户名或密码错误')
        }

    }).catch(error => {
        // 处理错误
        console.log(error);
    });
};

// 在调用 submit 函数时传递 Vue 实例
submit(this)
// const login = async() => {
//     try {
//         await useStore.userLogin(form);
//         $router.push({ path: '/content/homepage' })
//         ElMessage.success({
//             message: '登录成功',
//             type: 'success',
//         })
//     } catch (error) {
//         ElNotification({
//             type: 'error',
//             message:(error as Error).message
//         })
//     }
// }
// const loginFormRef = ref('')
// const registerFormRef = ref('')
// const login = () => {
//     if (loginFormRef.value) {
//         loginFormRef.value.validate((valid) => {
//             if (valid) {
//                 // 表单验证通过
//                 // 执行登录逻辑
//             } else {
//                 // 表单验证不通过
//                 // 给出相应的提示或处理逻辑
//             }
//         });
//     }
//     api.loginApi(form).then(res => {
//         console.log('login', res);
//         if (res.status >= 200 && res.status < 300) {
//             ElMessage.success({
//                 message: '登录成功',
//                 type: 'success'
//             })
//             window.sessionStorage.setItem('token', res.data.token)
//             $router.push({ path: '/content/homepage' })
//         }

//     }).catch(error => {
//         console.log(error);

//     })
// }
// const submitForm = (formEl: FormInstance | undefined) => { //formEl 形参
//     if (!formEl) return
//     formEl.validate((valid) => {
//         if (valid) {
//             // login()
//         } else {
//             return false
//         }
//     })
// }

//表单验证
const rules = reactive<FormRules<formRules>>({
    //以下为账号的验证规则
    username: [
        //如果未填写，触发下列提示
        { required: true, message: '请填写此项', trigger: 'blur' },
        //如果以特殊符号开头，触发下列提示
        { pattern: '^[0-9a-zA-Z]', message: '不能以特殊符号作为开头', trigger: 'blur' },
        //如果句中包含特殊符号，触发下列提示
        { pattern: '^[0-9a-zA-Z][0-9a-zA-Z_]*$', message: '句中不能包含特殊符号', trigger: 'blur' }

    ],
    password: [
        { required: true, message: '请填写此项', trigger: 'blur' },
        { pattern: '^[0-9a-zA-Z]', message: '不能以特殊符号作为开头', trigger: 'blur' },
        { pattern: '^[0-9a-zA-Z][0-9a-zA-Z_]*$', message: '句中不能包含特殊符号', trigger: 'blur' }

    ],
    capthca: [
        { required: true, message: '请填写此项', trigger: 'blur' },
        { min: 4, message: '请输入4位验证码', trigger: 'blur' },
        { validator: checkCaptcha, trigger: 'blur' }
    ],
})

let generatedCaptcha = ''


function identify(selector: any, width: any, height: any) {
    function rn(min: any, max: any) {
        return parseInt(Math.random() * (max - min) + min)
    }

    function rc(min: any, max: any) {
        let r = rn(min, max);
        let g = rn(min, max)
        let b = rn(min, max)
        return `rgb(${r},${g},${b})`
    }
    let w = width;
    let h = height;
    let canvas = document.querySelector(selector)
    let ctx = canvas.getContext('2d')
    function drawCaptcha() {
        ctx.fillStyle = rc(180, 230); // 背景颜色
        ctx.fillRect(0, 0, w, h);

        let pool = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        generatedCaptcha = '';
        for (let i = 0; i < 4; i++) {
            let randomIndex = Math.floor(Math.random() * pool.length);
            let randomChar = pool.charAt(randomIndex);
            generatedCaptcha += randomChar;
            let fs = rn(24, 40); // 字体大小
            let deg = rn(-30, 30); // 旋转角度
            ctx.font = fs + 'px Simhei';
            ctx.textBaseline = 'top';
            ctx.fillStyle = rc(80, 150); // 设置自己的填充颜色
            ctx.save();
            ctx.translate(20 * i + 15, 15);
            ctx.rotate(deg * Math.PI / 180);
            ctx.fillText(randomChar, -5, -13);
            ctx.restore();
        }

        // 随机生成干扰线
        for (let i = 0; i < 5; i++) {
            ctx.beginPath();
            ctx.moveTo(rn(0, w), rn(0, h));
            ctx.lineTo(rn(0, w), rn(0, h));
            ctx.strokeStyle = rc(180, 230);
            ctx.closePath();
            ctx.stroke();
        }

        // 随机产生小圆点
        for (let i = 0; i < 40; i++) {
            ctx.beginPath();
            ctx.arc(rn(0, w), rn(0, h), 1, 0, 2 * Math.PI);
            ctx.closePath();
            ctx.fillStyle = rc(150, 200);
            ctx.fill();
        }
    }

    // 初次生成验证码
    drawCaptcha();
    document.addEventListener('DOMContentLoaded', function () {
        identify('#canvas', 120, 40);
    });
    // 点击验证码重新生成新的验证码
    canvas.addEventListener('click', function () {
        ctx.clearRect(0, 0, w, h);
        drawCaptcha();
    });
}

document.addEventListener('DOMContentLoaded', function () {
    identify('#canvas', 120, 40);
});

function checkCaptcha(rule: any, value: any, callback: any) {
    // 在这里可以进行验证码匹配的逻辑判断
    if (value === generatedCaptcha.toLowerCase()) {
        // 验证码匹配，可以进行相应的处理
        // 比如显示验证成功的消息
        console.log("验证码正确");
        // 调用 callback() 表示验证通过
        callback();
    } else {
        // 验证码不匹配，可以进行相应的处理
        // 比如提示用户重新输入验证码
        console.log("验证码错误，请重新输入");
        // 调用 callback(new Error('提示信息')) 表示验证不通过，并传入相应的提示信息
        callback(new Error('验证码错误，请重新输入'));
    }
}

const backgroundImg = ref('');
const textColor = ref('');
// import { toggleTheme } from '../../first/login.vue';
backgroundImg.value = localStorage.getItem('backgroundImg') || '/public/images/back-image1.jpg'; // 从本地存储中获取背景图片

onMounted(() => {
    // 设置背景图片样式
    applyBackgroundImage();
    // 设置字体颜色
    applyTextColor();
    identify('#canvas', 120, 40);
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

function oncheck() {
    console.log(form.username[0]);
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
