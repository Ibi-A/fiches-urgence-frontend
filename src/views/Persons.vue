<template>
    <div>
        <h1>Persons view</h1>
        <persons-list/>
    </div>
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