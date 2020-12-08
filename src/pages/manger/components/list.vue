<template>
  <div>
    <el-table
      :data="userG"
      style="width: 100%;margin-bottom: 20px;"
      row-key="id"
      border
      default-expand-all
      class="tab"
      :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
    >
      <el-table-column prop="id" label="用户编号" width="180">
      </el-table-column>
      <el-table-column prop="username" label="用户名" width="180">
      </el-table-column>
      <el-table-column prop="rolename" label="所属于角色"> </el-table-column>
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
          <el-button type="primary" @click="redact(scope.row.uid)"
            >编辑</el-button
          >
          <el-button type="danger" @click="dele(scope.row.uid)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      :current-page='pageG'
      layout="prev, pager, next"
      :total="countG"
      :page-size="size"
      @current-change="fu"
    >
    </el-pagination>
  </div>
</template>
<script>
import { usercount, userdelete } from "../../../util/req";
import { mapGetters, mapActions } from "vuex";
export default {
  components: {},
  data() {
    return {
      // length: 0,
      // page1: 1
      // size: 2
    };
  },
  computed: {
    ...mapGetters({
      userG: "manger/userG",
      // userG: "manger/userG",
      countG: "manger/countG",
      size: "manger/size",
      pageG: "manger/pageG"
    })
  },
  methods: {
    ...mapActions({
      userA: "manger/userA",
      countA: "manger/countA",
      changeCurrentPages: "manger/changeCurrentPages"
    }),
    fu(e) {
      this.changeCurrentPages(e);
    },
    redact(id) {
      console.log({ id: id, size: this.size, page: this.pageG });
      this.$emit("emit", id);
    },
    dele(id) {
      userdelete({ uid: id }).then(res => {
        this.countA();
        this.changeCurrentPages(1);

        // this.userA();
      });
    }
  },
  mounted() {
    this.countA();
    // usercount().then(res => {
    //   this.length = res.data.list[0].total;
    // });
    this.userA();
  }
};
</script>
<style></style>
