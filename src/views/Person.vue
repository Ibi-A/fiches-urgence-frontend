<template>
  <v-container class="pa-12">
    <v-row>
      <h1 class="display-3">Modifier une personne</h1>
    </v-row>
    <v-row>
      <v-col xs="12" sm="10" md="8" lg="6" xl="4">
        <person-edition-form v-bind:personId="personId" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import PersonEditionForm from "../components/PersonEditionForm.vue";

export default {
  name: "person",
  components: {
    PersonEditionForm
  },
  data() {
    return {
      personId: null
    };
  }
};
</script>