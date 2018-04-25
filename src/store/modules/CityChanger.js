import Api from '@/api/index'

const state = {

    coutrySelectEnable: false,
    countryList: [],
    coutrySelectedId: 0,

    stateSelectEnable: false,
    stateList: [],
    
    citySelectEnable: false
    
}

const getters = {

    coutrySelectEnable: state => state.coutrySelectEnable,
    countryList: state => state.countryList,
    coutrySelectedId: state => state.coutrySelectedId,

    stateSelectEnable: state => state.stateSelectEnable,
    stateList: state => state.stateList,

    citySelectEnable: state => state.citySelectEnable

}

const actions = {

    setCoutrySelectEnable({ commit }, status) {
        commit("setCoutrySelectEnable", status)
    },
    getCoutryList({ commit }) {
        Api.request('getCoutries', response => {
            if (response.status === true) {
                commit("setCountryList", response.data)
                commit("setCoutrySelectEnable", true)
            }
        }, null)
    },

    setStateSelectEnable({ commit }, status) {
        commit("setStateSelectEnable", status)
    },
    getStateListByCountryId({ commit }, countryId) {
        commit("cleanStateList")
        commit("setStateSelectEnable", false)
        Api.request('getStateListByCountryId', response => {
            if (response.status === true) {
                commit("setStateList", response.data)
                commit("setStateSelectEnable", true)
            }
        }, countryId)
    },

    setCitySelectEnable({ commit }, status) {
        commit("setCitySelectEnable", status)
    }
    
}

const mutations = {

    setCoutrySelectEnable(state, status) {
        state.coutrySelectEnable = !!status
    },
    setCountryList(state, countryList) {
        state.countryList = countryList
    },

    setStateSelectEnable(state, status) {
        state.stateSelectEnable = !!status
    },
    setStateList(state, stateList) {
        state.stateList = stateList
    },
    cleanStateList(state) {
        state.stateList = []
    },

    setCitySelectEnable(state, status) {
        state.citySelectEnable = !!status
    }

}

export default {
    state,
    getters,
    actions,
    mutations
}
