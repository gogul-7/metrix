import React, { createContext, useState } from "react";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState("Dashboard");
  const [backDrop, setBackDrop] = useState(false);
  const [openSideBar, setOpenSideBar] = useState(false);
  return (
    <AppContext.Provider
      value={{
        selectedCategory,
        setSelectedCategory,
        backDrop,
        setBackDrop,
        openSideBar,
        setOpenSideBar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
