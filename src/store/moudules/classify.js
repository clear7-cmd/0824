import {catelist} from '../../util/req'
const state = {
  arr: [],
};
const mutations = {
  catelistM(state, res) {
    state.arr = res;
  },

};
const actions = {
  // 获取菜单列表
  catelistA(context) {
    catelist({istree:true}).then(res => {
      context.commit("catelistM", res.data.list);
    });
  },

};
const getters = {
  catelistG(state) {
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
