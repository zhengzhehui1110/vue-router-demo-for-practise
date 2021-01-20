<template>
    <div id="father">
        <div style="float:left">id = father</div>
        <h3>源码中的registerInstance方法在哪些组件中有?</h3>
        <Children></Children>
    </div>
</template>

<script>
import Children from '@/views/regIn/children.vue'

export default {
    name:'father',
    components:{
        Children,
    },
}
</script>

<style lang="css">
    #father{
        border:solid blue 1px;
        padding: 20px;
    }
</style>