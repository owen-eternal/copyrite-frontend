<template>
  <v-app>
    <sidebar/>
    <v-main>   
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

import Sidebar from "./components/Sidebar.vue"

export default {
  name: 'App',
  components:{
    Sidebar,
  }
};
</script>
