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
            <el-button type="primary"
            @click="jump('/animatePage/test')">确认</el-button>
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
                    value:"1",
                    label:'slide-right',
                },
                {
                    value:"2",
                    label:'slide-left',
                },
                {
                    value:"3",
                    label:'fade'
                },
            ],
            transitionName:'',
        }
    },
    methods: {
        jump(val) {
            this.$router.push(val);
        }
    },
}
</script>