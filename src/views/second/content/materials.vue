<template>
   <div class="common-layout">
      <el-container>
         <el-header>
            <div class="word">物料管理</div>
            <div class="ad">
               <div class="pic">
                  <div class="portrait"></div>
               </div>
               <div class="admin">
                  <div class="admin_name">StarViewer</div>
                  <div class="admin_rights">werun快餐馆 管理员</div>
               </div>
            </div>
         </el-header>
         <el-main>
            <div class="left">
               <div class="quickView"></div>
               <div class="recentDetails">
                  <span style="font-size: 1.5rem;font-weight: 600;">近期仓位变动明细</span>
                  <el-table :data="tableData" style="width: 100%" height="300px">
                     <el-table-column prop="date" label="日期" width="180" />
                     <el-table-column prop="name" label="商品名" width="180" />
                     <el-table-column prop="address" label="变动" />
                  </el-table>
               </div>
            </div>
            <div class="right">
               <div class="search">
                  <el-form :inline="true" :model="form" class="demo-form-inline">
                     <el-form-item>
                        <el-input v-model="form.searching" style="width: 500px;height: 50px;"/>
                     </el-form-item>
                     <el-form-item>
                        <el-button type="primary" @click="onSearch">搜索</el-button>
                     </el-form-item>
                  </el-form>
               </div>
               <div class="quickAct">
                  <span style="font-size: 1.5rem;font-weight: 600;">物料快捷操作</span>
                  <br>
                  <el-form :model="form" label-width="auto" style="width: 566px; transform: translateX(8px);">
                     <el-form-item label="物料名称">
                        <el-input v-model="form.name" />
                     </el-form-item>
                     <!-- 可以加个自动补全 -->
                     <el-form-item label="物料来源">
                        <el-input v-model="form.resource" />
                     </el-form-item>
                     <el-form-item label="操作人">
                        <el-input v-model="form.operater" />
                     </el-form-item>
                  </el-form>
                  <el-form :model="form" label-width="auto" style="max-width: 600px;transform: translateX(8px);" inline="true">
                     <el-form-item label="变化数量">
                        <el-input v-model="form.num" />
                     </el-form-item>
                     <el-form-item label="变动类型">
                        <el-input v-model="form.type" />
                     </el-form-item>
                     <el-form-item label="生产日期" style="width: 266.67px;">
                        <el-col :span="11">
                           <el-date-picker v-model="form.date1" type="date" placeholder="选择日期" style="width: 200px;" />
                        </el-col>
                     </el-form-item>
                     <el-form-item label="保质期">
                        <el-input v-model="form.shelfLife" />
                     </el-form-item>
                     <el-form-item label="单价">
                        <el-input v-model="form.unitPrice" />
                     </el-form-item>
                     <el-form-item label="总价">
                        <el-input v-model="form.totalPrice" />
                     </el-form-item>
                     <el-form-item label="变动日期" style="width: 266.67px;">
                        <el-col :span="11">
                           <el-date-picker v-model="form.date2" type="date" placeholder="选择日期" style="width: 200px;" />
                        </el-col>
                     </el-form-item>
                     <el-form-item label="仓位">
                        <el-input v-model="form.position" />
                     </el-form-item>
                  </el-form>
                  <el-form :model="form" label-width="68px" style="width: 566px;transform: translateX(8px);">
                     <el-form-item label="备注">
                        <el-input v-model="form.desc" type="textarea" />
                     </el-form-item>
                     <el-form-item>
                        <el-button type="primary" @click="onSubmit">执行操作</el-button>
                        <el-button>清空操作</el-button>
                        <!-- 这里可以加个是否确认删除,以及是否关闭提示 -->
                     </el-form-item>
                  </el-form>
               </div>
            </div>
         </el-main>
      </el-container>
   </div>
</template>

<script lang='ts' setup name=''>
import { reactive } from 'vue'


