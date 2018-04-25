<template>
    <div class="CityChanger">
        <select :disabled="!coutrySelectEnable" v-model="countryId">
            <option value="0">Select Country...</option>
            <option v-for="country in countryList" :key="country.id" :value="country.id">
                {{country.name}}
            </option>
        </select>
        <select :disabled="!stateSelectEnable">
            <option>Select State...</option>
            <option v-for="state in stateList" :key="state.id" :value="state.id">
                {{state.name}}
            </option>
        </select>
        <select :disabled="!citySelectEnable">
            <option>Select City...</option>
        </select>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    data() {
        return {
            countryId: 0
        }
    },
    watch: {
        countryId: function(value) {
            this.$store.dispatch('getStateListByCountryId', value)
        }
    },
    computed: mapGetters({

        coutrySelectEnable: 'coutrySelectEnable',
        countryList: 'countryList',
        coutrySelectedId: 'coutrySelectedId',

        stateSelectEnable: 'stateSelectEnable',
        stateList: 'stateList',

        citySelectEnable: 'citySelectEnable'

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
