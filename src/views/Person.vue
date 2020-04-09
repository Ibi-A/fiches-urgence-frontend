<template>
    <div>
        <h1>Detailed person information view</h1>
        <person-detailed-info-card/>
    </div>
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