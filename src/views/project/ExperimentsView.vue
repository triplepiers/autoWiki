<script>
export default {
    data() {
        return {
            header: {
                title: 'Experiments',
                lead: 'Describe the research, experiments, and protocols you used in your iGEM project.'
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
            <p>Describe the research, experiments, and protocols you used in your iGEM project. These should be detailed
                enough for another team to repeat your experiments.</p>
            <p>If you made Parts this year, please remember to put all information, characterization, and measurement
                data on the Part's Main Page on the <a href="http://parts.igem.org/Main_Page">Registry</a>.</p>
        </div>
        <div class="col-lg-4">
            <h2>Inspirations</h2>
            <hr>
            <ul>
                <li><a href="https://2019.igem.org/Team:Nantes/Experiments">2019 Nantes</a></li>
                <li><a href="https://2019.igem.org/Team:TU_Eindhoven/Experiments">2019 TU Eindhoven</a></li>
                <li><a href="https://2019.igem.org/Team:Mingdao/Demonstrate">2019 Mingdao</a></li>
                <li><a href="https://2020.igem.org/Team:Amsterdam/Experiments">2020 Amsterdam</a></li>
                <li><a href="https://2020.igem.org/Team:NCTU_Formosa/Experiments">2020 NCTU Formosa</a></li>
                <li><a href="https://2020.igem.org/Team:USAFA/Experiments">2020 USAFA</a></li>
            </ul>
        </div>
    </div>
</template>

<style scoped></style>
