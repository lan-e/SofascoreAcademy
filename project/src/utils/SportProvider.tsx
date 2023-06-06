import React, { createContext, useState } from "react";
export const SportContext = createContext(null);

export default function SportProvider({ children }) {
  const [selectedSport, setSelectedSport] = useState("football");

  const setSport = (sport) => {
    setSelectedSport(sport);
  };
  return (
    <SportContext.Provider value={{ selectedSport, setSport }}>
      {children}
    </SportContext.Provider>
  );
}
