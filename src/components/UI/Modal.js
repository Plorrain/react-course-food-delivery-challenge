import { Fragment } from 'react';
import ReactDOM from 'react-dom';

import classes from './Modal.module.css';

const Backdrop = (props) => {
  return (
    <div className={classes.backdrop} />
  );
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
  return (
    <Fragment>
      {/* portalling is available by creating div id in html index (public folder) and by importing reactDOM */}
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
      <ModalOverlay>
        {props.children}
      </ModalOverlay>, portalElement)}
    </Fragment>
  );
};

export default Modal;
