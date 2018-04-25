<template>
    <div class="CityChanger">
        <select :disabled="!coutrySelectEnable">
            <option>Select Country...</option>
            <option v-for="country in countryList" :key="country.id">[{{country.sortname}}] {{country.name}}</option>
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
        citySelectEnable: 'citySelectEnable',

        countryList: 'countryList'
    }),
    methods: mapActions([]),
    created() {
        this.$store.dispatch('getCoutryList')
    }
}
</script>

<style>
.CityChanger {
    display: block;
}
</style>
