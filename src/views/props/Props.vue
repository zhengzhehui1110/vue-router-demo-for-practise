<template>
    <div>
        <h3>路由传参</h3>
        <p>porps is {{name}}</p>
        <p>尝试修改App.vue中的myProp,看看传参怎么变化</p>
    </div>
</template>

<script>
export default {
    props:{
        name:String
        // 接收别的页面传入的参数
    }
}
</script>