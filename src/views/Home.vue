<template>
  <div>
    <Navbar/>
    <Table/>
    <Footer/>
  </div>
  
</template>

<script>
import Table from '../components/Table.vue'
import Navbar from "../components/Navbar.vue"
import Footer from "../components/Footer.vue"

  export default {
    name: 'Home',
    components: {
      Table,
      Navbar,
      Footer
    },
  }
</script>
