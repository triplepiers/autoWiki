<script>
export default {
    data() {
        return {
            header: {
                title: 'Model',
                lead: 'Explain your model\'s assumptions, data, parameters, and results in a way that anyone could understand.'
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
                <h4>Best Model</h4>
                <p>Models and computer simulations provide a great way to describe the functioning and operation of
                    BioBrick Parts and Devices. Synthetic biology is an engineering discipline and part of engineering
                    is simulation and modeling to determine system behavior before building your design. Designing and
                    simulating can be iterated many times in a computer before moving to the lab. This award is for
                    teams who build a model of their system and use it to inform system design or simulate expected
                    behavior before or in conjunction with experiments in the wetlab.</p>
                <p>To compete for the Best Model prize, please describe your work on this page and also fill out the
                    description on the <a href="https://competition.igem.org/deliverables/judging-form">judging
                        form</a>.</p>
                <hr>
                <p>Please see the <a href="https://competition.igem.org/judging/awards">2023 Awards Page</a> for more
                    information.</p>
            </div>
        </div>
    </div>

    <div class="row mt-4">
        <div class="col-lg-8">
            <h2>Overview</h2>
            <hr>
            <p>Mathematical models and computer simulations provide a great way to describe the function and operation
                of Parts and Devices. Synthetic Biology is an engineering discipline, and part of engineering is
                simulation and modeling to determine the behavior of your design before you build it. Designing and
                simulating can be iterated many times in a computer before moving to the lab.</p>
        </div>
        <div class="col-lg-4">
            <h2>Inspirations</h2>
            <hr>
            <ul>
                <li><a href="http://2018.igem.org/Team:GreatBay_China/Model">2018 GreatBay China</a></li>
                <li><a href="http://2018.igem.org/Team:Leiden/Model">2018 Leiden</a></li>
                <li><a href="https://2019.igem.org/Team:IISER_Kolkata/Model">2019 IISER Kolkata</a></li>
                <li><a href="https://2019.igem.org/Team:Exeter/Model">2019 Exeter</a></li>
                <li><a href="https://2019.igem.org/Team:Mingdao/Model">2019 Mingdao</a></li>
                <li><a href="https://2020.igem.org/Team:Harvard/Model">2020 Harvard</a></li>
                <li><a href="https://2020.igem.org/Team:Leiden/Model">2020 Leiden</a></li>
            </ul>
        </div>
    </div>
</template>

<style scoped></style>
