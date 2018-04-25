import Vue from 'vue'
import Vuex from 'vuex'

import CityChanger from '@/store/modules/CityChanger'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        CityChanger
    },
    strict: process.env.NODE_ENV !== 'production'
})
