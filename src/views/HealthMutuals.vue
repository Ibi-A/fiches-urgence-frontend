<template>
  <v-container class="pa-12">
    <h1 class="display-3">Toutes les mutuelles</h1>

    <v-btn class="ma-5" fixed dark fab bottom right color="success" @click="dialog = true">
      <v-icon>mdi-plus</v-icon>
    </v-btn>

    <v-dialog v-model="dialog" max-width="640" persistent>
      <v-card class="pa-12">
        <v-card-title>Créer une nouvelle mutuelle</v-card-title>
        <v-card-text>
          <health-mutual-edition-form />
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import HealthMutualEditionForm from "../components/HealthMutualEditionForm";

export default {
  name: "health-mutuals",
  components: {
    HealthMutualEditionForm
  },
  data() {
    return {
      dialog: false
    };
  }
};
</script>