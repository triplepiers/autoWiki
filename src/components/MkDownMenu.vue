<script setup>
import MkDownMenuItem from '@/components/MkDownMenuItem.vue';
</script>
<script>
export default {
    props: {
        content: {
            type: undefined,
            required: true,
            default: []
        }
    },
}
</script>

<template>
<div class="MkDownMenu">
    <MkDownMenuItem v-for="item in content"
     :key="item.id" :content="item"
    />
</div>
</template>

<style scoped>
.MkDownMenu {
    width: fit-content;
    /* left: 0;*/
    top: var(--nav-height); 
    right: 0;
    position: sticky;
    background-color: white;
    z-index: 999;
}
</style>