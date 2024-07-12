import "./App.css";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Orders from "./pages/Orders";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Customers from "./pages/Customers";
import Inventory from "./pages/Inventory";
import Conversations from "./pages/Conversations";
import { Settings } from "./pages/Settings";
import { AddImage } from "./components/AddImage";
import { useContext } from "react";
import AppContext from "./store/AppContext";
import { motion } from "framer-motion";

const open = {
  marginLeft: "296px",
};

const close = {
  marginLeft: "88px",
};

function App() {
  const { openSideBar } = useContext(AppContext);

  return (
    <div className="dashboard-container">
      <AddImage />
      <Sidebar />
      <motion.div
        initial={close}
        animate={openSideBar ? open : close}
        className="content-container"
      >
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />}></Route>
            <Route path="/Orders" element={<Orders />}></Route>
            <Route path="/Customers" element={<Customers />}></Route>
            <Route path="/Inventory" element={<Inventory />}></Route>
            <Route path="/Conversations" element={<Conversations />}></Route>
            <Route path="/Settings" element={<Settings />}></Route>
          </Routes>
        </div>
      </motion.div>
    </div>
  );
}

export default App;
