import Vue from 'vue'
import VueRouter from 'vue-router'

import Persons from '../views/Persons.vue'
import Person from '../views/Person.vue'

Vue.use(VueRouter)

  const routes = [
      {
          path: '/persons',
          name: 'Persons',
          component: Persons
      },
      {
        path: '/persons/:id',
        name: 'Person',
        component: Person
    },
  ]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router