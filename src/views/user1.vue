<template>
    <div>
        <h3>动态路由</h3>
        <p>user is {{$route.params.id}}</p>
        <p>place is {{$route.params.place}}</p>
        <p>path is {{$route.path}}</p>
        <p>user是静态路径,id和place是动态路径参数</p>
        <p>手动修改App.vue中的路径,尝试更改id和place</p>
    </div>
</template>

<script>
export default {
    methods: {
        goBackHome(){
            this.$router.push("/")
            // 编程路由导航,跳转到指定的路径
            // 可以设置某个按钮的点击事件调用该函数
        }
    },
}
</script>