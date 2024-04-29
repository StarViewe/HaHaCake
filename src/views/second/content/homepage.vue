<template>
   <div class="title">首页</div>
   <!-- <div class="head"></div> -->
   <div class="main">
      <div class="sum">
         总点单量
         <br>
         <div class="number">{{ sum }}单</div>
      </div>
      <div class="getMoney">
         今日成交额
         <br>
         <div class="number">{{ getMoney }}元</div>
      </div>
      <div class="putMoney">
         季度物料成本
         <br>
         <div class="number">{{ putMoney }}元</div>
      </div>
      <div class="rate">
         季度平均利润率
         <br>
         <div class="number">{{ rate }}%</div>
      </div>
      <div class="time">
         月度工时统计
         <br>
         <div class="number">{{ time }}h</div>
      </div>
      <div class="manage" id="manage" ref="manage">

      </div>
      <!-- <div id="main" style="width: 800px; height: 600px;"></div> -->
      <div class="list">
         <div class="list-title">最新表单列表：</div>
         <table class="newList">
            <tr>
               <td>第三季度财报</td>
            </tr>
            <tr>
               <td>{{ newList1 }}</td>
            </tr>
            <tr>
               <td>{{ newList2 }}</td>
            </tr>
            <tr>
               <td>{{ newList3 }}</td>
            </tr>
            <tr>
               <td>{{ newList4 }}</td>
            </tr>
            <tr>
               <td>{{ newList5 }}</td>
            </tr>
         </table>
      </div>
      <div class="employer">
         <div class="employer-title">正在作业员工</div>
         <div class="employer-people">
            <div class="simple-people">
               <el-icon :size="40">
                  <user />
               </el-icon>
               <div class="detailed-people">
                  <div class="user">{{ user1 }}</div>
                  <div class="job">{{ job1 }}</div>
               </div>
            </div>
            <div class="simple-people">
               <el-icon :size="40">
                  <user />
               </el-icon>
               <div class="detailed-people">
                  <div class="user">{{ user2 }}</div>
                  <div class="job">{{ job2 }}</div>
               </div>

            </div>
            <div class="simple-people">
               <el-icon :size="40">
                  <user />
               </el-icon>
               <div class="detailed-people">
                  <div class="user">{{ user3 }}</div>
                  <div class="job">{{ job3 }}</div>
               </div>
            </div>
         </div>
      </div>
      <!-- <br> -->
      <div class="statis" id="statis"></div>
      <div class="money" id="money">
         <div class="expend" id="expend"></div>
         <div class="line"></div>
         <div class="income" id="income"></div>
      </div>
   </div>
</template>

<script setup lang="ts">
import { onMounted, computed, ref, watch } from 'vue';
import * as echarts from 'echarts';
const sum = ref('')
const getMoney = ref('')
const putMoney = ref('')
const rate = ref('')
const time = ref('')
const newList1 = ref('')
const newList2 = ref('')
const newList3 = ref('')
const newList4 = ref('')
const newList5 = ref('')
const user1 = ref('')
const user2 = ref('')
const user3 = ref('')
const job1 = ref('')
const job2 = ref('')
const job3 = ref('')
user1.value = '杨小黑'
user2.value = '杨小b'
user3.value = '杨小bb'
job1.value = '店员'
job2.value = '店'
job3.value = '员'

