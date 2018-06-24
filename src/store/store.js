import Vue from 'vue'
import Vuex from 'vuex'
import todoAPI from '../api/todoApi'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todoLists: [],
    nextListId: 0
  },
  mutations: {
    setTodoLists (state, payload) {
      state.todoLists = payload
    },
    setNewList (state, payload) {
      state.todoLists.push({
        listName: payload,
        listId: state.nextListId,
        todos: []
      })
      state.nextListId++
    },
    setNewTodo (state, payload) {
      state.todoLists.forEach(list => {
        if (list.listName === payload.listName) {
          list.todos.push({
            name: payload.value,
            done: false
          })
        }
      })
    },
    setNextListId (state) {
      state.nextListId = state.todoLists.reduce((res, list) => {
        if (list.listId > res) {
          res = list.listId
        }
        return res
      }, 0) + 1
    }
  },
  actions: {
    checkForSavedTodoLists ({commit}) {
      const todos = todoAPI.checkForSavedTodos()
      if (todos) {
        commit('setTodoLists', todos)
        commit('setNextListId')
      }
    },
    saveTodoLists ({state}) {
      todoAPI.saveTodoLists(state.todoLists)
    },
    addNewItem ({dispatch, commit}, payload) {
      if (payload.type === 'listItem') {
        commit('setNewList', payload.value)
      } else {
        commit('setNewTodo', payload)
      }
      dispatch('saveTodoLists')
    }
  },
  getters: {
    getTodoLists (state) {
      return state.todoLists
    }
  }
})
