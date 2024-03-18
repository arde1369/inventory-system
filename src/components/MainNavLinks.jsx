import React from 'react';
import { NavLink } from "react-router-dom"

export function MainNavigationLinks({pages, classes}){
    return(
        <>
            {pages.map(page => {
                return (
                    <li key={page.path}>
                        <NavLink to={page.path} className={({ isActive }) => isActive ? classes.active : undefined } >
                            {page.text}
                        </NavLink>
                    </li>
                )
            })}
        </>
    )
}