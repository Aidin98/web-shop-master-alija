import React, { useState, useContext, useReducer, useEffect } from "react";
import { items } from "./Data";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [filteredItems, setFilteredItems] = useState(items);

  const showData = (filterState) => {
    setFilteredItems(items.filter((item) => item.tag === filterState));
  };

  return (
    <AppContext.Provider
      value={{ filteredItems ,showData }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
