import React, { useContext, useEffect, useState } from "react";
import "./Sidebar.css";
import {
  IconlyProvider,
  Graph,
  Category,
  Bag,
  TwoUsers,
  Folder,
  Chat,
  Setting,
  ChevronRight,
  Logout,
} from "react-iconly";
import headphone from "../assets/headphone.png";
import gift from "../assets/gift.png";
import CategoryButton from "./Category";
import AppContext from "../store/AppContext";
import { motion } from "framer-motion";

const open = {
  width: "296px",
  transition: { staggerChildren: 0.07, delayChildren: 0.2 },
};
const close = {
  width: "88px",
  transition: { staggerChildren: 0.05, staggerDirection: -1 },
};

const open2 = {
  width: "233px",
  justifyContent: "start",
};
const close2 = {
  width: "56px",
  justifyContent: "center",
};
const open3 = {
  width: "233px",
};
const close3 = {
  width: "56px",
  alignItems: "center",
};

const Sidebar = () => {
  const { openSideBar, setOpenSideBar } = useContext(AppContext);
  const [shouldChange, setShouldChange] = useState(true);
  console.log(openSideBar);

  useEffect(() => {
    const check = window.addEventListener("resize", () => {
      if (window.innerWidth > 800) {
        setShouldChange(true);
      } else {
        setShouldChange(false);
        setOpenSideBar(false);
      }
    });
  }, []);

  const mouseEnter = () => {
    if (shouldChange) setOpenSideBar(true);
  };

  const mouseExit = () => {
    if (shouldChange) setOpenSideBar(false);
  };

  return (
    <motion.div
      animate={openSideBar ? open : close}
      className="sidebar-container"
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseExit}
    >
      <div
        className="sidebar-header"
        style={openSideBar ? { width: "233px" } : { width: "auto" }}
      >
        <IconlyProvider
          set="bulk"
          primaryColor="rgba(151, 165, 235, 1)"
          secondaryColor="rgba(255, 204, 145, 1)"
          size={52}
          filled
        >
          <Graph />
        </IconlyProvider>
        {openSideBar && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: openSideBar ? 1 : 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="poppins-bold"
            style={{ fontSize: "20px" }}
          >
            Metrix
          </motion.p>
        )}
      </div>
      <div className="sidebar-middle">
        <CategoryButton name={"Dashboard"} button={<Category />} />
        <CategoryButton name={"Orders"} button={<Bag />} />
        <CategoryButton name={"Customers"} button={<TwoUsers />} />
        <CategoryButton name={"Inventory"} button={<Folder />} />
        <CategoryButton name={"Conversations"} button={<Chat />} />
        <CategoryButton name={"Settings"} button={<Setting />} />
      </div>
      <div className="sidebar-bottom">
        <motion.div
          style={!openSideBar && { paddingLeft: 0 }}
          animate={openSideBar ? open2 : close2}
          className="sidebar-bottom-button1"
        >
          <img width={24} src={headphone} alt="head" />
          {openSideBar && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: openSideBar ? 1 : 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="font1"
            >
              Contact Support
            </motion.p>
          )}
        </motion.div>
        <motion.div
          style={!openSideBar && { paddingLeft: 0 }}
          animate={openSideBar ? open3 : close3}
          className="sidebar-bottom-button2"
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <img width={24} src={gift} alt="gift" />
            {openSideBar && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: openSideBar ? 1 : 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="font1"
              >
                Free Gift Awaits You!
              </motion.p>
            )}
          </div>
          {openSideBar && (
            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: openSideBar ? 1 : 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="font2"
              >
                Upgrade your account
              </motion.p>
              <ChevronRight size={16} primaryColor="rgba(110, 112, 121, 1)" />
            </div>
          )}
        </motion.div>
        <div
          className="sidebar-logout"
          style={
            !openSideBar ? { alignSelf: "center" } : { alignSelf: "start" }
          }
        >
          <Logout set="bulk" size={20} primaryColor="rgba(204, 95, 95, 1)" />
          {openSideBar && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: openSideBar ? 1 : 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="font1"
              style={{ color: "rgba(204, 95, 95, 1)" }}
            >
              Logout
            </motion.p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Sidebar;
