<template>
  <div class="movie-view">
    <div style="height: 3rem;">   <!-- 占据position:fixed带来的脱离文本流 -->
      <HeadNav></HeadNav>
    </div>
    <img class="loading" src="@/assets/loading.gif" alt="" v-show="isShowLoading"/>
    <div>
      <span class="hot">影院热映</span>
      <span class="more"><a href="">更多</a></span>
      <ul class="hot-movie-gallery">
        <li v-for="(item, index) in hotMoviesBox" :key="index" class="tc">
          <img :src="item.images.small"  alt="" class="clear-img-white-bottom-margin" />
          <br />
          <span>{{ item.title }}</span>
          <br />
          <el-rate
          v-model="hotValue"
          disabled
          show-score
          text-color="#ff9900"
          score-template="{ value }">
          </el-rate>
        </li>
      </ul>
    </div>

    <div>
      <span class="new">新片速递</span>
      <span class="more"><a href="">更多</a></span>
      <ul class="new-movie-gallery">
        <li v-for="(item, index) in newMoviesBox" :key="index" class="tc">
          <img :src="item.images.small"  alt="" class="clear-img-white-bottom-margin" />
          <br />
          <span>{{ item.title }}</span>
          <br />
          <el-rate
          v-model="newValue"
          disabled
          show-score
          text-color="#ff9900"
          score-template="{ value }">
          </el-rate>
        </li>
      </ul>
    </div>

    <div>
      <span class="top">发现好电影</span>
      <span class="more"><a href="" style="margin-left: 56%;">更多</a></span>
      <ul class="top-movie-gallery">
        <li v-for="(item, index) in topMoviesBox" :key="index" class="tc">
          <img :src="item.images.small"  alt="" class="clear-img-white-bottom-margin" />
          <br />
          <span>{{ item.title }}</span>
          <br />
          <el-rate
          v-model="topValue"
          disabled
          show-score
          text-color="#ff9900"
          score-template="{ value }">
          </el-rate>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import HeadNav from '@/components/HeadNav'

export default {
  name: 'MovieView',
  components: {
    HeadNav
  },
  data () {
    return {
      hotMoviesBox: [],
      hotValue: 4.9,
      newMoviesBox: [],
      newValue: 3.5,
      topMoviesBox: [],
      topValue: 4.5,
      isShowLoading: this.$store.state.movie.isShowLoading
    }
  },
  methods: {
    // getImages (_url) {
    //   if (_url !== undefined) {
    //     let _u = _url.substring(7)
    //     return 'https://images.weserv.nl/?url=' + _u
    //   }
    // }, // 图片缓存到本地
    hotMovies () {
      this.$Axios.get('/api/v2/movie/in_theaters', {
        count: 20
      })
        .then(response => {
          // response.data为请求数据的主体,subjects为数组
          // console.log(this) this指向vue实例
          const data = response.data.subjects
          for (let i = 0; i < 20; i++) {
            this.hotMoviesBox.push(data[i])
          }
        })
        .catch(error => {
          console.log(error)
        })
    },
    newMovies () {
      this.$Axios.get('/api/v2/movie/coming_soon', {
        count: 20
      })
        .then(response => {
          // response.data为请求数据的主体,subjects为数组
          const data = response.data.subjects
          for (let i = 0; i < 20; i++) {
            this.newMoviesBox.push(data[i])
          }
        })
        .catch(error => {
          console.log(error)
        })
    },
    topMovies () {
      this.$Axios.get('/api/v2/movie/top250', {
        count: 20
      })
        .then(response => {
          // response.data为请求数据的主体,subjects为数组
          const data = response.data.subjects
          for (let i = 0; i < 20; i++) {
            this.topMoviesBox.push(data[i])
          }
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  created () {
    // console.log(this)
    console.log(this.$store.state.movie.isShowLoading)
    this.hotMovies()
    this.newMovies()
    this.topMovies()
  }
}
</script>

<style lang="scss" scoped>
@mixin margin ($margin-left, $margin-right) {
  margin-left: $margin-left;
  margin-right: $margin-right;
} // 控制电影图片的边距

img.loading {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -40px;
  margin-top: -40px;
}

.hot,
.new,
.top {
  display: inline-block;
  font-size: 1.2rem;
  margin: 1.5rem 0 0 1rem;
}

.more a{
  font-size: 0.8rem;
  margin-left: 60%;
  color: #00b600;
}

ul.hot-movie-gallery,
ul.new-movie-gallery,
ul.top-movie-gallery  {
  width: 100%;
  height: 12rem;
  overflow-x: scroll; // 单个div出现滚动条
  // overflow-y: hidden;
  white-space: nowrap;
  margin-top: 1rem;
  li {
    display: inline-block;
    width: 25%;
    height: 100%;
    // margin-left: 2%;
    @include margin(2%,0);
    img {
      width: 100%;
      height: 70%;
    }
    span {
      display:-moz-inline-box;
      display:inline-block;
      width: 90%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  &:first-child {
    // margin-left: 5%;
    @include margin(5%,0);
  }
  &:last-child {
    // margin-right: 5%;
    @include margin(0,5%);
  }
  }
}

.el-rate{
  transform: scale(0.6);
  margin-left: -20%;
}
</style>
