<template>
  <div>
    <el-dialog :title="'角色' + show.tit" :visible.sync="show.isshow">
      <el-form :model="form">
        <el-form-item label="角色名称" :label-width="formLabelWidth">
          <el-input v-model="form.rolename" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="角色权限" :label-width="formLabelWidth">
          <el-tree
            :data="rendG"
            show-checkbox
            node-key="id"
            ref="tree"
            :props="{ children: 'children', label: 'title' }"
          >
          </el-tree>
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
import { mapActions, mapGetters } from "vuex";
import { roleadd, roleinfo, roleedit } from "../../../util/req";
export default {
  props: ["show"],
  components: {},
  data() {
    return {
      dialogTableVisible: true,
      dialogFormVisible: true,
      form: {
        rolename: "",
        menus: [],
        status: 1
      },
      formLabelWidth: "120px"
    };
  },
  methods: {
    ...mapActions({
      rendA: "menu/rendA",
      listA: "role/listA"
    }),
    add() {
      this.show.isshow = false;
      this.form.menus = JSON.stringify(this.$refs.tree.getCheckedKeys());
      roleadd(this.form).then(res => {});
      this.listA();
    },
    look(id) {
      roleinfo({ id: id }).then(res => {
        this.form = res.data.list;
        this.form.id = id;
        this.show.tit = "编辑";
        console.log(this.form);
        if (this.form.menus != "") {
          this.$refs.tree.setCheckedKeys(JSON.parse(this.form.menus));
        }
      });
    },
    empty() {
      this.form = {
        rolename: "",
        menus: [],
        status: 1
      };
      this.$nextTick(() => {
        this.$refs.tree.setCheckedKeys(this.form.menus);
      });
    },
    edit() {
        roleedit(this.form).then(res => {
            this.show.isshow = false;
            this.listA()
        });
    }
  },
  computed: {
    ...mapGetters({
      rendG: "menu/rendG"
    })
  },
  mounted() {
    this.rendA();
  }
};
</script>
<style></style>
