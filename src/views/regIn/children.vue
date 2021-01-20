<template>
    <div id="children">
        <h4>我是没有注册在路由表中的子组件</h4>
        <span>console打印出具有该方法的组件</span><br>
        <el-button type="primary"
        @click="findRI()">开始查找</el-button>
    </div>
</template>

<script>
export default {
    name:'Children',
    methods:{
        findRI() {
            var t = this;
            while(t) {
                if(typeof t.$options._parentVnode.data.registerRouteInstance === 'function'){
                    console.log(t.$el);
                    return;
                }
                else{
                    t = t.$parent;
                }
            }
            console.log('not found');
            return;
        }
    },
}
</script>

<style lang="css">
    #children{
        border: solid black 1px;
        padding: 20px;
    }
</style>