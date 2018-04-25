//
// data
//

import countries from '@/api/big_data/countries'
import states from '@/api/big_data/states'

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
        }
        let response = {
            status: true,
            data: data
        }
        setTimeout(() => callback(response), 1800) // 1800 - response delay mocking
    }
}
