<template>
  <v-form>
    <v-text-field label="Nom" required></v-text-field>
    <v-text-field label="Code postal" required></v-text-field>
    
    <v-btn fab small class="mx-2" color="warning">
      <v-icon>mdi-cancel</v-icon>
    </v-btn>
    <v-btn fab large class="mx-2" color="success">
      <v-icon>mdi-plus</v-icon>
    </v-btn>
    
  </v-form>
</template>