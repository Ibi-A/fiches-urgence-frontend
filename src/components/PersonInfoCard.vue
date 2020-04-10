<template>
  <v-card class="mx-auto" max-width="500">
    <v-card-title>John Doe</v-card-title>
    <v-card-subtitle>221B Baker Street</v-card-subtitle>
    <v-card-text>
      <strong>Phone numbers</strong>
      <ul>
        <li>+33 6.06.06.06.06</li>
        <li>+33 6.01.02.03.04</li>
      </ul>
    </v-card-text>

    <v-card-actions>
      <v-btn color="primary" to="/persons/person-id">Edit</v-btn>
      <v-btn color="error">Delete</v-btn>
    </v-card-actions>
  </v-card>
</template>