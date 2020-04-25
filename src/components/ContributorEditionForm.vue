<template>
  <v-form>
    <v-text-field label="Prénom(s)" required></v-text-field>
    <v-text-field label="Nom de famille" required></v-text-field>
    <v-textarea label="Adresse" v-bind:value="personId"></v-textarea>
    <v-text-field label="Numéro de téléphone principal"></v-text-field>
    <v-text-field label="Numéro de téléphone secondaire"></v-text-field>
    <v-text-field label="Rôle" required></v-text-field>

    <v-btn fab small class="mx-2" color="warning">
      <v-icon>mdi-account-cancel</v-icon>
    </v-btn>
    <v-btn fab large class="mx-2" color="success">
      <v-icon>mdi-account-plus</v-icon>
    </v-btn>
  </v-form>
</template>