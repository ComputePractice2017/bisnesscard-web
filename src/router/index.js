import Vue from 'vue'
import Router from 'vue-router'
import addcard from '@/components/Cards'
import showcard from '@/components/Showcard'
import editcard from '@/components/Editcard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/addcard',
      name: 'addcard',
      component: addcard
    },
    {
      path: '/showcard/:id',
      component: showcard
    },
    {
      path: '/editcard/:id',
      component: editcard
    }
  ]
})
