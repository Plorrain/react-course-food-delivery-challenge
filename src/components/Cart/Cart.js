import { Fragment } from "react";

import Modal from '../UI/Modal';
import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
  // again the key={item.id} in the <li> had to be added otherwise errors

  return (
    <Fragment>
      <Modal>
        {cartItems}
        <div className={classes.total}>
          <span>Total Amount</span>
          <span>35.52</span>
        </div>
        <div className={classes.actions}>
          <button className={classes['button--alt']}>Close</button>
          <button calssName={classes.button}>Order</button>
        </div>
      </Modal>
    </Fragment>
  );
};

export default Cart;
