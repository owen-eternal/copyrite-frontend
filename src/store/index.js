import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sidebar:false,
    search: "",
    tracks: [],
  },
  mutations: {
    CHANGESONGS(state, tracks){
      state.tracks = tracks.filter(track => track.title.includes(state.search))
    },
    TOGGLESIDEBAR(state){
      state.sidebar = ! state.sidebar 
      console.log(state.sidebar)
    }
  },
  actions: {
    getTracks({commit}){
      axios
        .get('http://localhost:8000/api/v1/tracks/')
        .then(resp => {
          commit('CHANGESONGS', resp.data)
        })
    },
    ToggleSideBar({commit}){
      commit('TOGGLESIDEBAR')
    }
  },
  modules: {
  }
})
