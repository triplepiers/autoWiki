<script>
export default {
    data() {
        return {
            header: {
                title: 'Attributions',
                lead: 'This page must show the attribution form of your project. This includes the work done by each of the student members on your team and any work that was done by people outside of your team, including the host labs, advisors, instructors, and individuals not on the team roster. This requirement is not about literature references - these can and should be displayed throughout your wiki.'
            }
        }
    },
    mounted() {
        this.$emit('updatePageTitle', this.header.title)
        this.$emit('updatePageLead', this.header.lead)

        // Listen to size change and update form height
        window.addEventListener('message', function (e) {
            const { type, data } = JSON.parse(e.data);
            if (type === 'igem-attribution-form') {
                const element = document.getElementById('igem-attribution-form')
                element.style.height = data + 50 + 'px'
            }
        });
    }
}
</script>

<template>
    <div class="row mt-4">
        <div class="col">
            <div class="bd-callout bd-callout-info">
                <h4>Bronze Medal Criterion #2</h4>
                <p>Describe what work your team members did and what other people did for your project.</p>
                <p>The form that bas been embded in an iframe in this page shows your team's Project Attribution form.
                    This page must keep the form as it is.</p>
                <p>If you use a different website framework, make sure to embed the right URL for your team's form.</p>
                <hr>
                <p>Please see the <a href="https://competition.igem.org/deliverables/project-attribution">Project
                        Attribution page</a> for more information.</p>
            </div>
        </div>
    </div>

    <!--
  ======================================================================
  == VERY IMPORTANT                                                   ==
  ======================================================================
  LEAVE THE IFRAME CODE BELOW AS IT IS, THE ATTRIBUTION FORM OF YOUR TEAM
  WILL BE DISPLAYED ON THIS PAGE. DO NOT REMOVE IT, OTHERWISE YOU RISK OF
  NOT MEETING BRONZE MEDAL CRITERION #2
 -->
    <div class="row mt-4">
        <iframe style='width: 100%' id="igem-attribution-form"
            src="https://attributions.igem.org?team=ZJU-China&year=2023">
        </iframe>
        <!-- ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ -->
    </div>
</template>

<style scoped></style>
