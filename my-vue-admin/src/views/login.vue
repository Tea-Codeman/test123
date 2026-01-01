<template>
    <div class="login-wrapper">
      <el-card class="login-box">
        <template #header>
          <h2 class="title">商城管理系统</h2>
        </template>
        
        <el-form :model="loginData" ref="loginFormRef">
          <el-form-item prop="username">
            <el-input 
              v-model="loginData.username" 
              placeholder="用户名: admin"
              prefix-icon="User"
            />
          </el-form-item>
  
          <el-form-item prop="password">
            <el-input 
              v-model="loginData.password" 
              type="password" 
              placeholder="密码: 123456" 
              show-password
              prefix-icon="Lock"
            />
          </el-form-item>
  
          <el-form-item>
            <el-button type="primary" class="login-btn" @click="handleLogin">
              立即登录
            </el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </div>
  </template>
  
  <script setup lang="ts">
  import { reactive } from 'vue'
  import { useRouter } from 'vue-router'
  import { User, Lock } from '@element-plus/icons-vue' // 引入图标
  import { loginApi  }  from '@/api/user' //引入接口
  
  const router = useRouter()
  
  // 定义响应式数据
  const loginData = reactive({
    username: '',
    password: ''
  })
  
  const handleLogin = async () => {
  try {
    const res = await loginApi(loginData)
    console.log('登录成功数据：', res)
    // 此时通常会将 res.data.token 存入本地或 Pinia
    router.push('/')
  } catch (error) {
    console.log('登录失败')
  }
}
  </script>
  
  <style scoped>
  .login-wrapper {
    height: 100vh;
    background: linear-gradient(135deg, #1890ff 0%, #001529 100%);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .login-box {
    width: 400px;
  }
  .title {
    text-align: center;
    margin: 0;
    color: #333;
  }
  .login-btn {
    width: 100%;
    margin-top: 10px;
  }
  </style>