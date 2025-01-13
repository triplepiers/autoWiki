<script setup>
import MkDownDom from '@/components/MkDownDom.vue';
import MkDownMenu from '@/components/MkDownMenu.vue';
</script>
<script>
// 这里指定需要加载的 MarkDown 文件路径（别忘了末尾加上 ?raw）
import mdText from '@/notes/test.md?raw';
export default {
    data() {
        return {
            header: {
                title: '这是 Test 页面的标题',
                lead:  '这只是用来测试 lead 有没有在正常工作'
            },
            MkDownText: mdText,
            MkDownMenuList: []
        }
    },
    mounted() {
        this.$emit('updatePageTitle', this.header.title)
        this.$emit('updatePageLead', this.header.lead)
    },
    methods: {
        handleMkDownMenuUpdate(menuList) {
            this.MkDownMenuList = menuList;
        }
    }
}
</script>

<template>
<MkDownMenu :content="MkDownMenuList"/>
<MkDownDom :content="MkDownText" @updateMkDownMenu="handleMkDownMenuUpdate"/>
</template>

<style scoped></style>
