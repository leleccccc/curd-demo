<template>
  <div>
    <p>欢迎来到人员管理系统</p>
    <footer-nav :class="{ 'isIndex':isNowPage }"></footer-nav>
  </div>
</template>

<script>
import FooterNav from '@/components/FooterNav'

export default {
  name: 'Index',
  components: {
    FooterNav
  },
  data () {
    return {
      isNowPage: true
    }
  }
}
</script>

<style scoped>
</style>
