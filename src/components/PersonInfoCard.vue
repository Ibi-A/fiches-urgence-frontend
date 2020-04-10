<template>
  <v-col xs="12" sm="12" md="6" lg="4" xl="3">
    <v-card hover @click="switchPage()">
      <v-card-title class="teal--text">John Doe</v-card-title>
      <v-card-subtitle>221B Baker Street</v-card-subtitle>
      <v-card-text>
        <strong>Numéros de téléphone</strong>
        <ul>
          <li>(+33) 06.06.06.06.06</li>
          <li>(+33) 06.01.02.03.04</li>
        </ul>
      </v-card-text>
    </v-card>
  </v-col>
</template>


<script>
import router from '../router/index.js'

export default {
  name: 'person-info-card',
  methods: {
    switchPage: function() {
      router.replace('/persons/person-id')
    }
  }
}
</script>