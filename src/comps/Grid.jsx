import React, { useState, useEffect } from "react";
import { db } from "../firebase/Config";
import "./Grid.css";
import DeleteIcon from "@material-ui/icons/Delete";
import { motion } from "framer-motion";

const Grid = ({ setSelected }) => {
  const [images, setImages] = useState([]);

  // Holding The Firebase DB Photos
  useEffect(() => {
    db.collection("images")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setImages(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
  }, []);

  return (
    <div className="grid">
      {images.map((image) => (
        <motion.div
          className="img__fluid"
          key={image.id}
          layout
          whileHover={{ opacity: 1 }}
        >
          <motion.img
            src={image.data.url}
            key={image.id}
            onClick={() => setSelected(image.data.url)}
            initial={{ opacity: 0.8 }}
            animate={{ popacity: 1 }}
            transition={{ delay: 1 }}
          />
          <DeleteIcon
            className="img__delete"
            onClick={() => {
              db.collection("images").doc(image.id).delete();
            }}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default Grid;
