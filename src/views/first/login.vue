<template>

   <div class="nav-bar" :style="{ color: textColor }">
      <div class="nav-title">哈大饼外卖管理系统</div>
      <div class="questionBox">
         <a href="" class="nav-content">Bug反馈</a>
         <a href="" class="nav-content">改进意见</a>
         <a href="" class="nav-content">人工客服</a>
      </div>
      <button class="change-theme" @click="toggleTheme">切换主题</button>
   </div>

   <div class="loginBox" :style="{ color: loginColor }">

      <RouterView :style="{ color: textColor }"></RouterView>
      <!-- </div> -->
   </div>
   <!-- </div> -->
</template>
<script lang='ts' setup>
import { RouterLink, RouterView } from 'vue-router';
import { reactive, ref, onMounted } from 'vue';
const backgroundImg = ref('');
const textColor = ref('')
const loginColor = ref('')

backgroundImg.value = localStorage.getItem('backgroundImg') || '/public/images/back-image1.jpg';// 从本地存储中获取背景图片
textColor.value = localStorage.getItem('textColor') || 'black'
loginColor.value = localStorage.getItem('loginColor') || 'black'
onMounted(() => {
   applyBackgroundImage();
   applyTextColor();
   applyLoginColor();
});

function toggleTheme() {
   backgroundImg.value = backgroundImg.value === '/public/images/back-image1.jpg'
      ? '/public/images/back-image2.jpg'
      : '/public/images/back-image1.jpg';


   localStorage.setItem('backgroundImg', backgroundImg.value); // 保存背景图片到本地存储
   localStorage.setItem('textColor', textColor.value)
   localStorage.setItem('loginColor', loginColor.value)

   applyBackgroundImage();// 设置背景图片样式
   applyTextColor()
   applyLoginColor()
}
// defineExpose({ toggleTheme });
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
   backdrop-filter: blur(15px);
}

.nav-bar {
   /* border-bottom: 1px solid gray; */
   display: flex;
   flex-direction: column;
   align-items: center;
   position: absolute;
   top: 0px;
   left: 0px;
   width: 100%;
   height: 70px;
   /* box-shadow: 0px 5px 15px -2px rgba(0, 0, 0, 0.4); */
   /* width: 100vw; */
}

.nav-title {
   /* margin-left: 100px; */
   margin-right: 1000px;
   color: inherit;
   font-size: 23px;
   font-weight: 700;
   margin-top: 15px;
}

.nav-content {
   margin-right: 20px;
   font-size: 13px;
   color: inherit;
}

.questionBox {
   font-size: 11px;
   /* margin-top: 23px; */
   margin-left: 900px;
   margin-top: -30px;
}

.change-theme {
   color: inherit;
   background-color: transparent;
   outline: none;
   font-size: 13px;
   margin-top: -26px;
   margin-left: 1400px;
}

.cake-img {
   position: absolute;
   left: 0;
}

.up {
   display: flex;
   justify-content: space-evenly;
   align-items: center;
   height: 15%;
   width: 100%;
   /* background-color: aquamarine; */
}

.middle {
   height: 85%;
   width: 100%;
   /* background-color: azure; */
}

a {
   padding: 2px;
   margin: 2px;
   font-size: 1.5em;
}
</style>

<!-- 未完成：1.校验成功时跳转页面-->
