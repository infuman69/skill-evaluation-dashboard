import { createPortal } from "react-dom";
import "./Modal.css";

import PropTypes from 'prop-types';

const Modal = ({ open, children}) => {
  if (!open) return null;

  return createPortal(
    <>
      <div className="overlay"></div>
      {children}
    </>,
    document.getElementById("modal")
  );
};

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;

