<script>
export default {
    data() {
        return {
            header: {
                title: 'Notebook',
                lead: 'Document the dates you worked on your project. This should be a detailed account of the work done each day for your project.'
            }
        }
    },
    mounted() {
        this.$emit('updatePageTitle', this.header.title)
        this.$emit('updatePageLead', this.header.lead)
    }
}
</script>

<template>
    <div class="row mt-4">
        <div class="col-lg-8">
            <h2>What should this page contain?</h2>
            <hr>
            <ul>
                <li>Chronological notes of what your team is doing.</li>
                <li>Brief descriptions of daily important events.</li>
                <li>Pictures of your progress.</li>
                <li>Mention who participated in what task.</li>
            </ul>
        </div>
        <div class="col-lg-4">
            <h2>Inspirations</h2>
            <hr>
            <ul>
                <li><a href="http://2018.igem.org/Team:Munich/Notebook">2018 Munich</a></li>
                <li><a href="https://2019.igem.org/Team:Georgia_State/Notebook">2019 Georgia State</a></li>
                <li><a href="https://2019.igem.org/Team:Newcastle/Notebook">2019 Newcastle</a></li>
                <li><a href="https://2020.igem.org/Team:IISER-Pune-India/Notebook">2020 IISER Pune India</a></li>
                <li><a href="https://2020.igem.org/Team:Lund/Notebook">2020 Lund</a></li>
                <li><a href="https://2020.igem.org/Team:NOVA_LxPortugal/Notebook">2020 NOVA LxPortugal</a></li>
                <li><a href="https://2020.igem.org/Team:RDFZ-China/NoteBook">2020 RDFZ China</a></li>
            </ul>
        </div>
    </div>
</template>

<style scoped></style>
