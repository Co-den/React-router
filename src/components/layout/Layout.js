import { Fragment } from 'react';
import classes from './Layout.module.css';
import MainHeader from './MainNavigation';

const Layout = (props) => {
    return (
        <Fragment>
            <MainHeader />
            <main className={classes.main}>{props.children}</main>
        </Fragment>
    )
}

export default Layout