import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    search: "",
    tracks: [],
  },
  mutations: {
    changeTracks(state, tracks){
      state.tracks = tracks.filter(track => track.title.includes(state.search))
    }
  },
  actions: {
    getTracks({commit}){
      axios
        .get('http://localhost:8000/api/v1/tracks/')
        .then(resp => {
          commit('changeTracks', resp.data)
        })
    }
  },
  modules: {
  }
})
