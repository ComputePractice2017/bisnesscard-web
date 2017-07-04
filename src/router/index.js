import Vue from 'vue'
import Router from 'vue-router'
import showcard from '@/components/Showcard'
import addcard from '@/components/Cards'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/addcard',
      name: 'addcard',
      component: addcard
    },
    {
      path: '/showcard',
      name: 'showcard',
      component: showcard
    }
  ]
})
