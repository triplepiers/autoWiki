<script>
export default {
    data() {
        return {
            header: {
                title: 'Plant',
                lead: 'This award is designed to celebrate exemplary work done in plant synthetic biology.'
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
                <h4>Best Plant Synthetic Biology</h4>
                <p>This award is designed to celebrate exemplary work done in plant synthetic biology. Did you build a
                    project in a plant chassis? Did you submit plant parts to the Registry? This award could also be
                    given to a team working with algae or another photosynthetic chassis. Show us what you made and
                    remember to adhere to iGEM safety guidelines!</p>
                <p>To compete for the Best Plant Synthetic Biology prize, please describe your work on this page and
                    also fill out the description on the <a
                        href="https://competition.igem.org/deliverables/judging-form">judging form</a>.</p>
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
                <li><a href="http://2018.igem.org/Team:Cardiff_Wales/Plant">2018 Cardiff Wales</a></li>
                <li><a href="https://2019.igem.org/Team:Sorbonne_U_Paris/Plant">2019 Sorbonne U Paris</a></li>
                <li><a href="https://2019.igem.org/Team:TU_Kaiserslautern/Plant">2019 TU Kaiserslautern</a></li>
                <li><a href="https://2019.igem.org/Team:Humboldt_Berlin/Plant">2019 Humboldt Berlin</a></li>
                <li><a href="https://2020.igem.org/Team:Sorbonne_U_Paris/Plant">2020 Sorbonne U Paris</a></li>
            </ul>
        </div>
    </div>
</template>

<style scoped></style>
