import { Form, NavLink } from "react-router-dom";
import { MainNavigationLinks } from "./MainNavLinks";
import classes from './styles/MainNavigation.module.css';

export function MainNavigation(){
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
                        <li>
                            <Form action='/logout' method='post' className={({ isActive }) => isActive ? classes.active : undefined } end>
                                <button>Logout</button>
                            </Form>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}