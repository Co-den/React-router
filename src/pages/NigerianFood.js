import React from 'react';
import FoodItem from '../pages/FoodItem.js';
import classes from './NigerianFood.module.css'


const NigerianFood = () => {
    return (
        <div className={classes.body}>
            <section className={classes.summary}>
                <h2>NIGERIAN DELICACIES.</h2>
                <p>Choose your favourite dish from our broad selection of Nigerian dish
                    and enjoy a delicious breakfast, lunch and dinner at home.
                </p>
            </section>
           <FoodItem/>
        </div>
    )
}

export default NigerianFood;