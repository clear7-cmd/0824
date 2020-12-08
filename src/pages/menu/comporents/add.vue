<template>
  <div>
    <el-dialog :title="'菜单'+show.tit" :visible.sync="show.show">
      <el-form :model="form">
        <el-form-item label="菜单名称" :label-width="formLabelWidth">
          <el-input v-model="form.title" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="上级菜单" :label-width="formLabelWidth">
          <el-select
            v-model="form.pid"
            placeholder="--请选择--"
            @change="change"
          >
            <el-option label="顶级菜单" :value="0"></el-option>
            <el-option v-for="item in rendG" :key="item.id"  :label="item.title" :value="item.id"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="菜单类型" :label-width="formLabelWidth">
          <template>
            <el-radio v-model="form.type" :label="1" disabled>目录</el-radio>
            <el-radio v-model="form.type" :label="2" disabled>菜单</el-radio>
          </template>
        </el-form-item>
        <el-form-item
          label="菜单图标"
          :label-width="formLabelWidth"
          v-if="form.type == 1"
        >
          <el-select v-model="form.icon" placeholder="--请选择--">
            <el-option label="星星" :value="'el-icon-star-off'">
              <i class="el-icon-star-off"></i>
            </el-option>
            <el-option label="i" :value="'el-icon-info'">
              <i class="el-icon-info"></i>
            </el-option>
            <el-option label="相机" :value="'el-icon-camera'">
              <i class="el-icon-camera"></i>
            </el-option>
            <el-option label="小人" :value="'el-icon-s-custom'">
              <i class="el-icon-s-custom"></i>
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="菜单地址" :label-width="formLabelWidth" v-else>
          <el-select v-model="form.url" placeholder="--请选择--">
            <el-option
              v-for="item in indexRouters"
              :label="'/' + item.path"
              :value="item.name"
              :key="item.path"
            >
            </el-option>
          </el-select>
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
        <el-button @click="hidw" v-if="show.tit!='编辑'">确定</el-button>
        <el-button @click="compile" v-else>修改</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { indexRouters } from "../../../router/index";
import { addition,info,dit } from "../../../util/req";
import { mapActions, mapGetters } from "vuex";
export default {
  props: ["show"],
  components: {},
  computed:{
    ...mapGetters({
      rendG: "menu/rendG"
    })
  },
  methods: {
    hidw() {
      addition(this.form).then(res => {
        this.show.show = false;
        this.rendA()
        
      });
    },
    empty(){
       this.form={
        title: "",
        pid: "",
        type: 0,
        icon: "",
        url: "",
        status: 1
      }
    },
    change() {
      this.form.type = this.form.pid == 0 ? 1 : 2;
    },
    look(e){
      info(e).then((res)=>{
        this.form = res.data.list
        this.show.tit = '编辑'
        this.form.id = e.id
        
      })
    },
    compile(){
      console.log(this.form);
      dit(this.form).then((res)=>{
          this.show.show = false;
          this.rendA()
      })
    },
    ...mapActions({
      rendA:"menu/rendA"
    })
  },
  data() {
    return {
      dialogFormVisible: true,
      form: {
        title: "",
        pid: "",
        type: 0,
        icon: "",
        url: "",
        status: 1
      },
      tit : '添加',
      formLabelWidth: "120px",
      indexRouters: indexRouters
    };
  }
};
</script>
<style></style>
