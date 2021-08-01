<template>
  <div>
    <Navbar/>
    <Table/>
  </div>
  
</template>

<script>
import Table from '../components/Table.vue'
import Navbar from "../components/Navbar.vue"

  export default {
    name: 'Home',
    components: {
      Table,
      Navbar,
    },
  }
</script>
