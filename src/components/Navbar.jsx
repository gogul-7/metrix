import React, { useContext, useEffect, useState } from "react";
import "./Navbar.css";
import { IconlyProvider, Home, Notification, ChevronDown } from "react-iconly";
import AppContext from "../store/AppContext";

const Navbar = () => {
  const { openSideBar, selectedCategory } = useContext(AppContext);
  const [show, setShow] = useState(true);
  useEffect(() => {
    const check = window.addEventListener("resize", () => {
      window.innerWidth > 530 ? setShow(true) : setShow(false);
    });
  }, []);

  return (
    <div
      className="navbar-container"
      style={
        openSideBar
          ? { width: `calc(100% - 296px)` }
          : { width: `calc(100% - 88px)` }
      }
    >
      <div className="navbar-upper">
        <p className="poppins-medium" style={{ fontSize: "20px" }}>
          Dashboard
        </p>
        {show ? (
          <div className="nav-top-right">
            <div className="nav-dropdown">
              <p className="drop-title">Nanny’s Shop</p>
              <IconlyProvider primaryColor="rgba(28, 29, 34, 1)" size={20}>
                <ChevronDown />
              </IconlyProvider>
            </div>
            <IconlyProvider
              set="bulk"
              primaryColor="rgba(85, 112, 241, 1)"
              size={20}
            >
              <Notification />
            </IconlyProvider>
            <div className="profile-pic"></div>
          </div>
        ) : (
          <div className="nav-top-right-hidden">
            <div className="profile-pic"></div>
            <div className="nav-top-right-sub">
              <IconlyProvider
                set="bulk"
                primaryColor="rgba(85, 112, 241, 1)"
                size={20}
              >
                <Notification />
              </IconlyProvider>
              <div className="nav-dropdown">
                <p className="drop-title">Nanny’s Shop</p>
                <IconlyProvider primaryColor="rgba(28, 29, 34, 1)" size={20}>
                  <ChevronDown />
                </IconlyProvider>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="navbar-bottom">
        <IconlyProvider
          set="bulk"
          primaryColor="rgba(85, 112, 241, 1)"
          size={16}
        >
          <Home />
        </IconlyProvider>
        <p className="navbar-font">/ {selectedCategory}</p>
      </div>
    </div>
  );
};

export default Navbar;
