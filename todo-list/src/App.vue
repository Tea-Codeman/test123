<script setup>

import {computed, ref, watch} from 'vue'
import {
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Star,
} from '@element-plus/icons-vue'
const inputValue = ref('');
const list = ref([
  {
    isCompleted:false,
    text:'吃饭'
  },
  {
    isCompleted:false,
    text:'睡觉'
  },
  {
    isCompleted:false,
    text:'起飞'
  }
]);
const HideisCompleted = ref(false);
const filteredTodos = computed(()=>{
  return HideisCompleted.value
  ?list.value.filter((item)=>!item.isCompleted)
  :list.value
});
watch(HideisCompleted,(currentStatus)=>{
  console.log("当前HideisCompleted的值",currentStatus)
});
//添加
function add(){
  list.value.push({
      isCompleted:false,
      text:inputValue.value
  });
  inputValue.value = '';
}
//删除
function del(index){
  list.value.splice(index,1);
}
</script>

<template>
  <div class="todo-app max-w-xl mx-auto mt-20 p-6 bg-white rounded-3xl shadow-sm">
  
  <h1 class="text-4xl font-extrabold text-gray-800 mb-8 ml-1 tracking-tight">
    Todo App
  </h1>

  <div class="todo-form flex items-center gap-3">
    <input 
      v-model="inputValue" 
      type="text" 
      placeholder="What needs to be done?"
      class="flex-1 h-14 px-5 text-lg border-2 border-gray-100 rounded-xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all outline-none placeholder-gray-400 font-light"
    > 
    <!--输入框-->

    <el-button @click="add" class="!h-14 px-8 bg-blue-500 hover:bg-blue-600 active:scale-95 text-white font-semibold rounded-xl transition-all duration-200 shadow-md text-lg border-none">
      Add
    </el-button>   <!--添加-->
    
  </div>
  <div v-for="(item, index) in filteredTodos" class="item flex items-center justify-between min-w-48 p-2 border-b">
  
  <div class="flex items-center gap-3">
    <input @click="item.isCompleted=!item.isCompleted" type="checkbox" class="w-5 h-5 cursor-pointer" /> <!--多选-->
    <span :class="[
          'text-lg transition-all duration-300 select-none', 
          item.isCompleted ? 'text-gray-400 line-through italic' : 'text-gray-700 font-medium'
        ]">{{ item.text }}</span>
  </div>
  <el-button @click="del(index)" class="!h-10 px-6 bg-red-400 hover:bg-red-500 active:scale-95 text-white font-semibold rounded-xl transition-all duration-200 shadow-md border-none">
    Delete
  </el-button> <!--删除-->
</div>
<div>
  <el-button @click="HideisCompleted=!HideisCompleted" class="!h-10 px-6 bg-red-400 hover:bg-red-500 active:scale-95 text-white font-semibold rounded-xl transition-all duration-200 shadow-md border-none">
    Hide Completed
  </el-button>
</div>
    
  
</div>
</template>


