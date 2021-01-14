<template>
    <div>
        <h3>导航守卫</h3>
        <el-col :span="24">
            <el-row :gutter="30">
                <router-link :to="{name:'NGlobal'}">全局守卫</router-link>
            </el-row>
            <el-row :gutter="30">
                <router-link to='/navigate/private/1'>独享守卫/路由组件守卫</router-link>
            </el-row>
            <el-row :gutter="30">
                <router-link to='/navigate/private/2'>查看路由组件复用的情况</router-link>
            </el-row>
        </el-col>
        <el-col :span="1"></el-col>
        <router-view></router-view>
        <img src="https://img-blog.csdnimg.cn/20190912112858438.png" alt="">
    </div>
</template>

<style lang="css">
    img{
        width: 40rem;
    }
</style>