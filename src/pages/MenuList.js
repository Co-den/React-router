import React from 'react';
import Card from './Card';
import classes from './MenuList.module.css'
const MenuList = () => {
    return (
        <div className={classes.wrapper}>
            <section className={classes.home}>   
                <h3>Local Menu</h3>
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
                 <h3>Foreign Menu</h3>
                <Card>
                    <ul>
                        <li>
                            <span className={classes.dish}>Noodles</span>
                            <span className={classes.price}>$20</span>
                            <span className={classes.description}>Noodles, tomato, egg, onions, pepper, veggie</span>
                        </li>
                        <li>
                            <span className={classes.dish}>Sphagetti</span>
                            <span className={classes.price}>$15</span>
                            <span className={classes.description}>Spaghetti, tomato, onion, pepper, titus, hotdog</span>
                        </li>
                        <li>
                            <span className={classes.dish}>Fried Rice</span>
                            <span className={classes.price}>$18</span>
                            <span className={classes.description}>Rice, chicken, salad, hotdog</span>
                        </li>
                        <li>
                            <span className={classes.dish}>Ukwa</span>
                            <span className={classes.price}>$12</span>
                            <span className={classes.description}>Ukwa, red-oil, onions,pepper, dried fish</span>
                        </li>
                    </ul>
                </Card>
            </section>
        </div>
    )
}

export default MenuList;