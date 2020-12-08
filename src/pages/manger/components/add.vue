<template>
  <div>
    <el-dialog :title="'管理员' + show.tit" :visible.sync="show.isshow">
      <el-form :model="form">
        <el-form-item label="所属角色" :label-width="formLabelWidth">
          <el-select v-model="form.roleid" placeholder="-请选择--">
            <el-option
              v-for="item in listG"
              :key="item.id"
              :label="item.rolename"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="用户名" :label-width="formLabelWidth">
          <el-input v-model="form.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" :label-width="formLabelWidth">
          <el-input
            placeholder="请输入密码"
            v-model="form.password"
            show-password
          ></el-input>
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
        <el-button @click="show.isshow = false">取 消</el-button>
        <el-button @click="add" v-if="show.tit != '编辑'">确定</el-button>
        <el-button @click="edit" v-else>修改</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { useradd, userinfo, useredit } from "../../../util/req";
import { mapActions, mapGetters } from "vuex";
export default {
  props: ["show"],
  components: {},
  data() {
    return {
      form: {
        roleid: "",
        username: "",
        password: "",
        status: 0
      },
      wrap: {},
      formLabelWidth: "120px"
    };
  },
  computed: {
    ...mapGetters({
      listG: "role/listG",
    })
  },
  methods: {
    ...mapActions({
      listA: "role/listA",
      userA: "manger/userA",
      countA: "manger/countA",
    }),
    add() {
      useradd(this.form).then(res => {
        this.show.isshow = false;
        this.userA();
        this.countA();
      });
    },
    look(id) {
      this.show.tit = "编辑";
      this.show.isshow = true;
      this.form.uid = id;
      // this.wrap = e;
      userinfo({ uid: id }).then(res => {
        this.form = res.data.list;
      });
    },
    edit() {
      useredit(this.form).then(res => {
        this.show.isshow = false,
          this.userA();
          this.countA()
      });
    },
    empty() {
      this.form = {
        roleid: "",
        username: "",
        password: "",
        status: 0
      };
    }
  },
  mounted() {
    this.listA();
  }
};
</script>
<style></style>
