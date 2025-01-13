<script>
export default {
    props: {
        content: {
            type: undefined,
            required: true,
            default: []
        }
    },
    methods: {
        scrollTo(tid) { // 滚动到 tid 指定的标题
            const targetEle = document.getElementById(tid);
            if (targetEle) {
                targetEle.scrollIntoView({
                    behavior: 'smooth',
                })
            }
        }
    }
}
</script>

<template>
<div class="MkDownMenuItem">
    <div class="t1" @click="scrollTo(content.id)">{{ content.title }}</div>
    <div class="t2list">
        <div class="t2"
         v-for="item in content.subtitles" :key="item.id"
         @click="scrollTo(item.id)"
        >
            {{ item.title }}
        </div>
    </div>
</div>
</template>

<style scoped>
.MkDownMenuItem {
    cursor: pointer;
}
</style>