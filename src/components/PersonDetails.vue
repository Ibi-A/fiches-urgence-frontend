<template>
  <v-card
    class="mx-auto"
    max-width="344"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4">OVERLINE</div>
        <v-list-item-title class="headline mb-1">{{ personInfo['firstName'] }} {{ personInfo['lastName'] }}</v-list-item-title>
        <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="80"
        color="grey"
      ></v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-btn text>Modifier</v-btn>
      <v-btn text>Supprimer</v-btn>
    </v-card-actions>
  </v-card>
</template>


<script>

import axios from 'axios'

export default {
    name: 'PersonDetails',
    props: {
        personId: String
    },
    data: function() {
        return {
            personInfo: null,
        }
    },
    mounted: function() {
        axios.get('http://localhost:5000/persons/' + this.$route.params.personId)
        .then(res => {
            console.log(res.data)
            this.personInfo = res.data
        })

        
    }
}
</script>