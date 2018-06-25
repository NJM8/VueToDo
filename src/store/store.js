import Vue from 'vue'
import Vuex from 'vuex'
import todoAPI from '../api/todoApi'
import router from '../router/index'

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
      const currentLists = state.todoLists.reduce((res, list) => {
        res.push(list.listName)
        return res
      }, [])
      if (currentLists.includes(payload)) {
        return
      }
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
          const currentTodos = list.todos.reduce((res, todo) => {
            res.push(todo.name)
            return res
          }, [])
          if (currentTodos.includes(payload.value)) {
            return
          }
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
    },
    setDeleteList (state, payload) {
      const idx = state.todoLists.findIndex(list => list.listName === payload)
      state.todoLists.splice(idx, 1)
      state.todoLists.forEach((list, index) => {
        if (index >= idx) {
          list.listId--
        }
      })
      state.nextListId--
    },
    setDeleteTodo (state, payload) {
      const listIdx = state.todoLists.findIndex(list => list.listName === payload.listName)
      const todoIdx = state.todoLists[listIdx].todos.findIndex(todo => todo.name === payload.todoName)
      state.todoLists[listIdx].todos.splice(todoIdx, 1)
    },
    setTodoStatus (state, payload) {
      const listIdx = state.todoLists.findIndex(list => list.listName === payload.listName)
      const todoIdx = state.todoLists[listIdx].todos.findIndex(todo => todo.name === payload.todoName)
      state.todoLists[listIdx].todos[todoIdx].done = !state.todoLists[listIdx].todos[todoIdx].done
    }
  },
  actions: {
    checkForSavedTodoLists ({ commit }) {
      const todos = todoAPI.checkForSavedTodos()
      if (todos) {
        commit('setTodoLists', todos)
        commit('setNextListId')
      }
    },
    saveTodoLists ({ state }) {
      todoAPI.saveTodoLists(state.todoLists)
    },
    addNewItem ({ dispatch, commit }, payload) {
      if (payload.type === 'listItem') {
        commit('setNewList', payload.value)
      } else {
        commit('setNewTodo', payload)
      }
      dispatch('saveTodoLists')
    },
    deleteList ({ commit, dispatch }, payload) {
      commit('setDeleteList', payload)
      dispatch('saveTodoLists')
      router.replace('/home')
    },
    deleteTodo ({ commit, dispatch }, payload) {
      commit('setDeleteTodo', payload)
      dispatch('saveTodoLists')
    },
    changeTodoStatus ({ commit, dispatch }, payload) {
      commit('setTodoStatus', payload)
      dispatch('saveTodoLists')
    }
  },
  getters: {
    getTodoLists (state) {
      return state.todoLists
    }
  }
})
