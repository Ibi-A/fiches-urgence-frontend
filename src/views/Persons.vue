<template>
  <v-container class="pa-12">
    <v-row class="mb-6">
      <h1 class="display-3 mx-3">Toutes les personnes</h1>
    </v-row>
    <v-row v-if="ready">
      <person-info-card v-for="person in persons" :key="person.id" v-bind:person='person'/>
    </v-row>

    <v-btn class="ma-5" fixed dark fab bottom right color="teal">
      <v-icon>mdi-plus</v-icon>
    </v-btn>
  </v-container>
</template>

<script>
import axios from 'axios'
import PersonInfoCard from "../components/PersonInfoCard.vue";

export default {
  name: "persons",
  components: {
    PersonInfoCard
  },
  data() {
    return {
      persons: [],
      ready: false
    }
  },
  mounted() {
    axios.get('http://localhost:5000/persons').then(response =>  {
      this.persons = response.data
      this.ready = true
    })
  }
};
</script>