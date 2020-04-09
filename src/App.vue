<template>
  <div>
    <h1>FICHES D'URGENCE MANAGER</h1>
    <navigation-bar/>
    <router-view/>
    <footer-bar/>
  </div>
</template>

<script>
import NavigationBar from './components/NavigationBar.vue'
import FooterBar from './components/FooterBar.vue'

export default {
  name: 'App',
  components: {
    NavigationBar,
    FooterBar
  }
};
</script>
