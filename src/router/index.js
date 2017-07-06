import Vue from 'vue'
import Router from 'vue-router'
import createCard from '@/components/Cards'
import getInfo from '@/components/Showcard'
import update from '@/components/Editcard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/create',
      name: 'addcard',
      component: createCard
    },
    {
      path: '/getInfo/:id',
      component: getInfo
    },
    {
      path: '/update/:id',
      component: update
    }
  ]
})
