<template>
  <div>
    <el-table
      :data="specslistG"
      style="width: 100%;margin-bottom: 20px;"
      row-key="id"
      border
      default-expand-all
      class="tab"
      :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
    >
      <el-table-column prop="id" label="规格编号" width="180">
      </el-table-column>
      <el-table-column prop="specsname" label="规格名称" width="180">
      </el-table-column>
      <el-table-column prop="attrs" label="规格属性" width="600"> 
        <template slot-scope="scope">
            <el-tag  v-for="item in scope.row.attrs" :key='item' class="tag" >{{item}}</el-tag>
        </template>
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
    <el-pagination background layout="prev, pager, next" :page-size='2' :current-page='pageG' :total="count" @current-change='change'>
    </el-pagination>
    
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import { catedelete,specsdelete } from "../../../util/req";
export default {
  data() {
    return {
      // size = 
    };
  },
  methods: {
    redac(scope){
      // console.log(scope);
    },
    // 分页
    change(e){
        this.specslistA(e)
    },
    ...mapActions({
      specslistA: "spec/specslistA",
      specscountA: "spec/specscountA"
    }),
    fu(scope) {
      // console.log(scope.row);
    },
    // 编辑
    redact(id) {
      this.$emit("emit", id);
    },
    // 删除
    dele(id) {
      console.log(id);
      specsdelete({ id: id }).then(res => {
        this.specslistA(1);
        this.specscountA()
      });
    }
  },
  computed: {
    ...mapGetters({
      specslistG: "spec/specslistG",
      count: "spec/count",
      pageG:"spec/pageG"
    })
  },

  mounted() {
    this.specscountA();
    this.specslistA(1)
  }
};
</script>
<style>
.tab {
  margin-top: 20px;
}
img {
  width: 80px;
}
.tag{
  margin-left: 10px;
}
</style>
