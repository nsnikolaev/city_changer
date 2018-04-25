import Api from '@/api/index'

const state = {

    coutrySelectEnable: false,
    countryList: [],
    coutrySelectedId: 0,

    stateSelectEnable: false,
    stateList: [],
    
    citySelectEnable: false,
    cityList: []
    
}

const getters = {

    coutrySelectEnable: state => state.coutrySelectEnable,
    countryList: state => state.countryList,
    coutrySelectedId: state => state.coutrySelectedId,

    stateSelectEnable: state => state.stateSelectEnable,
    stateList: state => state.stateList,

    citySelectEnable: state => state.citySelectEnable,
    cityList: state => state.cityList,

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
        commit("cleanCityList")
        commit("setCitySelectEnable", false)
        if (countryId == 0) return
        Api.request('getStateListByCountryId', response => {
            if (response.status === true) {
                commit("setStateList", response.data)
                commit("setStateSelectEnable", true)
            }
        }, countryId)
    },

    setCitySelectEnable({ commit }, status) {
        commit("setCitySelectEnable", status)
    },
    getCityListByStateId({ commit }, stateId) {
        commit("cleanCityList")
        commit("setCitySelectEnable", false)
        if (stateId == 0) return
        Api.request('getCityListByStateId', response => {
            if (response.status === true) {
                commit("setCityList", response.data)
                commit("setCitySelectEnable", true)
            }
        }, stateId)
    },
    
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
    },
    setCityList(state, cityList) {
        state.cityList = cityList
    },
    cleanCityList(state) {
        state.cityList = []
    },

}

export default {
    state,
    getters,
    actions,
    mutations
}
