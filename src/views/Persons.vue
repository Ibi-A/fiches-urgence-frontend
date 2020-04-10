<template>
  <v-container class="pa-12">
    <v-row>
      <h1 class="display-3">Persons view</h1>
    </v-row>

    <v-row>
      <v-item-group>
        <v-btn color="primary">New</v-btn>
      </v-item-group>
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