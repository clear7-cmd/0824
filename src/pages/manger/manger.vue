<template>
  <div>
    <el-button type="primary" class="btn" @click="hide">追加</el-button>
    <v-add :show="show" ref="one"></v-add>
    <v-list @emit="emit"></v-list>
  </div>
</template>
<script>
import vAdd from "./components/add";
import vList from "./components/list";

export default {
  components: {
    vAdd,
    vList
  },
  data() {
    return {
      show: { isshow: false, tit: "添加" }
    };
  },
  methods: {
    hide() {
      this.show.isshow = true;
      this.show.tit = '添加';
      this.$refs.one.empty()
    },
    emit(id) {
      this.$refs.one.look(id);
      // console.log(this.$refs.one);
    }
  }
};
</script>
<style>
.btn {
  margin-top: 20px;
}
</style>
