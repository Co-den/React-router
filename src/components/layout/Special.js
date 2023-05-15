import classes from './Special.module.css';
const Special = () => {
    return (
       <div>
        <div className={classes.body}>
            <h2 className={classes.h1}>SPECIALS</h2>
            <div className={classes.d}>
                <div className={classes.special}>
                    <ul>
                        <li><a href='#!'>Sharwama</a></li>
                        <li><a href='#!'>Burger</a></li>
                        <li><a href='#!'>Pizza</a></li>
                    </ul>
                    <ul>
                        <li><a href='#!'>Parfait</a></li>
                        <li><a href='#!'>Zobo</a></li>
                        <li><a href='#!'>Soya-milk</a></li>
                    </ul>
                </div>
                <div className={classes.special}>
                    <ul>
                        <li><a href='#!'>Sharwama</a></li>
                        <li><a href='#!'>Burger</a></li>
                        <li><a href='#!'>Pizza</a></li>
                    </ul>
                    <ul>
                        <li><a href='#!'>Parfait</a></li>
                        <li><a href='#!'>Zobo</a></li>
                        <li><a href='#!'>Soya-milk</a></li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
    )
}

export default Special;