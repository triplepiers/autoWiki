<script>
export default {
    data() {
        return {
            header: {
                title: 'Entrepreneurship',
                lead: 'The entrepreneurship prize recognizes exceptional effort to build a business case and commercialize an iGEM project.'
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
                <h4>Best Supporting Entrepreneurship</h4>
                <p>The Best Supporting Entrepreneurship award recognizes exceptional effort to build a business case and
                    commercialize an iGEM project. This award is open to all teams to show that entrepreneurship is
                    something all teams can aspire to do with their project. This award can go to an new project, or to
                    a previous project that a team aimed to commercialize. Have you filed a provisional patent on your
                    project/device/process? Have you raised money to build and ship products? Have you pitched your idea
                    to investors and received money? As always in iGEM, the aim is to impress the judges!</p>
                <p>To compete for the Best Supporting Entrepreneurship prize, please describe your work on this page and
                    also fill out the description on the <a
                        href="https://competition.igem.org/deliverables/judging-form">judging form</a>.</p>
                <hr>
                <p>Please see the <a href="https://competition.igem.org/judging/awards">2023 Awards Page</a> for more
                    information.</p>
            </div>
        </div>
    </div>

    <div class="row mt-4">
        <div class="col-lg-8">
            <h2>Patents and intellectual property</h2>
            <hr>
            <p>If your team is seriously considering commercializing and looking into building a company after the
                competition, you may want to look at how you are going to protect your work and secure investment.
                Investors will usually require some form of intellectual protection, so you may want to investigate how
                to apply for a patent or provisional patent in your country and region before disclosing your project at
                iGEM. Remember that you can only be evaluated in iGEM based on what you share on your wiki and at the
                Jamboree, so any work you don't present can't count towards your project.</p>
            <p>This is an area where we are different as we care about sharing, openness and contributing to the
                community and investors don't always agree with these values. It is up to you and your team to decide
                what to do. Remember that most universities have a commercialization department and that you can talk to
                them before coming to a decision.</p>
        </div>
        <div class="col-lg-4">
            <h2>Inspirations</h2>
            <hr>
            <ul>
                <li><a href="https://2019.igem.org/Team:UCopenhagen/Entrepreneurship">2019 UCopenhagen</a></li>
                <li><a href="https://2019.igem.org/Team:Thessaly/Entrepreneurship">2019 Thessaly</a></li>
                <li><a href="https://2019.igem.org/Team:NCKU_Tainan/Entrepreneurship">2019 NCKU Tainan</a></li>
                <li><a href="https://2020.igem.org/Team:TAS_Taipei/Entrepreneurship">2020 TAS Taipei</a></li>
                <li><a href="https://2020.igem.org/Team:KCL_UK/Entrepreneurship">2020 KCL UK</a></li>
                <li><a href="https://2020.igem.org/Team:Calgary/Entrepreneurship">2020 Calgary</a></li>
            </ul>
        </div>
    </div>
</template>

<style scoped></style>
