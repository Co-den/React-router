import React from 'react';
import Card from '../UI/Card';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import img from '../../images/thumb-1.jpg';
import i from '../../images/thumb-2.jpg';
import m from '../../images/thumb-3.jpg';
import g from '../../images/thumb-4.jpg';
import classes from './ForeignDish.module.css';
const ForeignDishSample = () => {
    return (
        <section className={classes.sec}>
            <Card>
                <div className={classes.wrapper}>
                    <section className={classes.featured}>
                        <div className={classes.div}>
                            <h2>FOREIGN DISHES</h2>
                            <p>Here are some samples of our Foreign dishes
                                <br />
                                and if you wish to see more just click on the button below.
                            </p> 
                        </div>
                        <ul>
                            <li>
                                <img src={img} alt='' />
                                <a href="#1">Fugiat nulla sint</a>
                                <span>$30</span>
                                <span class="rating"></span>
                            </li>

                            <li>
                                <img src={i} alt='' />
                                <a href="#1">Noodles</a>
                                <span>$30</span>
                                <span class="rating"></span>
                            </li>
                            <li>
                                <img src={m} alt='' />
                                <a href="#1">Plantain</a>
                                <span>$30</span>
                                <span class="rating"></span>
                            </li>
                            <li>
                                <img src={g} alt='' />
                                <a href="#1">Rice</a>
                                <span>N1200</span>
                                <span class="rating"></span>
                            </li>
                        </ul>
                    </section>
                    <Link to='/foreign'>
                        <Button variant='contained' color='warning' >See more &#10230;</Button>
                    </Link>
                </div>
            </Card>
        </section>
    )
}

export default ForeignDishSample