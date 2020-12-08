<template>
  <div>
    <el-dialog :title="'菜单' + show.tit" :visible.sync="show.show">
      <el-form :model="form">
        <el-form-item label="规格名称" :label-width="formLabelWidth">
          <el-input v-model="form.specsname" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item
          label="规格属性"
          :label-width="formLabelWidth"
          v-for="(item, index) in arr"
          :key="index"
        >
          <el-input
            v-model="item.value"
            autocomplete="off"
            class="int1"
          ></el-input>
          <el-button type="primary" @click="add" v-if="index == 0"
            >新增加规格属性</el-button
          >
          <el-button type="danger" @click="remove(index)" v-else
            >删除</el-button
          >
        </el-form-item>
        <el-form-item label="状态" :label-width="formLabelWidth">
          <el-switch
            v-model="form.status"
            active-color="#13ce66"
            inactive-color="#ff4949"
            :active-value="1"
            :inactive-value="2"
          >
          </el-switch>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="show.show = false">取 消</el-button>
        <el-button @click="hidw" v-if="show.tit != '编辑'">确定</el-button>
        <el-button @click="compile" v-else>修改</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { indexRouters } from "../../../router/index";
import { specsadd, specsinfo, specsedit } from "../../../util/req";
import { mapActions, mapGetters } from "vuex";
export default {
  props: ["show"],
  data() {
    return {
      dialogFormVisible: true,
      arr: [
        {
          value: ""
        }
      ],
      form: {
        specsname: "",
        attrs: [],
        status: 1
      },
      tit: "添加",
      formLabelWidth: "120px",
      indexRouters: indexRouters
    };
  },
  computed: {
    ...mapGetters({
      catelistG: "classify/catelistG"
    })
  },

  methods: {
    //追加
    add() {
      this.arr.push({ value: "" });
    },
    //删除
    remove(index) {
      this.arr.splice(index, 1);
    },
    // 添加
    hidw() {
      this.form.attrs = JSON.stringify(
        this.arr.map(item => {
          return item.value;
        })
      );
      specsadd(this.form).then(res => {
        this.show.show = false;
        this.specscountA();
      });
    },
    // 清空
    empty() {
      this.form = {
        specsname: "",
        attrs: "",
        status: 1
      };
      this.arr = [
        {
          value: ""
        }
      ];
    },
    change() {
      // this.form.type = this.form.pid == 0 ? 1 : 2;
    },
    // 点击修改进行渲染
    look(e) {
      specsinfo(e).then(res => {
        this.form = res.data.list[0];
        this.arr = JSON.parse(this.form.attrs).map(item => {
          return { value: item };
        });
        console.log(this.form);
        this.show.tit = "编辑";
        this.form.id = e.id;
      });
    },
    // 点击进行修改
    compile() {
      this.form.attrs = JSON.stringify(
        this.arr.map(item => {
          return item.value;
        })
      );
      console.log(this.form);
      specsedit(this.form).then(res => {
        this.show.show = false;
        this.specslistA();
      });
    },
    ...mapActions({
      catelistA: "classify/catelistA",
      specscountA: "spec/specscountA",
      specslistA: "spec/specslistA"
    })
  },
  mounted() {
    // 渲染页面
    this.catelistA();
  }
};
</script>
<style>
.int {
  width: 85.5%;
}
.int1 {
  width: 74.7%;
}
</style>
