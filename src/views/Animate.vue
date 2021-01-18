<template>
    <div>
        <h3>过渡动效</h3>
        <el-row :gutter="10">
            <el-col :span="6">
                <el-select v-model="transitionName" placeholder="选择动画效果">
                    <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                    </el-option>
                </el-select>
            </el-col>
            <el-col :span="6">{{transitionName}}</el-col>
            <el-button type="primary"
            @click="jump('/animatePage/test')">确认</el-button>
            <el-button type="primary" @click="goback()">还原</el-button>
        </el-row>
        <transition :name="transitionName">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
export default {
    data() {
        return {
            options:[
                {
                    value:"slide-right",
                    label:'slide-right',
                },
                {
                    value:"slide-left",
                    label:'slide-left',
                },
                {
                    value:"fade",
                    label:'fade'
                },
            ],
            transitionName:'fade',
        }
    },
    methods: {
        jump(val) {
            this.$router.push(val);
        },
        goback() {
            this.$router.back()
        }
    },
}
</script>

<style lang="css">
    .fade-enter-active{
        transition: opacity 3s;
    }
    .fade-enter, .fade-leave-to,
    .slide-right-enter, .slide-left-enter{
        opacity: 0;
    }
    .slide-right-enter-active,
    .slide-left-enter-active{
        transition: 1s;
    }
    .slide-right-enter{
        transform: translateX(30px);
    }
    .slide-left-enter{
        transform: translateX(-30px);
    }

</style>