import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from '@mui/material';
import classes from './SignIn.module.css';
import { authActions } from '../store/ui-slice';

const SignIn = props => {
    const dispatch = useDispatch();
    const signInHandler = (event) => {
        event.preventDefault();
        dispatch(authActions.signIn());

    }
    return (
        <div className={classes.div}>
            <div className={classes.login}>
                <h2>Login</h2>
                <h3>Welcome to our page</h3>
                <form className={classes.form} onSubmit={signInHandler}>
                    <div className={classes.textbox}>
                        <input type="text" placeholder="username" />
                    </div>
                    <div className={classes.textbox}>
                        <input type="password" placeholder="password" />
                    </div>
                    <Button type="submit" variant='contained' color='warning'>LOGIN</Button>
                    <a href="#!">Forgot your credentials?</a>
                </form>
            </div>
        </div>
    )
}
export default SignIn;