export function verifyUsername(authData) {
    // const response = await fetch('localhost:8080/login', {
    //     method : 'POST',
    //     headers : {
    //         'Content-Type' : 'application/json'
    //     },
    //     body : JSON.stringify(authData)
    // })

    // return response

    const response = {
        status : 200,
        ok : true,
        errors : false,
        token : 'LOGGED-IN'
    }

    return response
}