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
    methods: {
        // 自动为深度为 noLevel 的标题进行编号、返回需要生成目录的 titleList
        handle_title(MkDownEl, noLevel=3, menuLevel=2) {
            // 生成给定深度标题的选择器字符串
            function gen_selectStr() {
                let selectStr = '', init = 1;
                while (init <= noLevel) { selectStr += `h${init++},` }
                return selectStr.slice(0, -1)
            }
            // 生成标题编号
            var noArr = new Array(noLevel).fill(0), prevGrade = 1;
            function gen_no(curGrade) {
                if (curGrade <= prevGrade) {
                    for (let i = curGrade ; i < noLevel ; i++ ){ noArr[i] = 0; }
                }
                noArr[curGrade-1]++;

                let noStr = '';
                for (let i = 0 ; i < curGrade ; i++) { noStr += `${noArr[i]}.`}
                return noStr.slice(0, -1);
            }
            
            // 生成目录（只考虑了两级）
            var menuList = [];
            MkDownEl.querySelectorAll(gen_selectStr())
                .forEach(t => {
                    var grade = parseInt(t.tagName.slice(1));
                    let t_no = gen_no(grade);
                    t.innerText = `${t_no} ${t.innerText}`; // 插入标题编号
                    t.id = t_no;                            // 设置 id
                    switch (grade) {
                        case 1:
                            menuList.push({
                                title: t.innerText, // 注意顺序，这里带编号了，
                                id:    t_no,
                                subtitles: []
                            });
                            break;
                        case 2:
                            menuList.at(-1).subtitles.push({
                                title: t.innerText,
                                id:    t_no
                            });
                            break;
                    }
                    prevGrade = grade;
                });
            
            return menuList;
        }
    },
    mounted() {
        // 加载 katex 插件以支持对 Latex 公式的渲染
        this.markdownRenderer.use(mk);
        // 插入渲染后的 MarkDown 文本
        this.$el.innerHTML = this.markdownRenderer.render(this.content);
        // 高亮代码块
        hljs.highlightAll();
        // 提取目录
        this.$emit('updateMkDownMenu', this.handle_title(this.$el));
    }
}
</script>

<template>
<div class='MkDownContainer'></div>
</template>

<style scoped>
/* 这里的选择器前面得加 :deep() 才能选中 MarkDown 块内的标签 */
:deep(p) {
    text-indent: 2em;
}
</style>