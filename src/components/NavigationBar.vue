<template>
<div>
    <h2>Navigation bar</h2>
    <ul>
        <li><router-link to='/persons'>Persons</router-link></li>
        <li><router-link to='/residents'>Residents</router-link></li>
        <li><router-link to='/contributors'>Contributors</router-link></li>
        <li><router-link to='/health-mutuals'>Health mutuals</router-link></li>
        <li><router-link to='/cities'>Cities</router-link></li>
    </ul>
</div>
</template>

<script>
export default {
    name: 'navigation-bar'
}
</script>