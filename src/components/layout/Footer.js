import React from 'react';
import logo from '../../images/white-logo.png';
import classes from './Footer.module.css';

const Footer = () => {
    return (
        <div>
            <footer>
                <div className={classes.wrapper}>
                    <ul>
                        <li>Enugu East Restaurant</li>
                        <li>N0 7b Medical-Road Phase-six</li>
                        <li>Enugu, EN 400103</li>
                        <li>091-3565-1670</li>
                    </ul>
                    <ul>
                        <li>Awka Restaurant</li>
                        <li>Ifite, Next-Level Junction</li>
                        <li>AWKA</li>
                        <li>02.94.23.69.56</li>
                    </ul>
                    <ul>
                        <li><a href="#1">Blog</a></li>
                        <li><a href="#1">Careers</a></li>
                        <li><a href="#1">Privacy Policy</a></li>
                        <li><a href="#1">Contact</a></li>
                    </ul>
                    <ul>
                        <li><img src={logo} alt="logo" /></li>
                        <li>&copy; All rights reserved 2023</li>
                    </ul>
                </div>
            </footer>
        </div>
    )
}

export default Footer