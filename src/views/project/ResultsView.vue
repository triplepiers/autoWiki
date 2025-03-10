<script>
export default {
    data() {
        return {
            header: {
                title: 'Results',
                lead: 'You can describe the results of your project and your future plans here.'
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
        <div class="col-lg-5">
            <h2>What should this page contain?</h2>
            <hr>
            <ul>
                <li>Clearly and objectively describe the results of your work.</li>
                <li>Future plans for the project.</li>
                <li>Considerations for replicating the experiments.</li>
            </ul>
        </div>
        <div class="col-lg-7">
            <h2>Describe what your results mean</h2>
            <hr>
            <ul>
                <li>Interpretation of the results obtained during your project. Don't just show a
                    plot/figure/graph/other, tell us what you think the data means. This is an important part of your
                    project that the judges will look for.</li>
                <li>Show data, but remember <b>all measurement and characterization data must also be on the Part's Main
                        Page on the <a href="http://parts.igem.org/Main_Page">Registry</a>.</b> Otherwise these data
                    will not be in consideration for any medals or part awards!</li>
                <li>Consider including an analysis summary section to discuss what your results mean. Judges like to
                    read what you think your data means, beyond all the data you have acquired during your project.</li>
            </ul>
        </div>
    </div>

    <div class="row mt-4">
        <div class="col-lg-8">
            <h2>Project Achievements</h2>
            <hr>
            <p>You can also include a list of bullet points (and links) of the successes and failures you have had over
                your summer. It is a quick reference page for the judges to see what you achieved during your summer.
            </p>
            <ul>
                <li>A list of linked bullet points of the successful results during your project</li>
                <li>A list of linked bullet points of the unsuccessful results during your project. This is about being
                    scientifically honest. If you worked on an area for a long time with no success, tell us so we know
                    where you put your effort.</li>
            </ul>
        </div>
        <div class="col-lg-4">
            <h2>Inspirations</h2>
            <hr>
            <ul>
                <li><a href="https://2019.igem.org/Team:Newcastle/Results">2019 Newcastle</a></li>
                <li><a href="https://2019.igem.org/Team:Munich/Results">2019 Munich</a></li>
                <li><a href="https://2019.igem.org/Team:Tec-Chihuahua/Results">2019 Tec Chihuahua</a></li>
                <li><a href="https://2020.igem.org/Team:Aalto-Helsinki/Results">2020 Aalto Helsinki</a></li>
                <li><a href="https://2020.igem.org/Team:GreatBay_SCIE/Results">2020 GreatBay SCIE</a></li>
                <li><a href="https://2020.igem.org/Team:Queens_Canada/Results">2020 Queens Canada</a></li>
            </ul>
        </div>
    </div>
</template>

<style scoped></style>
