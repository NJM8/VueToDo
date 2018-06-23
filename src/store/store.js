import Vue from 'vue'
import Vuex from 'vuex'
import todoAPI from '../api/todoApi'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todoLists: [
      {
        listName: 'numbers',
        listId: 1,
        todos: [
          {
            name: 'one',
            done: false
          },
          {
            name: 'two',
            done: false
          },
          {
            name: 'one',
            done: false
          }
        ]
      },
      {
        listName: 'letters',
        listId: 2,
        todos: [
          {
            name: 'a',
            done: false
          },
          {
            name: 'b',
            done: false
          },
          {
            name: 'c',
            done: false
          }
        ]
      },
      {
        listName: 'directions',
        listId: 3,
        todos: [
          {
            name: 'up',
            done: false
          },
          {
            name: 'left',
            done: false
          },
          {
            name: 'right',
            done: false
          }
        ]
      }
    ]
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
