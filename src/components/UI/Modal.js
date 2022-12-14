import { Fragment } from 'react';

import classes from './Modal.module.css';

const Backdrop = (props) => {
  return (
    <div className={classes.backdrop} />
  );
};

const Overlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  return (
    <Fragment>
      <Backdrop />
      <Overlay />
    </Fragment>
  );
};

export default Modal;
