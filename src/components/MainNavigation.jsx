import { Form, NavLink } from "react-router-dom";
import classes from './styles/MainNavigation.module.css';

export function MainNavigation(){

    return (
        <header className={classes.header}>
            <nav>
                <div>
                    <ul className={classes.list}>
                        <li>
                            <NavLink to='/home' className={({ isActive }) => isActive ? classes.active : undefined } end >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/new-order' className={({ isActive }) => isActive ? classes.active : undefined } end >
                                New Order
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/inventory' className={({ isActive }) => isActive ? classes.active : undefined } end >
                                Inventory
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/lookup-order' className={({ isActive }) => isActive ? classes.active : undefined } end >
                                Lookup Orders
                            </NavLink>
                        </li>
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