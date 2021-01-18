<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <el-container>
      <el-aside width="200px">
        <el-col :span="20">
          <h3>MENU</h3>
          <el-menu background-color="#F0F0F0">
            <el-menu-item index="1">
              <span slot="title">
                <router-link :to="{name:'NavigateGuard'}">
                  导航守卫
                </router-link>
              </span>
            </el-menu-item>
            <el-menu-item index="2">
              <span slot="title">
                <router-link :to="{name:'User1'}">
                  动态路由
                </router-link>
              </span>
            </el-menu-item>
            <el-menu-item index="3">
              <span slot="title">
                <router-link :to="{name:'Props',params:{name:myProp}}">
                  路由传参
                </router-link>
              </span>
            </el-menu-item>
            <el-menu-item index="4">
              <span slot="title">
                <router-link :to="{name:'NavigateF'}">
                  编程式导航
                </router-link>
              </span>
            </el-menu-item>
            <el-menu-item index="5">
              <span slot="title">
                <router-link :to="{name:'AnimatePage'}">
                  过渡动效
                </router-link>
              </span>
            </el-menu-item>




          </el-menu>
        </el-col>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
    <!-- <router-view/> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      myProp:'HELLO',
    }
  },
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav,a {
  font-weight: bold;
  color: #2c3e50;
}

#nav,a.router-link-exact-active {
  color: #4863ff;
}

</style>
