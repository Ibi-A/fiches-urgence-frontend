<template>
  <v-form>
    <v-text-field label="Nom" required></v-text-field>
    <v-textarea label="Adresse" v-bind:value="personId"></v-textarea>
    <v-text-field label="Numéro de téléphone principal"></v-text-field>
    <v-text-field label="Numéro de téléphone secondaire"></v-text-field>
    
    <v-item-group>
      <v-btn color='success' to='/persons/person-id'>Valider</v-btn>
      <v-btn color='warning' to='/persons/person-id'>Annuler</v-btn>
      <v-btn color='error' to='/persons/person-id'>Supprimer</v-btn>
    </v-item-group>
  </v-form>
</template>