<script>
export default {
    data() {
        return {
            header: {
                title: 'Measurement',
                lead: 'Synthetic Biology needs great measurement approaches for characterizing parts, and efficient new methods for characterizing many parts at once. Describe your measurement approaches on this page.'
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
                <h4>Best Measurement</h4>
                <p>There are a lot of exciting Parts in the Registry, but many Parts have still not been characterized.
                    Designing great measurement approaches for characterizing new parts, or developing and implementing
                    an efficient new method for characterizing thousands of parts are good examples.</p>
                <p>To compete for the Best Measurement prize, please describe your work on this page and also fill out
                    the description on the <a href="https://competition.igem.org/deliverables/judging-form">judging
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
            <p> If you've done excellent work in measurement, you should consider nominating your team for this special
                prize. Synthetic Biology needs great measurement approaches for characterizing parts, and efficient new
                methods for characterizing many parts at once. If you've done something exciting in the area of
                Measurement, describe it here!</p>
        </div>
        <div class="col-lg-4">
            <h2>Inspirations</h2>
            <hr>
            <ul>
                <li><a href="http://2018.igem.org/Team:UC_Davis/Measurement">2018 UC Davis</a></li>
                <li><a href="https://2019.igem.org/Team:Newcastle/Measurement">2019 Newcastle</a></li>
                <li><a href="https://2019.igem.org/Team:Evry_Paris-Saclay/Measurement">2019 Evry Paris Saclay</a></li>
                <li><a href="https://2019.igem.org/Team:GENAS_China/Measurement">2019 GENAS China</a></li>
                <li><a href="https://2020.igem.org/Team:Calgary/Measurement">2020 Calgary</a></li>
                <li><a href="https://2020.igem.org/Team:CSMU_Taiwan/Measurement">2020 CSMU Taiwan</a></li>
            </ul>
        </div>
    </div>
</template>

<style scoped></style>
