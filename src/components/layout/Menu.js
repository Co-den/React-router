import React from 'react';
import {Link} from 'react-router-dom';
import AfricanDishSample from '../layout/AfricanDishSample';
import Card from '../UI/Card';
import { Button } from '@mui/material';
import classes from './Menu.module.css'
const Menu = () => {
    return (
        <div className={classes.wrapper}>
            <section className={classes.home}>
                <div className={classes.btn}>
                    <Link to='/menu'>
                    <Button variant='contained' color='warning'>see more &#10230;</Button>
                    </Link>
                </div>
               
                <h3>Menu</h3>
                <Card>
                    <ul>
                        <li>
                            <span className={classes.dish}>Noodles</span>
                            <span className={classes.price}>N1200</span>
                            <span className={classes.description}>Noodles, tomato, egg, onions, pepper, veggie</span>
                        </li>
                        <li>
                            <span className={classes.dish}>Sphagetti</span>
                            <span className={classes.price}>N1000</span>
                            <span className={classes.description}>Spaghetti, tomato, onion, pepper, titus, hotdog</span>
                        </li>
                        <li>
                            <span className={classes.dish}>Fried Rice</span>
                            <span className={classes.price}>N900</span>
                            <span className={classes.description}>Rice, chicken, salad, hotdog</span>
                        </li>
                        <li>
                            <span className={classes.dish}>Ukwa</span>
                            <span className={classes.price}>N1400</span>
                            <span className={classes.description}>Ukwa, red-oil, onions,pepper, dried fish</span>
                        </li>
                    </ul>
                </Card>
            </section>
            <AfricanDishSample />
        </div>
    )
}

export default Menu