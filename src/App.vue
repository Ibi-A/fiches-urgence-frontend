<template>
  <v-app>
    <v-navigation-drawer app>
      <v-list dense>
        <v-list-item link to='/'>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link to='/persons'>
          <v-list-item-content>
            <v-list-item-title>Persons</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        
        <v-list-item link to='/residents'>
          <v-list-item-content>
            <v-list-item-title>Residents</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        

        <v-list-item link to='/contributors'>
          <v-list-item-content>
            <v-list-item-title>Contributors</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link to='/health-mutuals'>
          <v-list-item-content>
            <v-list-item-title>Health mutuals</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link to='/cities'>
          <v-list-item-content>
            <v-list-item-title>Cities</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>


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

    <v-footer app color='deep-purple lighten-2' dark>
      2020 - Fiches d'urgence Manager - Footer
    </v-footer>
  </v-app>
</template>

<script>


export default {
  name: 'App'
};
</script>
