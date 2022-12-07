import React, { Fragment } from 'react';

import mealsImage from '../../assets/meals.jpg';
import classes from './Header.modul.css';

const Header = (props) => {
   return (
    <Fragment>
      <header className={classes.header}>
        <h1>React meals</h1>
        <button>Cart</button>
      </header>
      <div classname={classes['main-image']}>
        <img src={mealsImage} alt="Delicious Buffet" />
      </div>
    </Fragment>
   )
}

export default Header;
