import { Form, Link, useNavigation } from 'react-router-dom';
import classes from './styles/Login.module.css';

export function Login(){

    const navigation = useNavigation()
    const isSubmitting = navigation.isSubmitting === 'submitting'

    return (
        <Form method="post" className={classes.form}>
            <h1>User Login</h1>
            <p>
                <label htmlFor="username">Email</label>
                <input id="username" type="text" name="username" required />
            </p>
            {/* <p>
                <label htmlFor="image">Password</label>
                <input id="password" type="password" name="password" required />
            </p> */}
            <div className={classes.actions}>
                <button disabled={isSubmitting}>{isSubmitting ? 'Logging in...' : 'Login'}</button>
            </div>
        </Form>
    )
}