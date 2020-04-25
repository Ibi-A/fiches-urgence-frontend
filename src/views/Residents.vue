<template>
  <v-container class="pa-12">
    <v-row class="mb-6">
      <h1 class="display-3 mx-3">Tous les résidents</h1>
    </v-row>

    <v-row>
      <v-col xs="12">
        <v-alert
          type="warning"
          border="left"
          dismissible
          elevation="2"
          colored-border
        >Aucun résident à afficher.</v-alert>
      </v-col>
    </v-row>
  </v-container>
</template>