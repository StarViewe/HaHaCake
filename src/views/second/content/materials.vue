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
               <div class="quickView" id="quickView"></div>
               <div class="recentDetails">
                  <span style="font-size: 1.5rem;font-weight: 600;padding-left: 15px;">近期仓位变动明细</span>
                  <el-table :data="tableData" style="width: 100%;margin-top: 12px;height: 238px;">
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

                        <el-input v-model="form.searching" style="width: 500px;height: 50px;"
                           placeholder="请输入想要查找的物料" />

                     </el-form-item>
                     <el-form-item>
                        <el-button type="primary" >搜索</el-button>
                     </el-form-item>
                  </el-form>
               </div>
               <div class="quickAct">

                  <span style="font-size: 1.5rem;font-weight: 600;margin-left: 10px;margin-top: 5px;">物料快捷操作</span>
                  <br>

                  <el-form :model="form" label-width="auto" ref="ruleFormRef" :rules="rules"
                     style="width: 600px; transform: translateX(8px);" :inline="true">
                     <el-form-item label="物料名称" prop="name" style="width: 568px;">
                        <el-input v-model="form.name" />
                     </el-form-item>
                     <!-- 可以加个自动补全 -->
                     <el-form-item label="物料来源" prop="resource" style="width: 568px;">
                        <el-input v-model="form.resource" />
                     </el-form-item>
                     <el-form-item label="操作人" prop="operater" style="width: 568px;">
                        <el-input v-model="form.operater" />
                     </el-form-item>
                  <!-- </el-form> -->

                  <!-- <el-form :model="form" label-width="auto" ref="ruleFormRef" :rules="rules" -->
                     <!-- style="max-width: 610px;transform: translateX(8px);" inline="true"> -->
                     <el-form-item label="变化数量" prop="num" style="width: 266.67px;">
                        <el-input v-model="form.num" @change="totalPrice()"/>
                     </el-form-item>
                     <el-form-item label="变动类型" prop="type" style="width: 266.67px;">
                        <el-input v-model="form.type" />
                     </el-form-item>
                     <el-form-item label="生产日期" style="width: 266.67px;" prop="date1">
                        <el-col :span="11">
                           <el-date-picker v-model="form.date1" type="date" placeholder="选择日期" style="width: 200px;" />
                        </el-col>
                     </el-form-item>
                     <el-form-item label="保质期" prop="shelfLife" style="width: 266.67px;">
                        <el-input v-model="form.shelfLife" />
                     </el-form-item>
                     <el-form-item label="单价" prop="unitPrice" style="width: 266.67px;">
                        <el-input v-model="form.unitPrice" @change="totalPrice()"/>
                     </el-form-item>
                     <el-form-item label="总价" style="width: 266.67px;">
                        <el-input disabled v-model="form.totalPrice"/>
                     </el-form-item>
                     <el-form-item label="变动日期" style="width: 266.67px;" prop="date2">
                        <el-col :span="11">
                           <el-date-picker v-model="form.date2" type="date" placeholder="选择日期" style="width: 200px;" />
                        </el-col>
                     </el-form-item>
                     <el-form-item label="仓位" prop="position" style="width: 266.67px;">
                        <el-input v-model="form.position" />
                     </el-form-item>
                  <!-- </el-form> -->
                  <!-- <el-form :model="form" label-width="68px" ref="ruleFormRef" :rules="rules" -->
                  <!-- style="width: 566px;transform: translateX(8px);"> -->
                     <el-form-item label="备注" style="width: 568px;">
                        <el-input v-model="form.desc" type="textarea" />
                     </el-form-item>
                     <el-form-item style="transform: translateX(80px);">
                        <el-button type="primary" @click="submitForm(ruleFormRef)" style="outline: none;">执行操作</el-button>
                        <el-button @click="resetForm(ruleFormRef)" style="outline: none;">清空操作</el-button>
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
import { reactive, onMounted, ref } from 'vue'
import * as echarts from 'echarts';
import type { FormInstance, FormRules } from 'element-plus'

const form = reactive<Form>({
   name: '',
   num: 0,
   type: '',
   shelfLife: '',
   resource: '',
   date1: '',
   unitPrice: 0,
   totalPrice: 0,
   date2: '',
   position: '',
   desc: '',
   operater: '',
   searching: '',
})

interface Form{
   name: string,
   num: number,
   type: string,
   shelfLife: string,
   resource: string,
   date1: any,
   unitPrice: number,
   totalPrice: number,
   date2: any,
   position: string,
   desc: string,
   operater: string,
   searching: string,
}

let totalPrice = () => {
   form.totalPrice = form.unitPrice * form.num
}

