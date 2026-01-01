import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path' // 引入 path 模块

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      // 设置 @ 符号指向 src 目录
      '@': path.resolve(__dirname, './src')
    }
  },
  server:{
    proxy:{
      '/api': {
        target: 'https://mock.apifox.cn/m1/123456-0-default', // 这里换成真实的后端地址
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '') // 把 /api 替换为空
    }
  }
  }
})