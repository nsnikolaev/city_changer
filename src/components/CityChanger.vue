<template>
    <div class="CityChanger">
        <select :disabled="!coutrySelectEnable">
            <option>Select Country...</option>
        </select>
        <select :disabled="!stateSelectEnable">
            <option>Select State...</option>
        </select>
        <select :disabled="!citySelectEnable">
            <option>Select City...</option>
        </select>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    computed: mapGetters({
        coutrySelectEnable: 'coutrySelectEnable',
        stateSelectEnable: 'stateSelectEnable',
        citySelectEnable: 'citySelectEnable'
    }),
    methods: mapActions([]),
    created() {
        // TODO: load country list
        setTimeout(() => {
            this.$store.dispatch('setCoutrySelectEnable', true)
        }, 2000) // 2000 - mocking api request
    }
}
</script>

<style>
.CityChanger {
    display: block;
}
</style>
