import React, { Fragment } from 'react';

import HeaderCartButton from './HeaderCartButton';
import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';

const Header = (props) => {
   return (
    <Fragment>
      <header className={classes.header}>
        <h1>React meals</h1>
        {/* onClick added to link the cart component in app.js */}
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="Delicious Buffet" />
      </div>
    </Fragment>
   )
}

export default Header;
