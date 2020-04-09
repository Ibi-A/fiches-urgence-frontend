<template>
<div>
    <h2>Persons list component</h2>
    <p>I am a placeholder for future persons!</p>
    <person-general-info-card/>
    <person-general-info-card/>
    <person-general-info-card/>
</div>
</template>


<script>
import PersonGeneralInfoCard from './PersonGeneralInfoCard.vue'

export default {
    name: 'persons-list',
    components: {
        PersonGeneralInfoCard
    }
}
</script>