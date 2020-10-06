import React from "react";
import "./Modal.css";
import { motion } from "framer-motion";

const Modal = ({ setSelected, selected }) => {
  // Functions
  const handleClose = (e) => {
    if (e.target.classList.contains("modal")) {
      setSelected(null);
    }
  };
  return (
    <motion.div
      className="modal"
      onClick={handleClose}
      initial={{ y: "-100%" }}
      animate={{ y: 0 }}
    >
      <img src={selected} />
    </motion.div>
  );
};

export default Modal;
