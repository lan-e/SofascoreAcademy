import React, { useContext } from "react";
import useSWR from "swr";
import { EventData, DailyEvents } from "./EventData";
import { SportContext } from "../../utils/SportProvider";
import { DateContext } from "../../utils/DateProvider";
import { LoadingContainer, FlexVer } from "../sharedstyles";
import { DailyGamesContainer, Desktop, Mobile, DailyGameCell } from "./styles";
import { BulletList } from "react-content-loader";

export default function DailyGames() {
  const { selectedSport } = useContext(SportContext);
  const { selectedDate } = useContext(DateContext);
  // console.log(selectedDate);
  const currentDate = new Date();
  const formattedDate = currentDate.toISOString().slice(0, 10); // Format: YYYY-MM-DD

  //const yesterday = new Date(currentDate);
  //yesterday.setDate(currentDate.getDate() - 1);
  // const formattedYesterday = yesterday.toISOString().slice(0, 10);

  // const tomorrow = new Date(currentDate);
  // tomorrow.setDate(currentDate.getDate() + 1);
  // const formattedTomorrow = tomorrow.toISOString().slice(0, 10);

  const {
    data: matches,
    error,
    isLoading,
    // mutate,
  } = useSWR(
    `https://academy.dev.sofascore.com/sport/${selectedSport}/events/2023-04-01`
    // formattedDate
    // `https://academy.dev.sofascore.com/sport/${selectedSport}/events/${formattedDate}`
    //   : null
    // ,{ refreshInterval: 10000 }
  );
  // useEffect(() => {
  //   if (selectedDate) {
  //     mutate();
  //   }
  // }, [selectedDate]);
  if (!matches) {
    return (
      <LoadingContainer>
        <BulletList />
        <BulletList />
      </LoadingContainer>
    );
  }
  const count = matches?.length;

  return (
    <>
      <Mobile>
        <DailyEvents count={count} />
      </Mobile>

      <DailyGamesContainer>
        <Desktop>
          <DailyEvents count={count} />
        </Desktop>

        <DailyGameCell>
          <FlexVer>
            {/* <StyledLink href={`/event`}> */}
            {/* <EventData id={6756} /> */}
            <EventData matches={matches} />
            {/* </StyledLink> */}
          </FlexVer>
        </DailyGameCell>
      </DailyGamesContainer>
    </>
  );
}
