import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import TodoList from '../components/TodoList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      component: Home
    },
    {
      path: '/todoLists/:id',
      component: TodoList,
      props: true
    },
    {
      path: '*', redirect: '/home'
    }
  ],
  mode: 'history'
})
