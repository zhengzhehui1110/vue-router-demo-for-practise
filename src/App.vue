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
          <el-menu>
            <el-menu-item index="1">
              <span slot="title">
                <router-link :to="{name:'NavigateGuard'}">
                  导航守卫
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
