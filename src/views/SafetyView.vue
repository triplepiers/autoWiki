<script>
export default {
    data() {
        return {
            header: {
                title: 'Safety',
                lead: 'Describe all the safety issues of your project.'
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
                <h4>Safety and Security Award</h4>
                <p>Synthetic biology will need to be used safely and securely if local people are to solve local
                    problems all around the world. The Safety and Security Committee is challenging teams to apply
                    biological engineering approaches to manage risks associated with synthetic biology. Can you take
                    the next step in incremental progress towards knowledge, understanding, and tools that will make the
                    use of synthetic biology safer and more secure?</p>
                <p>To compete for the Safety and Security award, please describe your work on this page and also fill
                    out the description on the <a href="https://competition.igem.org/deliverables/judging-form">judging
                        form</a>.</p>
                <hr>
                <p>Please see the <a href="https://competition.igem.org/judging/awards">2023 Awards Page</a> for more
                    information.</p>
            </div>
        </div>
    </div>

    <div class="row mt-4">
        <div class="col">
            <h2>What should this page contain?</h2>
            <hr>
            <p>On this page of your wiki, you should write about how you are addressing any safety issues in your
                project. The wiki is a place where you can go beyond the questions on the safety forms, and write about
                whatever safety topics are most interesting in your project. (You do not need to copy your safety forms
                onto this wiki page.)</p>
            <div class="bd-callout bd-callout-info">
                <p>Please visit the <a href="https://responsibility.igem.org/safety-policies/introduction">Safety
                        Policies page</a> to find this year's safety requirements & deadlines, and to learn about safe &
                    responsible research in iGEM.</p>
            </div>
        </div>
    </div>

    <div class="row mt-4">
        <div class="col-lg-8">
            <h2>Safe Project Design</h2>
            <hr>
            <p>Does your project include any safety features? Have you made certain decisions about the design to reduce
                risks? Write about them here! For example:</p>
            <ul>
                <li>Choosing a non-pathogenic chassis</li>
                <li>Choosing parts that will not harm humans / animals / plants</li>
                <li>Substituting safer materials for dangerous materials in a proof-of-concept experiment</li>
                <li>Including an "induced lethality" or "kill-switch" device</li>
            </ul>
        </div>
        <div class="col-lg-4">
            <h2>Safe Lab Work</h2>
            <hr>
            <p>What safety procedures do you use every day in the lab? Did you perform any unusual experiments, or face
                any unusual safety issues? Write about them here!</p>
        </div>
    </div>

</template>

<style scoped></style>
