<template>
  <div>
    <el-container>
      <el-aside width="200px"
        >Aside

        <el-menu
          default-active="2"
          router
          class="el-menu-vertical-demo"
          background-color="#20222a"
          text-color="#fff"
          active-text-color="#ffd04b"
          style="border:0"
        >
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-submenu index="1" style="overflow: hidden;">
            <template slot="title">
              <i class="el-icon-s-tools"></i>
              <span>系统设置</span>
            </template>
            <el-menu-item index="/index/menu">菜单管理</el-menu-item>
            <el-menu-item index="/index/role">角色管理</el-menu-item>
            <el-menu-item index="/index/manger">管理员管理</el-menu-item>
          </el-submenu>
          <el-submenu index="4" style="overflow: hidden;">
            <template slot="title">
              <i class="el-icon-shopping-bag-2"></i>
              <span slot="title">商城管理</span>
            </template>
            <el-menu-item index="/index/classify">商品分类</el-menu-item>
            <el-menu-item index="/index/spec">商品规格</el-menu-item>
            <el-menu-item index="/index/goods">商品管理</el-menu-item>
            <el-menu-item index="/index/vip">会员管理</el-menu-item>
            <el-menu-item index="/index/banner">轮播图管理</el-menu-item>
            <el-menu-item index="/index/seckill">秒杀活动</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-container>
        <el-header height="80px">{{title.username}}
          <el-button type="primary" class="btn" @click="btn">退出</el-button>
        </el-header>
        <el-main>
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }"></el-breadcrumb-item>
            <el-breadcrumb-item>{{ $route.name }}</el-breadcrumb-item>
          </el-breadcrumb>

          
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title:""
    }
  },
  components: {},
  methods: {
    btn(){
      sessionStorage.setItem('login',"")
      this.$router.push('login')
    }
  },
  mounted() {
   this.title =  JSON.parse(sessionStorage.getItem('login'))
  }
};
</script>
<style>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 80px;
}

.el-aside {
  background-color: #20222a;
  color: #333;
  text-align: left;
  height: 100vh;
  overflow: hidden;
}

.el-main {
  background-color: #ffffff;
  color: #333;
}
.btn{
  position: absolute;
  right: 0px;
  top: 20px;
}
</style>
