<template>
  <v-form v-model="valid">
    <h1>{{ personId }}</h1>
    <v-text-field
      label="Prénom(s)"
      required
    ></v-text-field>
    <v-text-field label="Nom de famille" required></v-text-field>
    <v-textarea
      label="Adresse"
      v-bind:value="personId"
    ></v-textarea>
    <v-item-group>
      <v-btn color='success' to='/persons/person-id'>{{personId}}</v-btn>
      <v-btn color='warning' to='/persons/person-id'>Annuler</v-btn>
      <v-btn color='error' to='/persons/person-id'>Supprimer</v-btn>
    </v-item-group>
  </v-form>
</template>


<script>
export default {
  name: 'person-edition-form',
  props: {
    personId: String
  }
}
</script>