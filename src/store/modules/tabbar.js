const tabbar = {
  namespaced: true,
  state: {
    // 初期位置
    index: 0
  },
  mutations: {
    set (state, index) {
      state.index = index
    }
  }
}

export default tabbar
