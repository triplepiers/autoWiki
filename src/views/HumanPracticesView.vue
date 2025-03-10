<script>
export default {
    data() {
        return {
            header: {
                title: 'Human Practices',
                lead: 'We ask every team to think deeply and creatively about whether their project is responsible and good for the world. Consider how the world affects your work and how your work affects the world.'
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
                <h4>Silver Medal Criterion #2</h4>
                <p>Explain how you have determined your work is responsible and good for the world.</p>
                <hr>
                <p>Please see the <a href="https://competition.igem.org/judging/medals">2023 Medals Page</a> for more
                    information.</p>
            </div>

            <div class="bd-callout bd-callout-info">
                <h4>Best Integrated Human Practices</h4>
                <p>To compete for the Best Integrated Human Practices prize, please describe your work on this page and
                    also fill out the description on the <a
                        href="https://competition.igem.org/deliverables/judging-form">judging form</a>.</p>
                <p>How does your project affect society and how does society influence the direction of your project?
                    How might ethical considerations and stakeholder input guide your project purpose and design and the
                    experiments you conduct in the lab? How does this feedback enter into the process of your work all
                    through the iGEM competition? Document a thoughtful and creative approach to exploring these
                    questions and how your project evolved in the process to compete for this award!</p>
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
            <p>At iGEM we believe societal considerations should be upfront and integrated throughout the design and
                execution of synthetic biology projects. “Human Practices” refers to iGEM teams' efforts to actively
                consider how the world affects their work and their work affects the world. Through your Human Practices
                activities, your team should demonstrate how you have thought carefully and creatively about whether
                your project is responsible and good for the world. We invite you to explore issues relating (but not
                limited) to the ethics, safety, security, and sustainability of your project, and to show how this
                exploration feeds back into your project purpose, design, and execution.</p>
            <p>Please note you can compete for the Silver Medal criterion #2 and the Best Integrated Human Practices
                prize with this page.</p>
            <p>For more information, please see the <a
                    href="https://responsibility.igem.org/human-practices/what-is-human-practices">Human Practices
                    Hub</a>.
            </p>
            <p>On this page, your team should document all of your Human Practices work and activities. You should write
                about the Human Practices topics you considered in your project, document any activities you conducted
                to explore these topics (such as engaging with experts and stakeholders), describe why you took a
                particular approach (including referencing any work you built upon), and explain if and how you
                integrated takeaways from your Human Practices work back into your project purpose, design and/or
                execution.</p>
        </div>
        <div class="col-lg-4">
            <h2>Inspirations</h2>
            <hr>
            <ul>
                <li><a href="https://2019.igem.org/Team:Thessaly/Human_Practices">2019 Thessaly</a></li>
                <li><a href="https://2019.igem.org/Team:Linkoping_Sweden/Human_Practices">2019 Linkoping Sweden</a></li>
                <li><a href="https://2019.igem.org/Team:FDR-HB_Peru/Human_Practices">2019 FDR HB Peru</a></li>
                <li><a href="https://2020.igem.org/Team:William_and_Mary/Human_Practices">2020 William and Mary</a></li>
                <li><a href="https://2020.igem.org/Team:Rochester/Human_Practices">2020 Rochester</a></li>
                <li><a href="https://2020.igem.org/Team:Leiden/Human_Practices">2020 Leiden</a></li>
                <li><a href="https://2020.igem.org/Team:Baltimore_BioCrew/Human_Practices">2020 Baltimore BioCrew</a>
                </li>
            </ul>
        </div>
    </div>

</template>

<style scoped></style>
