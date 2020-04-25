<template>
  <v-container class="pa-12">
        <v-row class="mb-6">
      <h1 class="display-3 mx-3">Tous les intervenants</h1>
    </v-row>

    <v-row>
      <v-col xs="12">
        <v-alert
          type="warning"
          border="left"
          dismissible
          elevation="2"
          colored-border
        >Aucun intervenant à afficher.</v-alert>
      </v-col>
    </v-row>

    <v-btn class="ma-5" fixed dark fab bottom right color="success" @click="dialog = true">
      <v-icon>mdi-plus</v-icon>
    </v-btn>

    <v-dialog v-model="dialog" max-width="640" persistent>
      <v-card class="pa-12">
        <v-card-title>Créer un nouvel intervenant</v-card-title>
        <v-card-text>
          <contributor-edition-form />
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import ContributorEditionForm from "../components/ContributorEditionForm";

export default {
  name: "contributors",
  components: {
    ContributorEditionForm
  },
  data() {
    return {
      dialog: false
    };
  }
};
</script>