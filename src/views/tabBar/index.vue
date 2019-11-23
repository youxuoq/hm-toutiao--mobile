<template>
  <div class="container-tabBar">
    <div class="header">
      <van-nav-bar
        title="首页"
        fixed
      />
    </div>
    <div class="main">
      <router-view></router-view>
    </div>
    <div class="tarBar">
      <van-tabbar v-model="active">
        <van-tabbar-item icon="wap-home-o">首页</van-tabbar-item>
        <van-tabbar-item icon="video-o">视频</van-tabbar-item>
        <van-tabbar-item icon="comment-o">消息</van-tabbar-item>
        <van-tabbar-item icon="contact">我的</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tabBar',
  data () {
    return {
      active: 0
    }
  }
}
</script>

<style lang="less" scoped>
.container-tabBar {
  width: 100%;
  height: 100%;
  .header {
    .van-nav-bar {
      background-color: #3296fa;
      .van-nav-bar__title {
        color: #fff;
      }
    }
  }
  .main {
  }
  .tabBar {
  }
}
</style>
