import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '../components/Welcome'
import TodoList from '../components/TodoList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/welcome',
      component: Welcome
    },
    {
      path: '/todoLists/:id',
      component: TodoList,
      props: true
    },
    {
      path: '*', redirect: '/welcome'
    }
  ],
  mode: 'history'
})
