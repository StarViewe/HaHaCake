<template>
    <e-charts class="chart" :option="option"/>
 </template>
 
 <script setup>
 import {ref,computed} from 'vue'
 
 const data = ref([
 {value:50,name:'A'},
 {value:150,name:'B'},
 {value:520,name:'C'},
 {value:530,name:'D'},
 {value:250,name:'E'},
 ])
 
 setInterval(()=>{
     data.value = data.value.map(item=>({
     ...item,
     value:Math.random()*100
     }));
 },1000);
 //这部分代码可以问问什么意思
 
 const option = computed(()=>{
 return{
  xAxis: {
     type: 'category',
     data: data.value.map(d => d.name),
   },
   yAxis: {
     type: 'value'
   },
   series: [
     {
       data: data.value.map(d => d.value),
       type: 'line'
     }
   ],
 }
 })
 </script>
 
 <style scoped>
    
 </style>