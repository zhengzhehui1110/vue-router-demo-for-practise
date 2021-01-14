<template>
    <div>
        <h3>导航守卫</h3>
        <el-col :span="24">
            <router-link :to="{name:'NGlobal'}">全局守卫</router-link> | 
            <router-link to='/navigate/private/1'>独享守卫/路由组件守卫</router-link> | 
            <router-link to='/navigate/private/2'>查看路由组件复用的情况</router-link>
        </el-col>
        
        <router-view></router-view>
        <img src="https://img-blog.csdnimg.cn/20190912112858438.png" alt="">
    </div>
</template>

<style lang="css">
    img{
        width: 40rem;
        margin: 20px;
    }
</style>