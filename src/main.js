import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import HelloWorld from './components/HelloWorld'
import PersonDetails from './components/PersonDetails'
import vuetify from './plugins/vuetify';

Vue.use(VueRouter)

Vue.config.productionTip = false

const routes = [
  { path: "/hello", component: HelloWorld },
  { path: "/person-details/:personId", component: PersonDetails }
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
