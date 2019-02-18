<template>
  <div class="footer fix">
    <ul>
      <!-- active-class(全包含匹配)都能匹配'/'和'/manage',添加exact(默认为false)即可 -->
      <li><router-link to="/" class="{ isIndex }" active-class="active" exact>首页</router-link></li>
      <li><router-link to="/manage" active-class="active" exact>人员管理</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'FooterNav',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.footer {
  width:100%;
  height:50px;
  bottom: 0;
}

ul {
  display: flex;
  height:50px;
}

ul li {
  flex:1;
  height:50px;
  text-align: center;
  line-height: 50px;
  background: #f1f1f1;
}

/* .isIndex{
  background: #d3d3d3;
  color:#41b883;
} */

/* .isIndex li:first-child{
  background: #d3d3d3;
}

.isIndex li:first-child a{
  color:#41b883;
}

.isManage li:first-child{
  background: #d3d3d3;
}

.isManage li:first-child a{
  color:#41b883;
} */

.active {
  color:#41b883;
}

.active li{
  background: #d3d3d3;
}
</style>
