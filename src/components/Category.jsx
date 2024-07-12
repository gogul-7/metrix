import React, { useContext } from "react";
import "./Category.css";
import { IconlyProvider } from "react-iconly";
import AppContext from "../store/AppContext";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const open = {
  width: "233px",
  justifyContent: "start",
  transition: {
    y: { stiffness: 1000 },
  },
};
const close = {
  width: "56px",
  justifyContent: "center",
  transition: {
    y: { stiffness: 1000 },
  },
};

const variants = {
  open: {
    width: "233px",
    justifyContent: "start",
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    width: "56px",
    justifyContent: "center",
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const CategoryButton = ({ name, button }) => {
  const { selectedCategory, setSelectedCategory, openSideBar, setOpenSideBar } =
    useContext(AppContext);
  const navigate = useNavigate();

  const handleClick = (name) => {
    setSelectedCategory(name);
    if (name === "Dashboard") navigate("/");
    else navigate(name);
  };

  return (
    <motion.div
      animate={openSideBar ? open : close}
      variants={variants}
      style={!openSideBar && { paddingLeft: 0 }}
      className={
        selectedCategory === name ? "selected-container" : "category-container"
      }
      onClick={() => handleClick(name)}
    >
      <IconlyProvider
        set={selectedCategory === name ? "bulk" : "light"}
        size={24}
      >
        {button}
      </IconlyProvider>
      {openSideBar && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: openSideBar ? 1 : 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="font1"
        >
          {name}
        </motion.p>
      )}
    </motion.div>
  );
};

export default CategoryButton;
