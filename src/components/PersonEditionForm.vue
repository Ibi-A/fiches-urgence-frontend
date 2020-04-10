<template>
  <v-form v-model="valid">
    <v-text-field
      v-model="firstname"
      :rules="nameRules"
      :counter="10"
      label="First name"
      required
    >John</v-text-field>
    <v-text-field v-model="lastname" :rules="nameRules" :counter="10" label="Last name" required>Doe</v-text-field>
    <v-textarea
      name="input-7-1"
      label="Address"
      value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
      hint="Hint text"
    ></v-textarea>
    <v-item-group>
      <v-btn color='success' to='/persons/person-id'>Save</v-btn>
      <v-btn color='warning' to='/persons/person-id'>Cancel</v-btn>
      <v-btn color='error' to='/persons/person-id'>Delete</v-btn>
    </v-item-group>
  </v-form>
</template>