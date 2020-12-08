import {rolelist} from '../../util/req'
const state = {
  list:[]
};
const mutations = {
  listM(state,res){
    state.list = res
  }
};
const actions = {
  // 获取菜单列表
  listA(context){
    rolelist().then(res=>{
      context.commit('listM',res.data.list)
    })
  }
};
const getters = {
  listG(state){
    return state.list
  }
};

export default {
  state,
  mutations,
  actions,
  getters,
  namespaced: true
};
