import { redirect } from "react-router-dom"

export function checkIsLoggedIn(){
    if(localStorage.getItem('auth-token')){
        return true
    }
    return redirect('/')
}