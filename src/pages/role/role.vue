<template>
<div>
     <el-button type="primary" @click="hide">添加</el-button>
    <v-add :show="show" ref="one"></v-add>
    <v-list @list='emit'></v-list>
</div>
</template>
<script>
import vAdd from './components/add'
import vList from './components/list'
export default {
components:{
    vAdd,
    vList
},
methods:{
    hide(){
        this.show.isshow = true;
        this.show.tit = '添加'
        this.$refs.one.empty()
    },
    emit(e){
        this.show.isshow = true
        this.$refs.one.look(e)
    }
},
data() {
    return {
       show:{isshow : false ,tit:'添加'}
    }
},
}
</script>
<style>
</style>