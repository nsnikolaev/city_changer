const state = {
    coutrySelectEnable: false, // Coutry select disabling on init
    stateSelectEnable: false, // State select disabling on init
    citySelectEnable: false // City select disabling on init
}

const getters = {
    coutrySelectEnable: state => state.coutrySelectEnable,
    stateSelectEnable: state => state.stateSelectEnable,
    citySelectEnable: state => state.citySelectEnable
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
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
