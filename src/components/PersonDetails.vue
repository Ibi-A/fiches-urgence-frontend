<template>
    <div>
        <h1>{{ personInfo['firstName'] }} {{ personInfo['lastName'] }}</h1>
        <h2>{{ personInfo['address'] }}</h2>
    </div>
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
        axios.get('http://localhost:5000/persons/' + this.$props.personId)
        .then(res => {
            console.log(res.data)
            this.personInfo = res.data
        })

        
    }
}
</script>