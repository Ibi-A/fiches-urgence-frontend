<template>
  <v-container class="pa-12">
    <h1 class="display-3">Toutes les villes</h1>

    <v-btn class="ma-5" fixed dark fab bottom right color="success" @click="dialog = true">
      <v-icon>mdi-plus</v-icon>
    </v-btn>

    <v-dialog v-model="dialog" max-width="640" persistent>
      <v-card class="pa-12">
        <v-card-title>Créer une nouvelle ville</v-card-title>
        <v-card-text>
          <city-edition-form />
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import CityEditionForm from "../components/CityEditionForm";

export default {
  name: "cities",
  components: {
    CityEditionForm
  },
  data() {
    return {
      dialog: false
    };
  }
};
</script>