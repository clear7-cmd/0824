<template>
  <div>
    <el-table
      :data="catelistG"
      style="width: 100%;margin-bottom: 20px;"
      row-key="id"
      border
      default-expand-all
      class="tab"
      :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
    >
      <el-table-column prop="id" label="分类编号" width="180">
      </el-table-column>
      <el-table-column prop="catename" label="分类名称" width="180">
      </el-table-column>
      <el-table-column label="图片">
        <template slot-scope="scope">
            <img :src="$event+scope.row.img" alt="">
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
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import { menudelete,catedelete } from "../../../util/req";
export default {
  data() {
    return {};
  },
  methods: {
    ...mapActions({
      catelistA: "classify/catelistA"
    }),
    fu(scope) {
      // console.log(scope.row);
    },
    redact(id) {
      this.$emit("emit", id);
    },
    dele(id) {
      console.log(id);
      catedelete({id:id}).then((res)=>{
           this.catelistA()
      })
    }
  },
  computed: {
    ...mapGetters({
      catelistG: "classify/catelistG"
    })
  },

  mounted() {

    this.catelistA();

  }
};
</script>
<style>
.tab {
  margin-top: 20px;
}
img{
  width: 80px;
}
</style>
