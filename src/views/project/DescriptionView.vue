<script>
export default {
    data() {
        return {
            header: {
                title: 'Project Description',
                lead: 'Describe how and why you chose your iGEM project.'
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
        <div class="col">
            <div class="bd-callout bd-callout-info">
                <h4>Bronze Medal Criterion #3</h4>
                <p>Describe how and why you chose your iGEM project.</p>
                    <hr>
                <p>Please see the <a href="https://competition.igem.org/judging/medals">2023 Medals Page</a> for more
                    information.</p>
            </div>
        </div>
    </div>

    <div class="row mt-4">
        <div class="col-lg-8">
            <h2>What should this page contain?</h2>
            <hr>
            <ul>
                <li>A clear and concise description of your project.</li>
                <li>A detailed explanation of why your team chose to work on this particular project.</li>
                <li>References and sources to document your research.</li>
                <li>Use illustrations and other visual resources to explain your project.</li>
            </ul>
        </div>
        <div class="col-lg-4">
            <h2>Inspirations</h2>
            <hr>
            <ul>
                <li><a href="https://2022.igem.wiki/dtu-denmark/description">2022 DTU-Denmark</a></li>
                <li><a href="https://2019.igem.org/Team:ITESO_Guadalajara/Description">2019 ITESO Guadalajara</a></li>
                <li><a href="https://2020.igem.org/Team:Technion-Israel/Description">2020 Technion Israel</a></li>
                <li><a href="https://2020.igem.org/Team:Botchan_Lab_Tokyo/Description">2020 Botchan Lab Tokyo</a></li>
                <li><a href="https://2020.igem.org/Team:St_Andrews/Description">2020 St Andrews</a></li>
                <li><a href="https://2020.igem.org/Team:MIT/Description">2020 MIT</a></li>
            </ul>
        </div>
    </div>

    <div class="row mt-4">
        <div class="col-lg-8">
            <h2>Some advice</h2>
            <hr>
            <p>We encourage you to put up a lot of information and content on your wiki, but we also encourage you to
                include summaries as much as possible. If you think of the sections in your project description as the
                sections in a publication, you should try to be concise, accurate, and unambiguous in your achievements.
                Your Project Description should include more information than your project abstract.</p>
        </div>
        <div class="col-lg-4">
            <h2>References</h2>
            <hr>
            <p>iGEM teams are encouraged to record references you use during the course of your research. They should be
                posted somewhere on your wiki so that judges and other visitors can see how you thought about your
                project and what works inspired you.</p>
        </div>
    </div>
</template>

<style scoped></style>
