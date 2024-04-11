<template>
   <el-form>
      <el-form-item label="密码" label-width='150px' prop="password">
         <el-input :placeholder="info.password" v-model="info.password" style="width: 500px"></el-input>
      </el-form-item>
      <el-form-item  label="确认密码" label-width='150px' prop="repassword">
         <el-input :placeholder="info.repassword" v-model="info.repassword" style="width: 500px"></el-input>
      </el-form-item>
   </el-form>
   data() {
   var validatePass2 = (rule, value, callback) => {
   if (value === '') {
   callback(new Error('请再次输入密码'))
   } else if (value !== this.info.password) {
   callback(new Error('两次输入密码不一致!'))
   } else {
   callback()
   }
   }
   return {
   info: {
   },
   rules: {
   password: [
   { required: true, message: '请输入密码', trigger: 'blur' },
   { pattern:
   /^(?![a-zA-Z]+$)(?![A-Z0-9]+$)(?![A-Z\W_]+$)(?![a-z0-9]+$)(?![a-z\W_]+$)(?![0-9\W_]+$)[a-zA-Z0-9\W_]{8,30}$/,
   message: '密码为数字，小写字母，大写字母，特殊符号 至少包含三种，长度为 8 - 30位，密码不能包含 用户名，公司名称(lidian), 公司域名(rekoon) （判断的时候不区分大小写)' }
   ],
   repassword: [
   { required: true, validator: validatePass2, trigger: 'blur' }
   ]
   }
   }
   },
</template>

<script lang='ts' setup name=''>


</script>

<style scoped>
   
</style>