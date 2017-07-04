import Vue from 'vue'
import Router from 'vue-router'
import editcard from '@/components/Editcard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/editcard',
      name: 'editcard',
      component: editcard
    }
  ]
})
