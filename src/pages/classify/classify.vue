<template>
  <div>
    <el-button
      type="primary"
      style="margin-top:10px"
      @click="isshow.show = true ;isshow.tit = '添加';$refs.add.empty()"
      >添加</el-button
    >
    <v-add :show="isshow" ref="add"></v-add>
    <v-list @emit="emit"></v-list>
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
    emit(e){
        this.isshow.ev = e
        this.isshow.show = true
        this.$refs.add.look({id:e})
    },
},
data() {
    return {
        isshow:{
            show:false,
            tit:'添加'
        }
    }
},
}
</script>
<style></style>
