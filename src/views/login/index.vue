<template>
  <div class="login-index">
    <van-nav-bar title="登录" />
    <form action>
      <van-cell-group>
        <van-field
          class="icon-mobile userPhone"
          v-model="user.mobile"
          clearable
          placeholder="请输入用户名"
          right-icon="question-o"
        />
        <van-field
          class="icon-lock-rounded userPsd"
          v-model="user.code"
          type="password"
          placeholder="请输入密码"
        />
        <button class="code">获取验证码</button>
        <van-button class="login" type="info" @click.prevent="reqLogin">登录</van-button>
      </van-cell-group>
    </form>
  </div>
</template>
<script>
import '@/styles/font/index.css'
import { login } from '@/api/user.js'
export default {
  name: 'loginIndex',
  data () {
    return {
      user: {
        mobile: '18801185985',
        code: '246810'
      }
    }
  },
  methods: {
    // 登录
    async reqLogin () {
      const res = await login(this.user)
      console.log(res)
    }
  }
}
</script>
<style lang="less" scoped>
.login-index {
  width: 750px;
  height: 100%;
  background-color: #f5f7f9;
  .van-nav-bar {
    background-color: #1989fa;
    .van-nav-bar__title {
      color: #fff;
    }
  }
  form {
    box-sizing: border-box;
    width: 100%;
    height: auto;
    padding: 0px 32px;
    background-color: #fff;
    position: relative;
    .userPhone {
      padding-right: 10px;
      padding-left: 0px;
    }
    .userPsd {
      width: 500px;
      padding-left: 0px;
      &.van-cell:not(:last-child)::after {
        border-bottom: none;
      }
    }
    .code {
      width: 155px;
      height: 50px;
      line-height: 40px;
      border: none;
      outline: none;
      border-radius: 30px;
      font-size: 24px;
      color: #666666;
      position: absolute;
      right: 0px;
      bottom: 20px;
      background-color: #ededed;
      &::after {
        z-index: 999;
        content: "";
        display: block;
        width: 2px;
        height: 48px;
        background-color: #ededed;
        position: absolute;
        left: -20px;
        top: 0px;
      }
    }
    .login {
      position: absolute;
      bottom: -120px;
      width: 100%;
      border-radius: 20px;
      font-size: 32px;
      color: #fff;
    }
  }
}
</style>
