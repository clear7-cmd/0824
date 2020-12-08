<template>
  <div>
    <div class="color">
      <div class="input">
        <h3>登录</h3>
        <div>
          <input v-model="form.username" type="text" placeholder="请输入账号" />
        </div>
        <div>
          <input
            v-model="form.password"
            type="password"
            placeholder="请输入密码"
          />
        </div>
        <div><button @click="btn">登录</button></div>
      </div>
    </div>
  </div>
</template>
<script>
import { userlogin } from "../../util/req";
export default {
  components: {},
  data() {
    return {
      form: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    btn() {
      userlogin(this.form).then(res => {
        if (res.data.code == 200) {
          this.$router.push('/index')
          sessionStorage.setItem('login',JSON.stringify(this.form))
        }else{
          alert(res.data.msg)
        }
      });
    }
  }
};
</script>
<style scoped>
.color {
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to right, #563443, #303d60);
}
.input h3 {
  font-size: 23px;
  margin-top: 35px;
}
.input input {
  width: 300px;
  height: 40px;
  border: 1px solid #dcdfe6;
  border-radius: 5px;
  padding-left: 10px;
  font-size: 14px;
}
.input div {
  margin-top: 20px;
}
.input button {
  width: 300px;
  height: 40px;
  border-radius: 5px;
  color: #fff;
  background: #409eff;
}
.input {
  width: 500px;
  height: 300px;
  text-align: center;
  border-radius: 15px;
  background: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
}
</style>
