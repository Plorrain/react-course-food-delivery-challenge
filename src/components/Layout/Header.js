import React, { Fragment } from 'react';

import HeaderCartButton from './HeaderCartButton';
import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';

const Header = (props) => {
   return (
    <Fragment>
      <header className={classes.header}>
        <h1>React meals</h1>
        {/* Button not showing in browser -->  header width reduced to 90% needs to be fixed*/}
        <HeaderCartButton />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="Delicious Buffet" />
      </div>
    </Fragment>
   )
}

export default Header;