newList1.value = '物料采购清单'
newList2.value = '员工绩效考核报表'
newList3.value = '产品调研报告'
newList4.value = '市场分析与风险评估报告'
newList5.value = '重点信息和情况纪要'
sum.value = '1234'
getMoney.value = '2545'
putMoney.value = '552'
rate.value = '86'
time.value = '298'
onMounted(() => {
   const chartDom = document.getElementById('manage');
   if (chartDom) {
      const myChart = echarts.init(chartDom);

      const seriesLabel = {
         // show: true
      };

      const option: echarts.EChartsOption = {
         color: ['skyblue', 'red'],
         title: {
            text: '物料管理',
            top: '20px',
            left: '15px'
         },
         tooltip: {
            trigger: 'axis',
            axisPointer: {
               type: 'shadow'
            }
         },
         legend: {
            data: ['仓位值', '警戒值'],
            bottom: '10px'
         },
         grid: {
            left: 80,
            top: '20%',
            bottom: '20%'
         },
         xAxis: {
            type: 'value',
            // name: 'Days',
            axisLabel: {
               formatter: '{value}'
            }
         },
         yAxis: {
            type: 'category',
            inverse: true,
            data: ['包装袋', '吸管', '纸杯', '糖浆', '牛奶', '咖啡豆'],
            axisLabel: {
               formatter: function (value: string) {
                  return `{value|${value}}`;
               },
               margin: 20,
               rich: {
                  value: {
                     lineHeight: 30,
                     align: 'center'
                  },
                  包装袋: {
                     height: 40,
                     align: 'center'
                  },
                  吸管: {
                     height: 40,
                     align: 'center'
                  },
                  纸杯: {
                     height: 40,
                     align: 'center'
                  },
                  糖浆: {
                     height: 40,
                     align: 'center'
                  },
                  牛奶: {
                     height: 40,
                     align: 'center'
                  },
                  咖啡豆: {
                     height: 40,
                     align: 'center'
                  },
               }
            }
         },
         series: [
            {
               name: '仓位值',
               type: 'bar',
               data: [50, 70, 50, 50, 80, 60],
               label: seriesLabel,
            },
            {
               name: '警戒值',
               type: 'bar',
               label: seriesLabel,
               data: [20, 50, 30, 40, 45, 40]
            },
         ]
      };

      myChart.setOption(option);
   }
   const chartDom2 = document.getElementById('statis');
   if (chartDom2) {
      const myChart2 = echarts.init(chartDom2);

      const option2: echarts.EChartsOption = {
         color: ['skyblue'],
         title: {
            text: '销量统计',
            top: '15px',
            left: '15px'
         },
         grid: {
            top: '60px',
            bottom: '65px'
         },
         xAxis: {
            type: 'category',
            data: ['一月', '二月', '三月', '四月', '五月', '六月']
         },
         yAxis: {
            type: 'value'
         },
         series: [
            {
               name: '点单量',
               data: [10, 20, 15, 40, 35, 25],
               type: 'line'
            }
         ],
         legend: {
            data: ['点单量'],
            bottom: '10px'
         }
      }
      option2 && myChart2.setOption(option2);
   }
   const chartDom3 = document.getElementById('expend');
   if (chartDom3) {
      const myChart3 = echarts.init(chartDom3);

      const option3: echarts.EChartsOption = {
         tooltip: {
            trigger: 'item'
         },
         legend: {
            bottom: '5%',
            left: 'center'
         },
         title: {
            text: '开支和收入情况占比',
            top: '15px',
            left: '15px'
         },
         series: [
            {
               name: 'Access From',
               type: 'pie',
               radius: ['35%', '50%'],
               center: ['50%', '45%'],
               avoidLabelOverlap: false,
               label: {
                  show: false,
                  position: 'center'
               },
               emphasis: {
                  // label: {
                  //    show: true,
                  //    fontSize: 40,
                  //    fontWeight: 'bold'
                  // }
               },
               labelLine: {
                  show: false
               },
               data: [
                  { value: 1048, name: '员工薪资' },
                  { value: 735, name: '设备维护' },
                  { value: 580, name: '物料采购' },
                  { value: 484, name: '场地租金' },
                  { value: 300, name: '折损消耗' }
               ]
            }
         ]
      }
      option3 && myChart3.setOption(option3);
   }
   const chartDom4 = document.getElementById('income');
   if (chartDom4) {
      const myChart4 = echarts.init(chartDom4);

      const option4: echarts.EChartsOption = {
         legend: {
            bottom: '40px'
         },
         toolbox: {
            show: true,
            feature: {
               mark: { show: true },
               // dataView: { show: true, readOnly: false },
               // restore: { show: true },
               // saveAsImage: { show: true }
            }
         },
         series: [
            {
               name: 'Nightingale Chart',
               type: 'pie',
               radius: [20, 90],
               center: ['50%', '40%'],
               roseType: 'area',
               itemStyle: {
                  borderRadius: 8
               },
               data: [
                  { value: 10, name: '产品A' },
                  { value: 15, name: '产品B' },
                  { value: 20, name: '产品C' },
                  { value: 25, name: '产品D' },
                  { value: 30, name: '产品E' },

               ]
            }
         ]
      }
      option4 && myChart4.setOption(option4);
   }
});

