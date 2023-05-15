import React from 'react';
import FoodItem2 from '../pages/FoodItem2.js';
import classes from './NigerianFood.module.css'


const ForeignFood = () => {
    return (
        <div className={classes.body}>
            <section className={classes.summary}>
                <h2>FOREIGN DELICACIES.</h2>
                <p>Choose your favourite dish from our broad selection of Nigerian dish
                    and enjoy a delicious breakfast, lunch and dinner at home.
                </p>
            </section>
            <FoodItem2 />
        </div>
    )
}

export default ForeignFood;  