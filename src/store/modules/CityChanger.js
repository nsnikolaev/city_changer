import Api from '@/api/index'

const state = {
    coutrySelectEnable: false, // Coutry select disabling on init
    stateSelectEnable: false, // State select disabling on init
    citySelectEnable: false, // City select disabling on init

    countryList: []
}

const getters = {
    coutrySelectEnable: state => state.coutrySelectEnable,
    stateSelectEnable: state => state.stateSelectEnable,
    citySelectEnable: state => state.citySelectEnable,

    countryList: state => state.countryList
}

const actions = {
    setCoutrySelectEnable({ commit }, status) {
        commit("setCoutrySelectEnable", status)
    },
    setStateSelectEnable({ commit }, status) {
        commit("setStateSelectEnable", status)
    },
    setCitySelectEnable({ commit }, status) {
        commit("setCitySelectEnable", status)
    },

    getCoutryList({ commit }) {
        Api.request('getCoutries', response => {
            if (response.status === true) {
                commit("setCountryList", response.data)
                commit("setCoutrySelectEnable", true)
            }
        }, null)
    }
}

const mutations = {
    setCoutrySelectEnable(state, status) {
        state.coutrySelectEnable = !!status
    },
    setStateSelectEnable(state, status) {
        state.stateSelectEnable = !!status
    },
    setCitySelectEnable(state, status) {
        state.citySelectEnable = !!status
    },

    setCountryList(state, countryList) {
        state.countryList = countryList
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
