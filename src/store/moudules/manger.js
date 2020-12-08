import {userlist,usercount} from '../../util/req'
const state = {
  arr: [],
  total:0,
  size: 2,
  page:1
};
const mutations = {
  countM(state,res){
      state.total = res
  },
    userM(state, res) {
    state.arr = res;
  },
  papeM(state, e) {
    state.page = e;
  },


};
const actions = {
  countA(context){
    usercount().then(res=>{
      context.commit('countM',res.data.list[0].total)
    })
  },
  // 获取菜单列表
  userA(context) {
    userlist({size: context.state.size, page: context.state.page}).then(res => { 
      context.commit("userM", res.data.list);
    });
  },
  changeCurrentPages(context,e) {
      context.commit('papeM',e)
      context.dispatch('userA')
  },

};
const getters = {
    userG(state) {
    return state.arr;
  },
    countG(state) {
    return state.total;
  },
    size(state) {
    return state.size;
  },
  pageG(state){
    return state.page;
  }

};

export default {
  state,
  mutations,
  actions,
  getters,
  namespaced: true
};
