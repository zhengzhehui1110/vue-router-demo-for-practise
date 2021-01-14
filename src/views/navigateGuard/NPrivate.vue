<template>
    <div>
        <h4>我是独享导航守卫</h4>
        <p>打开console查看独享守卫打印的信息</p>
        <p>只有跳转该路由才会触发</p>
        <p>更新守卫只有在url改变,但仍指向同一个组件时触发</p>
    </div>
</template>

<script>
export default {
    beforeRouteEnter (to, from, next) {
        console.log('路由组件前置守卫被调用')
        // 渲染该组件时被调用
        // 不能访问组件实例,因为还没被创建
        next(vm=>{vm /*这里面可以通过vm访问组件实例this*/})
    },
    beforeRouteUpdate (to, from, next) {
        // 当前路由改变,但该组件被复用时调用
        // enter和update不会同时发生
        console.log('路由组件更新守卫被调用')
        next()
    },
    beforeRouteLeave (to, from, next) {
        console.log('路由组件后置守卫被调用')
        next()
    }
}
</script>