const state = {
  isShowLoading: true
}

const mutations = {
  startLoading (state) {
    state.isShowLoading = true
  },
  finishLoading (state) {
    state.isShowLoading = false
  }
}

export default {
  state,
  mutations
}
