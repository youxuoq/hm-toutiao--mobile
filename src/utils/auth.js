// 封装本地存储相关的操作
// 存储token
export const setToken = (data) => {
  window.localStorage.setItem('token', JSON.stringify(data))
}
// 读取token
export const getToken = () => {
  return JSON.parse(window.localStorage.getItem('token'))
}
// 删除token
export const removeToken = () => {
  window.localStorage.removeItem('token')
}
