<template>
  <v-form>
    <v-text-field append-icon="mdi-form-textbox" label="Prénom(s)" required></v-text-field>
    <v-text-field append-icon="mdi-form-textbox" label="Nom de famille" required></v-text-field>
    <v-textarea append-icon="mdi-map-marker" label="Adresse" v-bind:value="personId"></v-textarea>
    <v-text-field append-icon="mdi-cellphone" label="Numéro de téléphone principal"></v-text-field>
    <v-text-field append-icon="mdi-cellphone" label="Numéro de téléphone secondaire"></v-text-field>
    <v-text-field append-icon="mdi-card-account-details" label="Rôle" required></v-text-field>

    <v-btn fab small class="mx-2" color="warning">
      <v-icon>mdi-account-cancel</v-icon>
    </v-btn>
    <v-btn fab large class="mx-2" color="success">
      <v-icon>mdi-account-plus</v-icon>
    </v-btn>
  </v-form>
</template>