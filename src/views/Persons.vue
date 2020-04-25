<template>
  <v-container class="pa-12">
    <v-row class="mb-6">
      <h1 class="display-3 mx-3">Toutes les personnes</h1>
    </v-row>

    <v-row v-if="ready">
      <person-info-card v-for="person in persons" :key="person.id" v-bind:person="person" />
    </v-row>

    <v-alert type="warning" border="left" dismissible elevation="2" colored-border v-if="persons.length === 0">Aucune personne à afficher.</v-alert>

    <v-btn class="ma-5" fixed dark fab bottom right color="success" @click="dialog = true">
      <v-icon>mdi-plus</v-icon>
    </v-btn>

    <v-dialog v-model="dialog" max-width="640" persistent>
      <v-card class="pa-12">
        <v-card-title class="headline">Créer une nouvelle personne</v-card-title>
        <v-card-text>
          <person-edition-form />
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import axios from "axios";
import PersonInfoCard from "../components/PersonInfoCard.vue";
import PersonEditionForm from "../components/PersonEditionForm.vue";

export default {
  name: "persons",
  components: {
    PersonInfoCard,
    PersonEditionForm
  },
  data() {
    return {
      persons: [],
      ready: false,
      dialog: false
    };
  },
  mounted() {
    axios.get("http://localhost:5000/persons").then(response => {
      this.persons = response.data;
      this.ready = true;
    });
  }
};
</script>