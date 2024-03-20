import React from 'react';
import { redirect } from "react-router-dom";
import { Login } from "../components/Login";
import { verifyUsername } from '../http/AuthHttpClient';

export function AuthenticationPage() {
    return <Login />
}

export async function authAction({request}){

    const reqData = await request.formData()

    const authData = {
        username : reqData.get('username'),
        // password : reqData.get('password')
    }

    const response = verifyUsername(authData)

    if(response.ok){
    //     const resData = await response.json()
    //     const token = resData.token

    //     localStorage.setItem('auth-token', token)
            localStorage.setItem('auth-token', response.token)

        const expiration = new Date()
        expiration.setHours(expiration.getHours() + 1)

        localStorage.setItem('expiration', expiration.toISOString())

        return redirect('/inventory-system?username='+authData.username)
    }

    return response
}