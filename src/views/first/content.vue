<template>
    <div class="common-layout">
        <el-container>
            <el-aside width="230px">
                <div class="logo">"哈大饼"<br>管理平台</div>
                <el-menu default-active="/content/homepage" class="el-menu-vertical-demo" router="true">
                    <el-menu-item index="/content/homepage">首页</el-menu-item>
                    <el-menu-item index="/content/materials">物料管理</el-menu-item>
                    <el-menu-item index="/content/goods">商品输出</el-menu-item>
                    <el-menu-item index="/content/orders">订单管理</el-menu-item>
                    <el-menu-item index="/content/employers">员工管理</el-menu-item>
                    <el-menu-item index="/content/finance">财务管理</el-menu-item>
                    <!-- <RouterLink :to="{path:'/content/finance'}">大声地</RouterLink> -->
                </el-menu>
            </el-aside>
            <el-main>
                <RouterView></RouterView>
            </el-main>
        </el-container>
    </div>
</template>



<script lang="ts" setup name="">
import { RouterLink, RouterView } from 'vue-router'
import { reactive, ref, onMounted } from 'vue';
const mainImg = ref('');
mainImg.value = '/public/images/mainback-img.jpg'
document.body.style.backgroundImage = `url(${mainImg.value}`
document.body.style.backgroundSize = 'cover';
document.body.style.backgroundRepeat = 'no-repeat';
document.body.style.backgroundAttachment = 'fixed'
</script>

<style scoped>
.common-layout {
    height: 100vh;
    width: 100%;
}

.test {
    /* height: 1000px; */
    /* background-color: black; */
}

.el-menu {
    background-color: transparent;
    margin-top: 30px;
    border: none;
}

.el-container {
    height: 100%;
}

.el-aside {
    /* background-color: white; */
    overflow: hidden;
    backdrop-filter: blur(15px);
    /* opacity: 0.5; */
}

.el-header {
    height: 100px;
}

.el-main {
    /* background-color: rgb(161, 161, 255); */
    /* opacity: 0.5; */
    padding: 0px;
}

.logo {
    width: 100%;
    height: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    transform: skew(-10deg);
}
</style>
