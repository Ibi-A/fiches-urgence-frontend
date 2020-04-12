<template>
  <v-col xs="12" sm="10" md="8" lg="6" xl="4">
    <v-form>
      <v-text-field label="Prénom(s)" required></v-text-field>
      <v-text-field label="Nom de famille" required></v-text-field>
      <v-textarea label="Adresse" v-bind:value="personId"></v-textarea>
      <v-text-field label="Numéro de téléphone principal"></v-text-field>
      <v-text-field label="Numéro de téléphone secondaire"></v-text-field>

      <v-btn fab small class="mx-2 my-5" color="error" to="/persons/person-id">
        <v-icon>mdi-account-off</v-icon>
      </v-btn>
      <v-btn fab small class="mx-2 my-5" color="warning" to="/persons/person-id">
        <v-icon>mdi-account-cancel</v-icon>
      </v-btn>
      <v-btn fab large class="mx-2 my-5" color="success" to="/persons/person-id">
        <v-icon>mdi-account-edit</v-icon>
      </v-btn>
    </v-form>
  </v-col>
</template>


<script>
export default {
  name: "person-edition-form",
  props: {
    personId: String
  }
};
</script>