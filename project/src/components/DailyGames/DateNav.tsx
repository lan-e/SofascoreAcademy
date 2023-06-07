import React, { useContext } from "react";
import { DateContext } from "../../utils/DateProvider";
import { StyledDate, DateContainer } from "./styles";
import { FlexVer } from "../sharedstyles";

export default function DateNav() {
  const [selectedDate, setSelectedDate] = useContext(DateContext);

  //DATE FOR FETCHING
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

  //DATE FOR UI
  const currentMonth = currentDate.getMonth() + 1;
  const formattedDateUI = `${currentDate.getDate()}.${currentMonth}.`;
  const formattedDateUITom = `${tomorrow.getDate()}.${currentMonth}.`;
  const formattedDateUIYs = `${yesterday.getDate()}.${currentMonth}.`;
  return (
    <DateContainer>
      <StyledDate
        onClick={handleYesterdayButtonClick}
        className={selectedDate === formattedYesterday ? "active" : ""}
      >
        <FlexVer>
          <div>Yesterday</div>
          {formattedDateUIYs}
        </FlexVer>
      </StyledDate>
      <StyledDate
        onClick={handleTodayButtonClick}
        className={selectedDate === formattedDate ? "active" : ""}
      >
        <FlexVer>
          <div>Today</div>
          {formattedDateUI}
        </FlexVer>
      </StyledDate>
      <StyledDate
        onClick={handleTomorrowButtonClick}
        className={selectedDate === formattedTomorrow ? "active" : ""}
      >
        <FlexVer>
          <div>Tomorrow</div>
          {formattedDateUITom}
        </FlexVer>
      </StyledDate>
    </DateContainer>
  );
}
