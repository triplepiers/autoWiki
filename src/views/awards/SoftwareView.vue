<script>
export default {
    data() {
        return {
            header: {
                title: 'Software',
                lead: 'Software in iGEM should make synthetic biology based on standard parts easier, faster, better or more accessible to our community.'
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
                <h4>Best Software Tool</h4>
                <p>Regardless what's the topic, iGEM projects often create or adapt computational tools to move the
                    bigger project forward. Because they are born out of a direct practical need, these software tools
                    (or new computational methods) can even prove surprisingly useful for others. Without necessarily
                    being big or complex, they can make the crucial difference to a project's success. This award tries
                    to find and honor such "nuggets" of computational work. To be eligible, your software has to be
                    documented and made available under an OSI-approved open source license. Teams nominating themselves
                    for this prize must host the source code of their software on the dedicated repository on iGEM's
                    GitLab.</p>
                <p>To compete for the Best Software Tool prize, please describe your work on this page and also fill out
                    the description on the <a href="https://competition.igem.org/deliverables/judging-form">judging
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
                <li><a href="https://2019.igem.org/Team:Sydney_Australia/Software">2019 Sydney Australia</a></li>
                <li><a href="https://2019.igem.org/Team:SMMU-China/Software">2019 SMMU China</a></li>
                <li><a href="https://2019.igem.org/Team:Grenoble-Alpes/Software">2019 Grenoble Alpes</a></li>
                <li><a href="https://2020.igem.org/Team:DTU-Denmark/Software">2020 DTU Denmark</a></li>
                <li><a href="https://2020.igem.org/Team:GunnVistaPingry_US/Software">2020 GunnVistaPingry US</a></li>
                <li><a href="https://2020.igem.org/Team:Rochester/Software">2020 Rochester</a></li>
            </ul>
        </div>
    </div>
</template>

<style scoped></style>
