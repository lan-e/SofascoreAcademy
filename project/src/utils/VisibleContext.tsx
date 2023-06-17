import React, { createContext, useState } from "react";

export const VisibleContext = createContext(null);

export const VisibleProvider = ({ children }) => {
  const [showEventWindow, setShowEventWindow] = useState(false);

  const setVisible = (value) => {
    setShowEventWindow(value);
  };

  return (
    <VisibleContext.Provider value={{ showEventWindow, setVisible }}>
      {children}
    </VisibleContext.Provider>
  );
};
