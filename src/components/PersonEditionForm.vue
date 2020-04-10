<template>
  <v-form v-model="valid">
    <v-text-field
      v-model="firstname"
      :rules="nameRules"
      :counter="10"
      label="Prénom(s)"
      required
    >John</v-text-field>
    <v-text-field v-model="lastname" :rules="nameRules" :counter="10" label="Nom de famille" required>Doe</v-text-field>
    <v-textarea
      name="input-7-1"
      label="Adresse"
      value="Château de Moulinsart"
      hint="Hint text"
    ></v-textarea>
    <v-item-group>
      <v-btn color='success' to='/persons/person-id'>Enregistrer</v-btn>
      <v-btn color='warning' to='/persons/person-id'>Annuler</v-btn>
      <v-btn color='error' to='/persons/person-id'>Supprimer</v-btn>
    </v-item-group>
  </v-form>
</template>