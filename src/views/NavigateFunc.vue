<template>
    <div>
        <el-row :gutter="30">
            
            <el-col :span="6">
                <el-input size="small" 
                type="number" 
                v-model="step" 
                placeholder="input step">
            </el-input>
            </el-col>
            <el-button type="primary"
            @click="RouterGo(step)"
            >router.go</el-button>
        </el-row>
        <el-row :gutter="40">
            <el-col :span="6">
                <el-select v-model="pageName" placeholder="请选择">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                    >
                    </el-option>
                </el-select>
            </el-col>
            <el-button type="primary"
            @click="RouterPush(pageName)">router.push</el-button>                
        </el-row>
        <el-row :gutter="40">
            <el-button type="primary">router.replace</el-button>
        </el-row>
    </div>
</template>

<script>
export default {
    data() {
        return {
            step:0,
            pageName:'NavigateGuard',
            // value:'', // 这是在选择器上的被选中的值
            options:[
                {value:'NavigateGuard',label:'NavigateGuard'},
                {value:'User1',label:'User1'},
                {value:'Props',label:'Props'},
            ]
        }
    },
    methods:{
        RouterGo(val){
            this.$router.go(val);
        },
        RouterPush(val){
            this.$router.push({name:val});
        }
    }
}
</script>