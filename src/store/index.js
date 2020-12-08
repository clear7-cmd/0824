import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import menu from './moudules/menu.js'
import role from './moudules/role.js'
import manger from './moudules/manger.js'
import spec from './moudules/spec.js'
import classify from './moudules/classify.js'
export default new Vuex.Store({
        modules:{
            menu,
            role,
            manger,
            classify,
            spec
        }
})