</script>

<style scoped>
td {
   border: 1px solid;
   padding-left: 10px;
   /* margin-bottom: 1px; */
}

tr {
   padding-left: 10px;
   margin-left: 10px;
}

tr:first-child {
   background-color: grey;
}

.title {
   font-size: 32px;
   font-weight: 700;
   margin-top: 20px;
   margin-left: 60px;
}

.employer-people {
   padding-left: 15px;
   padding-top: 5px;
   display: flex;
   flex-direction: column;
}

.simple-people {
   margin-top: 15px;
   display: flex;
   flex-direction: row;
}

.detailed-people {
   margin-left: 10px;
   margin-top: -5px;
}

.list-title {
   margin-top: 20px;
   margin-left: 25px;
   font-size: 24px;
   font-weight: 700;
}

.employer-title {
   margin-top: 20px;
   margin-left: 25px;
   font-size: 24px;
   font-weight: 700;
}


.newList {
   padding-left: 10px;
   margin-left: 20px;
   margin-top: 15px;
   /* padding-top: 10px; */
   border: 1px solid;
   width: 430px;
   border-collapse: collapse;
   /* border-spacing: 0; */
   border-spacing: 10px
}

.number {
   margin-top: 18px;
}

.manage {
   border-radius: 15px;
   width: 420px;
   /* height: 240px; */
   background-color: #fff;
   border: 1px solid gray;
}

.statis {
   border-radius: 15px;
   width: 420px;
   /* height: 240px; */
   height: 290px;
   margin-top: 320px;
   margin-left: -735px;
   background-color: #fff;
}

.money {
   border-radius: 15px;
   width: 785px;
   /* height: 240px; */
   height: 290px;
   margin-top: 320px;
   margin-left: -524px;
   background-color: #fff;
   border: 1px solid gray;
}

.expend {
   width: 392px;
   height: 100%;
   display: inline-block;
}

.income {
   width: 392px;
   height: 100%;
   display: inline-block;

}

.line {
   display: inline-block;
   width: 1px;
   margin-bottom: 20px;
   /* height: 100%; */
   height: 250px;
   background-color: grey;
}

.sum {
   background-color: #fff;
   font-size: 24px;
   font-weight: 700;
   padding-left: 15px;
   padding-top: 22px;
   border-radius: 15px;
   border: 1px solid gray;
}

.getMoney {
   background-color: #fff;
   border-radius: 15px;
   font-size: 24px;
   font-weight: 700;
   padding-left: 15px;
   padding-top: 22px;
   border: 1px solid gray;
}

.putMoney {
   background-color: #fff;
   border-radius: 15px;
   font-size: 24px;
   font-weight: 700;
   padding-left: 15px;
   padding-top: 22px;
   border: 1px solid gray;
}

.rate {
   background-color: #fff;
   border-radius: 15px;
   font-size: 24px;
   font-weight: 700;
   padding-left: 15px;
   padding-top: 22px;
   border: 1px solid gray;
}

.time {
   background-color: #fff;
   border-radius: 15px;
   font-size: 24px;
   font-weight: 700;
   padding-left: 15px;
   padding-top: 22px;
   border: 1px solid gray;
}

.main {
   display: grid;
   margin-top: 40px;
   margin-left: 35px;
   grid-template-rows: 150px 290px 290px;
   grid-template-columns: repeat(auto-fill, 220px);
   /* grid-template-columns: 220px 300px; */
   gap: 25px;
}

.list {
   border-radius: 15px;
   width: 485px;
   /* height: 240px; */
   background-color: #fff;
   margin-left: 210px;
   /* padding-left: 880px; */
   /* gap: 125px; */
   border: 1px solid gray;
}

.employer {
   width: 260px;
   background-color: #fff;
   border-radius: 15px;
   margin-left: 490px;
   border: 1px solid gray;
}
</style>