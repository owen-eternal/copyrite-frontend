<template>
    <v-card flat >
        <v-card-title>
            <v-text-field hide-details single-line v-model="search" label='Search' max-width="10"  append-icon="mdi-magnify"></v-text-field>
        </v-card-title>
        <v-data-table :headers="headers" :items="tracks" item-key="name" class="elevation-1" dark></v-data-table>
    </v-card>
</template>

<script>
export default {
    name: "TableData",
    data(){
        return {
            //defining the data headers
            search: "",
            headers: [
                {
                    text: 'Title',
                    align: 'start',
                    sortable: false,
                    value: 'title',
                },
                { 
                    text: 'Duration (min)', 
                    value: 'duration' 
                },
                { 
                    text: 'Album', 
                    value: 'album'
                },
                { 
                    text: 'Genre', 
                    value: 'genre'
                },
                { 
                    text: 'Date Registered', 
                    value: 'date' //the json keys
                }
            ]
        }
    },

    computed:{
        tracks(){
            // return the state.
            return this.$store.state.tracks.filter(track => track.title.includes(this.search))
        }
    },
    mounted(){
        // trigger the action.
        this.$store.dispatch('getTracks')
    }
}
</script>

<style>

</style>