import {specscount,specslist} from '../../util/req'
const state = {
  total: 0,
  size:2,
  arr:[],
  page:1,
};
const mutations = {
  specscountM(state, res) {
    state.total = res;
  },
  setSize(state,res){
    state.size = res
  },
  specslistM(state,res){
    state.arr = res
  },
  page1(state,res){
    state.page = res
  }
};
const actions = {
  // 获取菜单列表
  specscountA(context) {
    specscount().then(res => {
      context.commit("specscountM", res.data.list[0].total);
    }); 
  },
  specslistA(context,str) {
    if(str!=null){
      context.commit('page1',str)
    }
    specslist({size:context.state.size,page:context.state.page}).then(res => {
      var m = res.data.list
          m.forEach(item=>{
            if(item.attrs!=""){
            item.attrs = JSON.parse(item.attrs)
             }
          })
      context.commit("specslistM", m);
    }); 
  },
  list(context,str){
    
  }
};
const getters = {
  count(state) {
    return state.total;
  },
  specslistG(state){
    return state.arr
  },
  pageG(state){
    return state.page
  }
};

export default {
  state,
  mutations,
  actions,
  getters,
  namespaced: true
};
