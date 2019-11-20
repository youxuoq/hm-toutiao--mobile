import request from '@/utils/request.js'
// 登录
export const login = ({ mobile, code }) => {
  return request({
    url: '/app/v1_0/authorizations',
    method: 'post',
    data: {
      mobile,
      code
    }
  })
}
