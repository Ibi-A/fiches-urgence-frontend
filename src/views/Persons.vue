<template>
  <v-container class="pa-12">
    <v-row>
      <h1 class="display-3 mx-3">Persons view</h1>
    </v-row>
    <v-row>
      <person-info-card />
      <person-info-card />
      <person-info-card />
      <person-info-card />
      <person-info-card />
      <person-info-card />
      <person-info-card />
      <person-info-card />
      <person-info-card />
      <person-info-card />
      <person-info-card />


    </v-row>

    <v-btn class="ma-5" fixed dark fab bottom right color="primary">
      <v-icon>mdi-plus</v-icon>
    </v-btn>
  </v-container>
</template>

<script>
import PersonInfoCard from "../components/PersonInfoCard.vue";

export default {
  name: "persons",
  components: {
    PersonInfoCard
  }
};
</script>