import Vue from 'vue'
import Vuex from 'vuex'
import todoAPI from '../api/todoApi'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todoLists: []
  },
  mutations: {
    setTodoLists (state, payload) {
      state.todoLists = payload
    },
    setNewList (state, payload) {
      state.todoLists.push(payload)
    },
    setNewTodo (state, payload) {
      state.todoLists.forEach(list => {
        if (list.name === payload.name) {
          list.push(payload.newTodo)
        }
      })
    }
  },
  actions: {
    checkForSavedTodoLists ({commit}) {
      todoAPI.checkForSavedTodos(todos => {
        if (todos) {
          commit('setTodoLists', todos)
        }
      })
    },
    saveTodoLists ({state}) {
      todoAPI.saveTodoLists(state.todoLists)
    },
    addNewList ({dispatch, commit}, payload) {
      commit('addNewList', payload)
      dispatch('saveTodoLists')
    },
    addNewTodo ({commit, dispatch}, payload) {
      commit('setNewTodo', payload)
      dispatch('saveTodoLists')
    }
  },
  getters: {
    getTodoLists (state) {
      return state.todoLists
    }
  }
})