const form = reactive({
  name: '',
  num:'',
  type:'',
  shelfLife:'',
  resource: '',
  date1: '',
  unitPrice:'',
  totalPrice:'',
  date2: '',
  position:'',
  desc: '',
  operater:'',
  searching:'',
})
const onSubmit = () => {
  console.log('submit!')
}
const onSearch = () => {
  console.log('search!')
}

const tableData = [
  {
    date: '2024年4月20日',
    name: '咖啡豆',
    address: '+100',
  },
  {
    date: '2024年4月14日',
    name: '鹰嘴豆',
    address: '+10',
  },
  {
    date: '2024年4月11日',
    name: '豌豆',
    address: '-200',
  },
  {
    date: '2024年4月10日',
    name: '肉夹馍',
    address: '+50',
  },
  {
    date: '2024年4月2日',
    name: '红烧肉',
    address: '-30',
  },
  {
    date: '2024年4月20日',
    name: '咖啡豆',
    address: '+100',
  },
  {
    date: '2024年4月14日',
    name: '鹰嘴豆',
    address: '+10',
  },
  {
    date: '2024年4月11日',
    name: '豌豆',
    address: '-200',
  },
  {
    date: '2024年4月10日',
    name: '肉夹馍',
    address: '+50',
  },
  {
    date: '2024年4月2日',
    name: '红烧肉',
    address: '-30',
  },
  {
    date: '2024年4月20日',
    name: '咖啡豆',
    address: '+100',
  },
  {
    date: '2024年4月14日',
    name: '鹰嘴豆',
    address: '+10',
  },
  {
    date: '2024年4月11日',
    name: '豌豆',
    address: '-200',
  },
  {
    date: '2024年4月10日',
    name: '肉夹馍',
    address: '+50',
  },
  {
    date: '2024年4月2日',
    name: '红烧肉',
    address: '-30',
  },
]
</script>

<style scoped>
.right{
   width: 55%;   
   height: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   transform: translateX(20px);
   margin-left: 10px;
}
.search{
   width: 100%;
   height: 8%;
   border: 2px solid rgb(170, 170, 170);
   border-radius: 5px;
   padding: 5px;
   margin-bottom: 10px;
   display: flex;
   /* justify-content: center;
   align-items: center; */
}
.quickAct{
   width: 100%;
   height: 92%;
   display: flex;
   justify-content: center;
   align-items: start;
   flex-direction: column;
   border: 2px solid rgb(170, 170, 170);
   border-radius: 5px;
   padding: 5px;
}
.common-layout {
    height: 750px;
    width: 100%;
}
.el-container {
    height: 100%;
}
.el-header {
   height: 80px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   border-bottom: 2px solid black;
}
.word {
   font-size: 2rem;
   font-weight: 800;
}
.ad {
   width: 230px;
   height: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
}
.pic{
   width:80px;
   height: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
}
.portrait{
   width: 65px;
   height: 65px;
   background-color: antiquewhite;
   border: 2px solid black;
   border-radius: 50%;
   background-image: url(/other/d79518f34c21af35bf771695b35ecec9.png);
   background-size: cover;
}
.admin{
   width: 140px;
   height: 100%;
   display: flex;
   justify-content: center;
   align-items: start;
   flex-direction: column;
   padding-left: 3px;
}
.admin_name{
   font-size: 1.25rem;
}
.admin_rights{
   font-size: 0.9rem;
}
.el-main {
   display: flex;
   padding: 20px 30px;
}
.left{
   width: 45%;   
   height: 100%;
   display: flex;
   flex-direction: column;
}
.quickView{
   height: 45%;
   width: 100%;
   border: 2px solid rgb(170, 170, 170);
   border-radius: 5px;
   padding: 5px;
   margin-bottom: 10px;
}
.recentDetails{
   height: 55%;
   width: 100%;
   border: 2px solid rgb(170, 170, 170);
   border-radius: 5px;
   padding: 5px;
}

</style>