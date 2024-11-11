import { createStore } from 'vuex'

interface TodoItem {
  id: number
  task: string
  status: boolean
}

interface State {
  todos: TodoItem[]
}

export default createStore({
  state: {
    todos: [] as TodoItem[]
  },
  mutations: {
    ADD_TODO(state: State, task: string) {
      state.todos.push({
        id: Date.now(),
        task: task,
        status: false
      })
    },
    DELETE_TODO(state: State, id: number) {
      state.todos = state.todos.filter(todo => todo.id !== id)
    },
    TOGGLE_STATUS(state: State, id: number) {
      const todo = state.todos.find(todo => todo.id === id)
      if (todo) {
        todo.status = !todo.status
      }
    }
  },
  actions: {
    addTodo({ commit }, task: string) {
      commit('ADD_TODO', task)
    },
    deleteTodo({ commit }, id: number) {
      commit('DELETE_TODO', id)
    },
    toggleStatus({ commit }, id: number) {
      commit('TOGGLE_STATUS', id)
    }
  },
  getters: {
    allTodos: (state: State) => state.todos
  }
})