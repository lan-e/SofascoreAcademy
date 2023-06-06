import React, { useContext } from "react";
import { DateContext } from "../../utils/DateProvider";
import { StyledDate, DateContainer } from "./styles";

export default function DateNav() {
  const [selectedDate, setSelectedDate] = useContext(DateContext);

  const currentDate = new Date();
  const formattedDate = currentDate.toISOString().slice(0, 10); // Format: YYYY-MM-DD

  const yesterday = new Date(currentDate);
  yesterday.setDate(currentDate.getDate() - 1);
  const formattedYesterday = yesterday.toISOString().slice(0, 10);

  const tomorrow = new Date(currentDate);
  tomorrow.setDate(currentDate.getDate() + 1);
  const formattedTomorrow = tomorrow.toISOString().slice(0, 10);

  const handleYesterdayButtonClick = () => {
    setSelectedDate(formattedYesterday);
  };

  const handleTodayButtonClick = () => {
    setSelectedDate(formattedDate);
  };

  const handleTomorrowButtonClick = () => {
    setSelectedDate(formattedTomorrow);
  };
  return (
    <DateContainer>
      <StyledDate
        onClick={handleYesterdayButtonClick}
        className={selectedDate === formattedYesterday ? "active" : ""}
      >
        Yesterday
      </StyledDate>
      <StyledDate
        onClick={handleTodayButtonClick}
        className={selectedDate === formattedDate ? "active" : ""}
      >
        Today
      </StyledDate>
      <StyledDate
        onClick={handleTomorrowButtonClick}
        className={selectedDate === formattedTomorrow ? "active" : ""}
      >
        Tomorrow
      </StyledDate>
    </DateContainer>
  );
}