const ruleFormRef = ref<FormInstance>()
const rules = reactive<FormRules<Form>>({
   name: [
      { required: true, message: '请输入物料名称', trigger: 'blur' }
   ],
   num: [
      { required: true, message: '请输入变化数量', trigger: 'blur' }
   ],
   type: [
      { required: true, message: '请输入变动类型', trigger: 'blur' }
   ],
   shelfLife: [
      { required: true, message: '请输入保质期', trigger: 'blur' }
   ],
   resource: [
      { required: true, message: '请输入来源', trigger: 'blur' }
   ],
   date1: [
      { required: true, message: '请选择生产日期', trigger: 'blur' }
   ],
   date2: [
      { required: true, message: '请选择变动日期', trigger: 'blur' }
   ],
   unitPrice: [
      { required: true, message: '请输入单价', trigger: 'blur' }
   ],
   position: [
      { required: true, message: '请输入仓位', trigger: 'blur' }
   ],
   desc: [
      { required: true, message: '请输入备注', trigger: 'blur' }
   ],
   operater: [
      { required: true, message: '请输入操作员', trigger: 'blur' }
   ],
})

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!', fields)
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
   form.totalPrice = 0
   if (!formEl) return
   formEl.resetFields()
}

onMounted(() => {
   const chartDom = document.getElementById('quickView');
   if (chartDom) {
      const myChart = echarts.init(chartDom);

      const seriesLabel = {
         // show: true
      };

      const option: echarts.EChartsOption = {
         title: {
            text: '仓位预览',
            top: 10,
            left: 10
         },
         tooltip: {
            trigger: 'axis',
            axisPointer: {
               type: 'shadow'
            }
         },
         grid: {
            top: '25%',
            bottom: '22%'
         },
         legend: {
            data: ['仓位值', '预警值'],
            bottom: 8
         },
         toolbox: {
            show: true,
            orient: 'vertical',
            left: 'right',
            top: 'center',
            // feature: {
            //    mark: { show: true },
            //    dataView: { show: true, readOnly: false },
            //    magicType: { show: true, type: ['line', 'bar', 'stack'] },
            //    restore: { show: true },
            //    saveAsImage: { show: true }
            // }
         },
         xAxis: [
            {
               type: 'category',
               axisTick: { show: false },
               data: ['咖啡豆', '牛奶', '糖浆', '纸杯', '吸管', '包装袋']
            }
         ],
         yAxis: [
            {
               type: 'value'
            }
         ],
         series: [
            {
               name: '仓位值',
               type: 'bar',
               barGap: 0,
               // label: labelOption,
               emphasis: {
                  focus: 'series'
               },
               data: [100, 75, 200, 160, 50, 60]
            },
            {
               name: '预警值',
               type: 'bar',
               // label: labelOption,
               emphasis: {
                  focus: 'series'
               },
               data: [20, 20, 20, 20, 20, 20]
            },

         ]
      };

      myChart.setOption(option);
   }
}
)


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
.right {
   width: 720px;
   height: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   transform: translateX(20px);
   margin-left: 10px;
}

.search {
   /* width: 100%; */
   width: 630px;
   margin-bottom: 10px;
   /* height: 8%; */
   /* border: 2px solid rgb(170, 170, 170); */
   border-radius: 5px;
   padding: 5px;
   margin-bottom: 23px;
   margin-top: 20px;
   display: flex;
   /* justify-content: center;
   align-items: center; */
}

.quickAct {
   /* width: 100%; */
   /* height: 92%; */
   width: 620px;
   display: flex;
   justify-content: center;
   align-items: start;
   flex-direction: column;
   border: 1px solid rgb(170, 170, 170);
   border-radius: 5px;
   padding: 5px;
   background-color: #fff;
}

.common-layout {
   height: 900px;
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

.el-table__inner-wrapper {
   height: 238px;
   margin-top: 13px;
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

.pic {
   width: 80px;
   height: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
}

.portrait {
   width: 65px;
   height: 65px;
   background-color: antiquewhite;
   border: 2px solid black;
   border-radius: 50%;
   background-image: url(/other/d79518f34c21af35bf771695b35ecec9.png);
   background-size: cover;
}

.admin {
   width: 140px;
   height: 100%;
   display: flex;
   justify-content: center;
   align-items: start;
   flex-direction: column;
   padding-left: 3px;
}

.admin_name {
   font-size: 1.25rem;
}

.admin_rights {
   font-size: 0.9rem;
}

.el-main {
   display: flex;
   padding: 20px 30px;
}

/* .left {
   width: 45%;
   height: 900px;
   margin-top: 10px;
   display: flex;
   flex-direction: column;
} */

.quickView {
   height: 300px;
   width: 590px;
   border: 1px solid rgb(170, 170, 170);
   border-radius: 5px;
   padding: 5px;
   margin-bottom: 10px;
   margin-top: 25px;
   background-color: #fff;
}

.recentDetails {
   height: 330px;
   overflow: hidden;
   width: 590px;
   margin-top: 45px;
   border: 1px solid rgb(170, 170, 170);
   border-radius: 5px;
   padding: 5px;
   background-color: #fff;
}
</style>