<script>
export default {
    data() {
        return {
            header: {
                title: 'Education',
                lead: 'Innovative educational tools and outreach activities have the ability to establish a two-way dialogue with new communities by discussing public values and the science behind synthetic biology.'
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
                <h4>Best Education</h4>
                <p>How have you developed new opportunities to include more people in shaping synthetic biology?
                    Innovative educational tools and outreach activities have the ability to establish a two-way
                    dialogue with new communities by discussing public values and the science behind synthetic biology.
                    Document your approach and what was learned by everyone involved to compete for this award.</p>
                <p>To compete for the Best Education prize, please describe your work on this page and also fill out the
                    description on the <a href="https://competition.igem.org/deliverables/judging-form">judging
                        form</a>.</p>
                <hr>
                <p>Please see the <a href="https://competition.igem.org/judging/awards">2023 Awards Page</a> for more
                    information.</p>
            </div>
        </div>
    </div>

    <div class="row mt-4">
        <div class="col">
            <h2>Inspirations</h2>
            <hr>
            <ul>
                <li><a href="https://2020.igem.org/Team:CCA_San_Diego/Education">2020 CCA San Diego</a></li>
                <li><a href="https://2020.igem.org/Team:Lambert_GA/Education">2020 Lambert GA</a></li>
                <li><a href="https://2020.igem.org/Team:Stanford/Education">2020 Stanford</a></li>
                <li><a href="https://2020.igem.org/Team:Waseda/Education">2020 Waseda</a></li>
                <li><a href="https://2020.igem.org/Team:Fudan/Education">2020 Fudan</a></li>
                <li><a href="https://2020.igem.org/Team:Toulouse_INSA-UPS/Education">2020 Toulouse INSA UPS</a></li>
            </ul>
        </div>
    </div>
</template>

<style scoped></style>
