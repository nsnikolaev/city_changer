<template>
    <div id="app">
        <CityChanger/>
    </div>
</template>

<script>
import CityChanger from '@/components/CityChanger.vue'

export default {
    name: 'app',
    components: {
        CityChanger
    }
}
</script>

<style>
#app {
    display: block;
}
</style>
