<template>
    <v-container class="lighten-2">
        <v-row>
            <h1 class='display-3'>Persons view</h1>
        </v-row>
        <v-row>
            <persons-list/>
        </v-row>
    </v-container>
</template>

<script>
import PersonsList from "../components/PersonsList.vue";

export default {
    name: 'persons',
    components: {
        PersonsList
    }
}
</script>