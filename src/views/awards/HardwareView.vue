<script>
export default {
    data() {
        return {
            header: {
                title: 'Hardware',
                lead: 'Hardware in iGEM should make synthetic biology based on standard parts easier, faster, better, or more accessible to our community.'
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
                <h4>Best Hardware</h4>
                <p>This is a prize for the team that has developed a piece of hardware for synthetic biology. Hardware
                    in iGEM should make synthetic biology based on standard parts easier, faster, better or more
                    accessible to our community. Did your team make a sensor to help teams characterize parts? Did you
                    make a robot that can help teams perform experiments or do cloning more easily? Tell us what your
                    team did for this award!</p>
                <p>To compete for the Best Hardware prize, please describe your work on this page and also fill out the
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
            <p>In addition to encouraging teams to work with DNA parts and build biological devices in the lab, iGEM
                also encourages other types of technical solutions for synthetic biology. This can include physical
                devices (hardware) related to robotic assembly, microfluidics, low-cost measurement devices, to name a
                few examples. There are many exciting opportunities for hardware innovation in synthetic biology.</p>
        </div>
        <div class="col-lg-4">
            <h2>Inspirations</h2>
            <hr>
            <ul>
                <li><a href="http://2018.igem.org/Team:Valencia_UPV/Hardware">2018 Valencia UPV</a></li>
                <li><a href="http://2018.igem.org/Team:Unesp_Brazil/Hardware">2018 Unesp Brazil</a></li>
                <li><a href="https://2019.igem.org/Team:BIT/Hardware">2019 BIT</a></li>
                <li><a href="https://2019.igem.org/Team:Bielefeld-CeBiTec/Hardware">2019 Bielefeld CeBiTec</a></li>
                <li><a href="https://2019.igem.org/Team:Nanjing-China/Hardware">2019 Nanjing China</a></li>
                <li><a href="https://2020.igem.org/Team:Vilnius-Lithuania/Hardware">2020 Vilnius Lithuania</a></li>
                <li><a href="https://2020.igem.org/Team:Aachen/Hardware">2020 Aachen</a></li>
                <li><a href="https://2020.igem.org/Team:ZJUT_China_B/Hardware">2020 ZJUT China B</a></li>
            </ul>
        </div>
    </div>
</template>

<style scoped></style>
