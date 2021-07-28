import axios from 'axios'

// initial state
const state = () => ({
  services: []
})

// mutations
const mutations = {
  setServices: (state, services) => {
    state.services = services
  }
}

// actions
const actions = {
  async fetchServices({ commit }, lang) {
    try {
      console.log(lang)
      const response = await axios.get(
        //   `https://jsonplaceholder.typicode.com/photos/lang?lang=${lang}?_start=0&_limit=10`
        'https://jsonplaceholder.typicode.com/photos/?_start=0&_limit=4'
      )
      if (response?.data) commit('setServices', response.data)
    } catch (err) {
      throw new Error(err)
    }
  }
}

export default {
  state,
  actions,
  mutations
}
