<template>
   <div class="loginBox">
      <div class="up">
         <RouterLink :to="{path:'/login/log'}" active-class="active">登录</RouterLink>
         <RouterLink :to="{path:'/login/register'}" active-class="active">注册</RouterLink>
      </div>
      <div class="middle">
         <RouterView></RouterView>
      </div>
   </div>
</template>
<style scoped>
   .loginBox{
      width: 400px;
      height: 500px;
      background-color: aqua;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
   }
   .up{
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      height: 15%;
      width: 100%;
      background-color: aquamarine;
   }
   .middle{
      height: 85%;
      width: 100%;
      background-color: azure;
   }
   a{
      padding: 2px;
      margin: 2px;
      font-size: 1.5em;
   }
   a.active{
      border-bottom: 2px solid green;
   }
</style>
<script lang='ts' setup name=''>
   import { RouterLink,RouterView } from 'vue-router';
</script>
<!-- 未完成：1.忘记密码的密码一致校验 3.校验成功时跳转页面-->
