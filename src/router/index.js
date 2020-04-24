import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Persons from '../views/Persons.vue'
import Person from '../views/Person.vue'
import Cities from '../views/Cities.vue'
import Contributors from '../views/Contributors.vue'
import HealthMutuals from '../views/HealthMutuals.vue'
import Residents from '../views/Residents.vue'
import PageNotFound from '../views/PageNotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
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
  {
    path: '/cities',
    name: 'Cities',
    component: Cities
  },
  {
    path: '/contributors',
    name: 'Contributors',
    component: Contributors
  },
  {
    path: '/health-mutuals',
    name: 'HealthMutuals',
    component: HealthMutuals
  },
  {
    path: '/residents',
    name: 'Residents',
    component: Residents
  },
  {
    path: '*',
    name: 'PageNotFound',
    component: PageNotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router