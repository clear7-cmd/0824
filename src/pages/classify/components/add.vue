<template>
  <div>
    <el-dialog :title="'菜单' + show.tit" :visible.sync="show.show">
      <el-form :model="form">
        <el-form-item label="上级分类" :label-width="formLabelWidth">
          <el-select
            v-model="form.pid"
            placeholder="--请选择--"
            @change="change"
          >
            <el-option label="顶级菜单" :value="0"></el-option>
            <el-option
              v-for="item in catelistG"
              :key="item.id"
              :label="item.catename"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="分类名称" :label-width="formLabelWidth">
          <el-input v-model="form.catename" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="图片" :label-width="formLabelWidth" v-if="form.pid!=0">
          <el-upload
            class="avatar-uploader"
            action="#"
            :show-file-list="false"
            :on-change="changeImg"
          >
            <img v-if="imageUrl" :src="imageUrl" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
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
import { cateadd, cateinfo ,cateedit} from "../../../util/req";
import { mapActions, mapGetters } from "vuex";
export default {
  props: ["show"],
  components: {},
  computed: {
    ...mapGetters({
      catelistG: "classify/catelistG"
    })
  },

  methods: {
    changeImg(e) {
      var file = e.raw;
      console.log(file);
      this.imageUrl = URL.createObjectURL(file);
      this.form.img = file;
    },
    // 添加
    hidw() {
      cateadd(this.form).then(res => {
        this.show.show = false;
        this.catelistA()
      });
    },
    // 清空
    empty() {
      this.form = {
        pid: "",
        catename: "",
        img: null,
        status: 1
      };
      this.imageUrl = null
    },
    change() {
      // this.form.type = this.form.pid == 0 ? 1 : 2;
    },
    // 点击修改进行渲染
    look(e) {
      cateinfo(e).then(res => {
        this.form = res.data.list;
        this.show.tit = "编辑";
        this.form.id = e.id;

        this.imageUrl = this.$event+this.form.img
      });
    },
    // 点击进行修改
    compile() {
      console.log(this.form);
      cateedit(this.form).then(res => {
        this.show.show = false;
        this.catelistA()
      });
    },
    ...mapActions({
      catelistA: "classify/catelistA"
    })
  },
  mounted(){
    // 渲染页面
      this.catelistA()
  },
  data() {
    return {
      dialogFormVisible: true,
      imageUrl: "",
      form: {
        pid: "",
        catename: "",
        img: null,
        status: 1
      },
      tit: "添加",
      formLabelWidth: "120px",
      indexRouters: indexRouters
    };
  }
};
</script>
<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
