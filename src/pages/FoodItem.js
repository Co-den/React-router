import React from 'react';
import Special from '../components/layout/Special';
import img from '../images/Nigerian/femoree-kn_ANxnwCQ0-unsplash.jpg';
import i from '../images/Nigerian/femoree-SC7R-d27_9E-unsplash.jpg';
import m from '../images/Nigerian/istockphoto-1008418658-1024x1024.jpg';
import g from '../images/Nigerian/istockphoto-1327486555-1024x1024.jpg';
import classes from '../pages/foodItem.module.css';

const FoodItem = () => {
    return (
        <div>
            <section className={classes.sec}>
                    <div className={classes.wrapper}>
                    <section className={classes.featured}>
                        <h2>IGBO DELICACIES.</h2>
                        <p>Choose your favourite dish from our
                            broad selection of French dish
                            and enjoy a delicious breakfast,
                            lunch and dinner at home.
                        </p>
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
                    </div>             
            </section>
            <section className={classes.sec}>
                <div className={classes.wrapper}>
                    <section className={classes.featured}>
                        <h2>HAUSA DELICACIES.</h2>
                        <p>Choose your favourite dish from our
                            broad selection of French dish
                            and enjoy a delicious breakfast,
                            lunch and dinner at home.
                        </p>
                        <ul>
                            <li>
                                <img src={img} alt='' />
                                <a href="#1">Ofe ora</a>
                                <span>N1100</span>
                               
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
                </div>
            </section>
            <section className={classes.sec}>
                <div className={classes.wrapper}>
                    <section className={classes.featured}>
                        <h2>YORUBA DELICACIES.</h2>
                        <p>Choose your favourite dish from our
                            broad selection of French dish
                            and enjoy a delicious breakfast,
                            lunch and dinner at home.
                        </p>
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
                </div>
            </section>
            <Special />
        </div>
    )
}

export default FoodItem;