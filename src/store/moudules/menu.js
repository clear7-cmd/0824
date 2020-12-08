import {rend,} from '../../util/req'
const state = {
  arr: [],
};
const mutations = {
  rendM(state, res) {
    state.arr = res;
  },

};
const actions = {
  // 获取菜单列表
  rendA(context) {
    rend({istree:true}).then(res => {
      context.commit("rendM", res.data.list);
    });
  },

};
const getters = {
  rendG(state) {
    return state.arr;
  },

};

export default {
  state,
  mutations,
  actions,
  getters,
  namespaced: true
};
