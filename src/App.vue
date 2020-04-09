<template>
  <v-app>
    <v-app-bar
      app
      color="deep-purple"
      dark
    >
      <v-toolbar-title><strong>Fiches d'urgence Manager</strong></v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-content>
      <router-view/>
    </v-content>

    <v-footer color='deep-purple lighten-2' dark>
      2020 - Fiches d'urgence Manager - Footer
    </v-footer>
  </v-app>
</template>

<script>


export default {
  name: 'App'
};
</script>
