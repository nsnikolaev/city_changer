const generatePendingErrors = true

//
// data
//
// ...

//
// commands
//
// ...

export default { // mocking client-server processing

    request(command, callback, requestData) {
        let data = null
        switch (command) {
            case 'index':
                break
        }
        let status = generatePendingErrors ? (Math.random() >= 0.3) : true // random status mocking error
        let response = {
            status: status,
            data: data
        }
        setTimeout(() => callback(response), 1000) // 1000 - response delay mocking
    }
}
