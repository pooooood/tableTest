<template>
    <div class="table">
        <ListTable :options="tableOptions" />
    </div>
</template>

<script setup>
// ... 导入和注册 VueVTable 组件的代码
import { ListTable } from '@visactor/vue-vtable'
import { ref } from 'vue'

const tableOptions = ref({
    header: [
        { field: '0', caption: '名称' },
        { field: '1', caption: '年龄' },
        { field: '2', caption: '性别' },
        { field: '3', caption: '爱好' }
    ],
    records: new Array(1000).fill(['张三', 18, '男', '🏀'])
})
</script>

<style>
.table {
    width: 1000px;
    height: 600px;
    margin: 200px auto;
}
</style>
