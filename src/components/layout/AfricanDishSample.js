import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../UI/Card';
import { Button } from '@mui/material';
import ForeignDishSample from '../layout/ForeignDishSample';
import img from '../../images/Nigerian/femoree-kn_ANxnwCQ0-unsplash.jpg';
import i from '../../images/Nigerian/femoree-SC7R-d27_9E-unsplash.jpg';
import m from '../../images/Nigerian/istockphoto-1008418658-1024x1024.jpg';
import g from '../../images/Nigerian/istockphoto-1327486555-1024x1024.jpg';
import classes from './Sample.module.css';


const Sample = () => {
    return (

        <section className={classes.sec}>
            <Card>
                <div className={classes.wrapper}>
                    <section className={classes.featured}>
                        <div className={classes.div}>
                            <h2>NIGERIAN DISHES</h2>
                            
                            <p>Here are some samples of our African dishes<br />
                                and if you wish to see more just click on the button below.
                            </p>
                        </div>

                        <ul>
                            <li>
                                <img src={img} alt='' />
                                <a href="#1">Ofe ora</a>
                                <span>N1100</span>
                                <span class="rating"></span>
                            </li>

                            <li>
                                <img src={i} alt='' />
                                <a href="#1">Rice & sauce</a>
                                <span>N1300</span>
                                <span class="rating"></span>
                            </li>
                            <li>
                                <img src={m} alt='' />
                                <a href="#1">Beans & stew</a>
                                <span>N1700</span>
                                <span class="rating"></span>
                            </li>
                            <li>
                                <img src={g} alt='' />
                                <a href="#1">Ofe egwusi</a>
                                <span>N1200</span>
                                <span class="rating"></span>
                            </li>
                        </ul>
                    </section>
                    <Link to='/local'><Button variant='contained' color='warning'>See more &#10230;</Button></Link>
                </div>
            </Card>
            <ForeignDishSample />
        </section>

    )
}

export default Sample;