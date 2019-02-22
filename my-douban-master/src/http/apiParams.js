const apiParams = {
  base_url: '/api',
  // 电影借口,get请求,count为借口请求的条数
  hotMovie: '/v2/movie/in_theaters',
  topMovie: '/v2/movie/top250',
  newMovie: '/v2/movie/coming_soon'
}

module.exports = apiParams
