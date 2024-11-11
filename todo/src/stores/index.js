import { createStore } from 'vuex'

export default createStore({
  state: {
    // state หลักของแอพ
    users: [],
    currentUser: null,
    isLoading: false,
    error: null
  },
  
  mutations: {
    SET_USERS(state, users) {
      state.users = users
    },
    SET_LOADING(state, status) {
      state.isLoading = status
    },
    SET_ERROR(state, error) {
      state.error = error
    }
  },
  
  actions: {
    // เรียก API จาก NestJS
    async fetchUsers({ commit }) {
      commit('SET_LOADING', true)
      try {
        const response = await fetch('http://localhost:3000/api/users')
        const data = await response.json()
        commit('SET_USERS', data)
      } catch (error) {
        commit('SET_ERROR', error)
      } finally {
        commit('SET_LOADING', false)
      }
    }
  },
  
  getters: {
    getUsers: state => state.users,
    isLoading: state => state.isLoading
  }
})