<script setup>
import { RouterView } from 'vue-router'
import Menu   from './components/Menu.vue'
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
</script>
<script>
export default {
  data() {
    return {
      header: {
        title: '',
        lead: ''
      }
    }
  },
  methods: {
    onUpdatePageTitle(neoTitle) {
      this.header.title = neoTitle;
      document.title = neoTitle + ' | ZJU-China - iGEM 2023';
    },
    onUpdatePageLead(neoLead) {
      this.header.lead = neoLead;
    }
  }
}
</script>

<template>
  <!-- Navigation -->
  <Menu />

  <!-- Header -->
  <Header :content="header" />

  <!-- Page Content -->
  <div class="container">
    <RouterView 
      @updatePageTitle="onUpdatePageTitle"
      @updatePageLead="onUpdatePageLead"
    />
  </div>
  
  <!-- Footer: MUST mention license AND have a link to team wiki's repository on gitlab.igem.org -->
  <Footer />
</template>

<style scoped></style>