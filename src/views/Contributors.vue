<template>
  <v-container class="pa-12">
    <h1 class="display-3">Tous les intervenants</h1>

    <v-btn class="ma-5" fixed dark fab bottom right color="success" @click="dialog = true">
      <v-icon>mdi-plus</v-icon>
    </v-btn>

    <v-dialog v-model="dialog" max-width="1000">
      <v-card>
        <contributor-edition-form />
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import ContributorEditionForm from '../components/ContributorEditionForm'


export default {
    name: 'contributors',
    components: {
        ContributorEditionForm
    },
    data() {
        return {
            dialog: false
        }
    }
}
</script>