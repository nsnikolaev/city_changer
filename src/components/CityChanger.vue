<template>
    <div class="CityChanger">
        <select :disabled="!coutrySelectEnable" v-model="countryId">
            <option value="0">Select Country...</option>
            <option v-for="country in countryList" :key="country.id" :value="country.id">
                {{country.name}}
            </option>
        </select>
        <select :disabled="!stateSelectEnable" v-model="stateId">
            <option value="0">Select State...</option>
            <option v-for="state in stateList" :key="state.id" :value="state.id">
                {{state.name}}
            </option>
        </select>
        <select :disabled="!citySelectEnable" v-model="cityId">
            <option value="0">Select City...</option>
            <option v-for="city in cityList" :key="city.id" :value="city.name">
                {{city.name}}
            </option>
        </select>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    data() {
        return {
            countryId: 0,
            stateId: 0,
            cityId: 0
        }
    },
    watch: {
        countryId: function(value) {
            this.stateId = 0;
            this.cityId = 0;
            this.$store.dispatch('getStateListByCountryId', value)
        },
        stateId: function(value) {
            this.cityId = 0;
            this.$store.dispatch('getCityListByStateId', value)
        },
        cityId: function(value) {
            if (value != 0) {
                alert(value) // ... TODO: do anything with city id here
            }
        }
    },
    computed: mapGetters({

        coutrySelectEnable: 'coutrySelectEnable',
        countryList: 'countryList',
        coutrySelectedId: 'coutrySelectedId',

        stateSelectEnable: 'stateSelectEnable',
        stateList: 'stateList',

        citySelectEnable: 'citySelectEnable',
        cityList: 'cityList'

    }),
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
