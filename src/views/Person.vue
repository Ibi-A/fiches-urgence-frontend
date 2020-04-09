<template>
    <v-container>
        <v-row>
            <h1 class='display-3'>Detailed person information view</h1>
        </v-row>
        <v-row>
            <person-detailed-info-card/>
        </v-row>
    </v-container>
</template>

<script>
import PersonDetailedInfoCard from '../components/PersonDetailedInfoCard.vue'

export default {
    name: 'person',
    components: {
        PersonDetailedInfoCard
    }
}
</script>