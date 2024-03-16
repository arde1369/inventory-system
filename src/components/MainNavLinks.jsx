import { NavLink } from "react-router-dom"

export function MainNavigationLinks({pages, classes}){
    return(
        <>
            {pages.map(page => {
                return (
                    <li>
                        <NavLink to={page.path} className={({ isActive }) => isActive ? classes.active : undefined } end >
                            {page.text}
                        </NavLink>
                    </li>
                )
            })}
        </>
    )
}