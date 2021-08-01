<template>
    <v-navigation-drawer dark app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Registered Songs
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.text">
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
          {text: "edit"},
          {text: "profile"},
          {text: "data"}
        ]
      }
    }
}
</script>

<style>

</style>