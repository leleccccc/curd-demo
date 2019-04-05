<template>
  <div id="app" class="tc">
    <img src="@/assets/logo.png" />
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  watch: {
    $route (to, from) {
      console.log('来自' + from.path) // 从哪来
      console.log(`跳转到${to.path}`) // 到哪去
    }
    // $route: {
    //   handler (val, oldval) {
    //     console.log(val) // 新路由信息
    //     console.log(oldval) // 老路由信息
    //   },
    //   deep: true // 深度监听
    // }
  }
}
</script>

<style>
@import 'style/public.css';

#app {
  margin-top:30%;
}
</style>
