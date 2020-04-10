<template>
  <v-container class="pa-12">
    <v-row>
      <h1 class="display-3">Consultation/modification d'une personne</h1>
    </v-row>
    <v-row>
      <person-edition-form v-bind:personId="personId" />
    </v-row>
  </v-container>
</template>

<script>
import PersonEditionForm from "../components/PersonEditionForm.vue";

console.log("###########################");
console.log("###########################");
console.log(this.$router);
console.log("###########################");
console.log("###########################");

export default {
  name: "person",
  components: {
    PersonEditionForm
  },
  data() {
    return {
      personId: this.$router.params.id
    };
  }
};
</script>