import React from 'react';
import { redirect } from "react-router-dom";
import { Login } from "../components/Login";

export function AuthenticationPage() {
    return <Login />
}

export async function authAction({request}){

    const reqData = await request.formData()

    const authData = {
        email : reqData.email,
        password : reqData.password
    }

    // const response = await fetch('localhost:8080/login', {
    //     method : 'POST',
    //     headers : {
    //         'Content-Type' : 'application/json'
    //     },
    //     body : JSON.stringify(authData)
    // })

    // if(response.ok){
    //     const resData = await response.json()
    //     const token = resData.token

    //     localStorage.setItem('auth-token', token)
            localStorage.setItem('auth-token', 'logged-in')

    //     const expiration = new Date()
    //     expiration.setHours(expiration.getHours() + 1)

    //     localStorage.setItem('expiration', expiration.toISOString())

        return redirect('/home')
    // }

    // return response
}