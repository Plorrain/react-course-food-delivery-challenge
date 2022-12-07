import React, { Fragment } from 'react';

import mealsImage from '../../assets/meals.jpg';

const Header = (props) => {
   return (
    <Fragment>
      <header>
        <h1>React meals</h1>
        <button>Cart</button>
      </header>
      <div>
        <img src="" alt="" />
      </div>
    </Fragment>
   )
}

export default Header;
