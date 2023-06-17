import React, { createContext, useState } from "react";
export const DateContext = createContext(null);

export default function DateProvider({ children }) {
  const currentDate = new Date();
  const formattedDate = currentDate.toISOString().slice(0, 10); // Format: YYYY-MM-DD

  const [selectedDate, setSelectedDate] = useState(formattedDate);

  const setDate = (SelectDate) => {
    setSelectedDate(SelectDate);
  };

  return (
    <DateContext.Provider value={[selectedDate, setDate]}>
      {children}
    </DateContext.Provider>
  );
}
