<template>
  <v-form>
    <v-text-field label="Nom" required></v-text-field>
    <v-textarea label="Adresse" v-bind:value="personId"></v-textarea>
    <v-text-field label="Numéro de téléphone principal"></v-text-field>
    <v-text-field label="Numéro de téléphone secondaire"></v-text-field>
    
    <v-item-group>
      <v-btn color='success'>Valider</v-btn>
      <v-btn color='error'>Annuler</v-btn>
    </v-item-group>
  </v-form>
</template>