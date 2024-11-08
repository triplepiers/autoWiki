<script>
export default {
    data() {
        return {
            header: {
                title: 'Engineering Success',
                lead: 'Demonstrate engineering success in a part of your project by going through at least one iteration of the engineering design cycle.'
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
                <h4>Silver Medal Criterion #1</h4>
                <p>Demonstrate engineering success in a part of your project by going through at least one iteration of
                    the engineering design cycle. This achievement should be distinct from your Contribution for Bronze.</p>
                <p>If you plan to show engineering success by creating a new Part that has been shown to work as
                    expected, you must document your contribution on the Part's Main Page on the <a
                        href="http://parts.igem.org/Main_Page">Registry</a> for your team to be eligible for this
                    criteria.</p>
                <hr>
                <p>Please see the <a href="https://competition.igem.org/judging/medals">2023 Medals Page</a> for more
                    information.</p>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
