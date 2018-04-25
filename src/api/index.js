//
// data
//

let countries = [
    {
        id: 1,
        name: "Russia",
    },
    {
        id: 2,
        name: "United States",
    }
]
let states = [
    {
        id: 1,
        name: "Astrahan",
        country_id: 1
    },
    {
        id: 2,
        name: "Bashkortostan",
        country_id: 1
    },
    {
        id: 3,
        name: "Alabama",
        country_id: 2
    },
    {
        id: 4,
        name: "Alaska",
        country_id: 2
    }
]
let cities = [
    {
        id: 1,
        name: "Kamyzjak",
        state_id: 1
    },
    {
        id: 2,
        name: "Agidel",
        state_id: 2
    },
    {
        id: 3,
        name: "Addison",
        state_id: 3
    },
    {
        id: 4,
        name: "Sitka",
        state_id: 4
    }
]


//
// commands
//
// ...

export default { // mocking client-server processing

    request(command, callback, requestData) {
        let data = null
        switch (command) {
            case 'getCoutries':
                data = countries
                break
            case 'getStateListByCountryId':
                data = states.filter(state => !!(state.country_id == requestData))
                break
            case 'getCityListByStateId':
                data = cities.filter(city => !!(city.state_id == requestData))
                break
        }
        let response = {
            status: true,
            data: data
        }
        setTimeout(() => callback(response), 400) // 800 - response delay mocking
    }
}
