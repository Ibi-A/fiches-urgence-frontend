<template>
  <v-app>
    <v-navigation-drawer app>
      <v-list dense>
        <v-list-item link to="/">
          <v-list-item-content>
            <v-list-item-title>Accueil</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link to="/persons">
          <v-list-item-content>
            <v-list-item-title>Personnes</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link to="/residents">
          <v-list-item-content>
            <v-list-item-title>Résidents</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link to="/contributors">
          <v-list-item-content>
            <v-list-item-title>Intervenants</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link to="/health-mutuals">
          <v-list-item-content>
            <v-list-item-title>Mutuelles</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link to="/cities">
          <v-list-item-content>
            <v-list-item-title>Villes</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app class="gradient" dark>
      <v-toolbar-title>
        <strong>Mes fiches d'urgence</strong>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-content>
      <router-view />
    </v-content>

  </v-app>
</template>

<script>
export default {
  name: "App"
};
</script>

<style scoped>
.gradient {
  background: rgb(0, 150, 136);
  background: linear-gradient(
    27deg,
    rgba(0, 150, 136, 1) 50%,
    rgba(21, 56, 98, 1) 87%
  );
}
</style>