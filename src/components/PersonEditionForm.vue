<template>
  <v-form>
    <v-container>
      <v-row col="12">
        <v-col xs="12" class="md-4">
          <v-text-field label="Prénom(s)" required></v-text-field>
        </v-col>
        <v-col xs="12" class="md-4">
          <v-text-field label="Nom de famille" required></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col xs="12" class="md-4">
          <v-textarea label="Adresse" v-bind:value="personId"></v-textarea>
        </v-col>
      </v-row>
      <v-row>
        <v-col xs="12" class="md-4">
          <v-text-field label="Numéro de téléphone principal"></v-text-field>
        </v-col>
        <v-col xs="12" class="md-4">
          <v-text-field label="Numéro de téléphone secondaire"></v-text-field>
        </v-col>
      </v-row>
      <v-row justify="space-between" align="center" class="mx-1">
        <div>
          <v-btn fab small class="mx-2 my-5" color="error" to="/persons/person-id">
            <v-icon>mdi-account-off</v-icon>
          </v-btn>
          <v-btn fab small class="mx-2 my-5" color="warning" to="/persons/person-id">
            <v-icon>mdi-account-cancel</v-icon>
          </v-btn>
        </div>
        <div>
          <v-btn fab large class="mx-2 my-5" color="success" to="/persons/person-id">
            <v-icon>mdi-account-edit</v-icon>
          </v-btn>
        </div>
      </v-row>
    </v-container>
  </v-form>
</template>


<script>
export default {
  name: "person-edition-form",
  props: {
    personId: String
  }
};
</script>

<style scoped>
.space-between {
  display: flex;
  justify-content: space-between;
}
</style>