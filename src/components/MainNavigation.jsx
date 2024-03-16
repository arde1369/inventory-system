import { Form, useSearchParams } from "react-router-dom";
import { MainNavigationLinks } from "./MainNavLinks";
import classes from './styles/MainNavigation.module.css';
import { useDispatch } from "react-redux";
import { authActions } from "../redux-store/AuthStore";


export function MainNavigation(){
    const [ searchParams ] = useSearchParams()
    const dispatch = useDispatch()
    
    const loggedInUserSearchParam = searchParams.get('username')

    if(loggedInUserSearchParam !== null && loggedInUserSearchParam !== undefined && loggedInUserSearchParam !== ''){
        dispatch(authActions.setLoggedInUser(loggedInUserSearchParam))
    }

    const pages = [
        {
            text : 'Home',
            path : '/inventory-system'
        }, 
        {
            text : 'New Order',
            path : 'new-order'
        }, 
        {
            text : 'Inventory',
            path : 'inventory'
        }, 
        {
            text : 'Lookup Order',
            path : 'lookup-order'
        }
    ]

    return (
        <header className={classes.header}>
            <nav>
                <div>
                    <ul className={classes.list}>
                        <MainNavigationLinks pages={pages} classes={classes} />
                        <li key="logout">
                            <Form action='/logout' method='post' className={({ isActive }) => isActive ? classes.active : undefined }>
                                <button>Logout</button>
                            </Form>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}