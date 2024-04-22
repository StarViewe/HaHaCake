<!-- <template>
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
</style> --><template>
    <div>
        <el-form :model="form" ref='ruleFormRef' :rules="rules" label-width="auto" style="max-width: 600px">
            <el-form-item label="账号" prop="name">
                <el-input v-model="form.name" style="width:240px" placeholder="请输入您的用户名/账号" :prefix-icon="User"
                size="large"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input v-model="form.password" placeholder="请输入您的密码" show-password style="width:240px"
                    :prefix-icon="Lock" size="large"></el-input>
            </el-form-item>
            <el-form-item label="手机号" prop="phonenum">
                <el-input v-model="form.phonenum" style="width:240px" placeholder="请输入您的手机号" :prefix-icon="Phone"
                onkeyup="this.value=this.value.replace(/\D/g,'')" size="large"></el-input>
            </el-form-item>
            <el-form-item label="验证码" prop="capthca">
                <el-input v-model="form.capthca" placeholder="验证码" style="width:140px;" :prefix-icon="CaretRight"
                    maxlength="4" size="large" onkeyup="this.value=this.value.replace(/\D/g,'')"></el-input>
                <el-button style="transform: translate(0px,0);height: 48px;">获取验证码</el-button>
            </el-form-item>
            <el-form-item>
                <el-button @click="submitForm(ruleFormRef)">注册</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script lang='ts' setup name=''>
import { reactive,ref } from 'vue';
import { Lock, User, CaretRight, Phone } from '@element-plus/icons-vue'
import type { FormInstance, FormRules } from 'element-plus'

interface formRules {
    name: string
    password: string
    phonenum: string
    capthca: string
}
// const formSize = ref('default')
const ruleFormRef = ref<FormInstance>()
const form = reactive<formRules>({
    name: '',
    password: '',
    phonenum:'',
    capthca: '',
})

const rules = reactive<FormRules<formRules>>({
    name: [
        { required: true, message: '请填写此项', trigger: 'blur'},
        {pattern:'^[0-9a-zA-Z]', message:'不能以特殊符号作为开头',trigger:'blur'},
        {pattern:'^[0-9a-zA-Z][0-9a-zA-Z_]*$', message:'句中不能包含特殊符号',trigger:'blur'}
    ],
    password: [
        { required: true, message: '请填写此项', trigger: 'blur' },
        {pattern:'^[0-9a-zA-Z]', message:'不能以特殊符号作为开头',trigger:'blur'},
        {pattern:'^[0-9a-zA-Z][0-9a-zA-Z_]*$', message:'句中不能包含特殊符号',trigger:'blur'}
    ],
    phonenum: [
        { required: true, message: '请填写此项', trigger: 'blur' },
        { min: 11, message: '请输入11位电话号', trigger: 'blur' }
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