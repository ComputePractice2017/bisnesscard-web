import Vue from 'vue'
import Router from 'vue-router'
import cards from '@/components/Cards'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'cards',
      component: cards
    }
  ]
})
