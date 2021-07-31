<template>
    <v-container>
        <v-data-table
        dense
        :headers="headers"
        :items="tracks"
        item-key="name"
        class="elevation-1"
        ></v-data-table>
    </v-container>
</template>

<script>
export default {
    name: "TableData",
    data(){
        return {
            //defining the data headers
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
            return this.$store.state.tracks
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