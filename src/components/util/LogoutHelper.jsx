import React from 'react';
import { redirect } from "react-router-dom"

export function logoutHelper(){
    localStorage.removeItem('auth-token')
    return redirect('/')
}