<template>
    <v-navigation-drawer v-model="$store.state.sidebar" dark app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Artist Profile
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.text">
           <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
    name:'Sidebar',
    data(){
      return {
        items:[
          {text: "Dashboard", icon: "mdi-view-dashboard"},
          {text: "Edit Profile", icon: "mdi-wrench"}, 
        ]
      }
    }
}
</script>

<style>

</style>