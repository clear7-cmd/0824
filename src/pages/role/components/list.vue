<template>
<div>
    <el-table
      :data="listG"
      style="width: 100%;margin-bottom: 20px;"
      row-key="id"
      border
      default-expand-all
      class="tab"
      :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
    >
      <el-table-column prop="id" label="角色编号" width="180">
      </el-table-column>
      <el-table-column prop="rolename" label="角色名称" width="180">
      </el-table-column>
      <el-table-column label="状态">
        <template slot-scope="scope">
          <el-button type="primary" v-if="scope.row.status == 1"
            >启用</el-button
          >
          <el-button type="danger" v-else>禁用</el-button>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="primary" @click="redact(scope.row.id)"
            >编辑</el-button
          >
          <el-button type="danger" @click="dele(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
</div>
</template>
<script>

import {mapGetters,mapActions} from 'vuex'
import { roledelete } from '../../../util/req'
export default {
components:{},
methods:{
    ...mapActions({
        listA:'role/listA'
    }),
    redact(id){
        this.$emit('list',id)
    },
    dele(id){
        roledelete({id:id}).then((res)=>{
            this.listA()
        })
    },


},
computed:{
    ...mapGetters({
        listG:"role/listG"
    })
},
mounted(){
    this.listA()
}
}
</script>
<style>
</style>