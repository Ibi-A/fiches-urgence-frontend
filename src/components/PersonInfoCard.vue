<template>
  <v-col xs="12" sm="12" md="6" lg="4" xl="3">
    <v-card hover @click="switchPage()">
      <v-card-title class="teal--text"><v-icon class="mr-1">mdi-account-box</v-icon>{{ person['firstName'] }} {{ person['lastName'].toUpperCase() }}</v-card-title>
      <v-card-subtitle>{{ person['address'] }}</v-card-subtitle>
      <v-card-text>
        <v-icon class="mr-1">mdi-phone</v-icon>
        <strong>Numéro(s) de téléphone</strong>
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
  props: {
    'person': Object
  },
  data() {
    return {
      ready: false
    }
  },
  methods: {
    switchPage: function() {
      router.replace('/persons/' + this.person['id'])
    }
  }
}
</script>