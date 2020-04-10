<template>
    <v-container class='pa-12'>
        <v-row>
            <h1 class='display-3'>Detailed person information view</h1>
        </v-row>
        <v-row>
            <person-edition-form/>
        </v-row>
    </v-container>
</template>

<script>
import PersonEditionForm from '../components/PersonEditionForm.vue'

export default {
    name: 'person',
    components: {
        PersonEditionForm
    }
}
</script>