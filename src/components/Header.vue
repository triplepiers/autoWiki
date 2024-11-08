<script>
export default {
    props: {
        content: {
            type: undefined,
            required: true,
        }
    },
}
</script>

<template>
    <header class="bg-hero py-5 mb-5">
        <div class="container h-100">
            <div class="row h-100 align-items-center">
                <div class="col-lg-12">
                    <h1 class="display-4 text-white mt-5 mb-2">{{ content.title }}</h1>
                    <p class="lead mb-5 text-white-50" v-html="content.lead"></p>
                </div>
            </div>
        </div>
    </header>
</template>

<style scoped></style>