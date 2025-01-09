<script>
import MarkdownIt from 'markdown-it';
import hljs from 'highlight.js';
import mk from 'markdown-it-katex';

export default {
    data() {
        // 这里有一些自定义输出规则的样例
        // https://blog.csdn.net/qq_41656373/article/details/121672231
        return {
            markdownRenderer: new MarkdownIt({
                html: true,
                linkify: true,
                typographer: true,
                
            })
        }
    },
    props: {
        content: {
            type: undefined,
            required: true,
        }
    },
    mounted() {
        // 加载 katex 插件以支持对 Latex 公式的渲染
        this.markdownRenderer.use(mk);
        // 插入渲染后的 MarkDown 文本
        this.$refs.container.innerHTML = this.markdownRenderer.render(this.content);
        // 高亮代码块
        hljs.highlightAll();
    }
}
</script>

<template>
<div class='MkDownContainer' ref="container"></div>
</template>

<style scoped>
/* 这里的选择器前面得加 /deep/ */
/deep/ p {
    text-indent: 2em;
}
</style>