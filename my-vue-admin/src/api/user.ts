import request from '@/utils/request'

// 登录接口
export function loginApi(data: any) {
  return request({
    url: '/user/login', // 完整路径会变成 /api/user/login
    method: 'post',
    data
  })
}