import React, { useState } from "react";
import useSWR from "swr";
import { Container, FlexBtw, FlexHor, FlexVer, IcoBlue } from "../sharedstyles";
import { BulletList } from "react-content-loader";
import MatchesData from "../DailyGames/MatchesData";
import { ChangePageBtn } from "./styles";

export default function LeaguesMatches({ id }) {
  const [eventPage, setEventPage] = useState(0);
  console.log(eventPage);
  const {
    data: matches,
    error,
    isLoading,
  } = useSWR(
    `https://academy.dev.sofascore.com/tournament/${id}/events/next/${eventPage}`
  );
  if (!matches) {
    return (
      <Container>
        <BulletList />
        <BulletList />
        <BulletList />
      </Container>
    );
  }
  const count = matches?.length;

  function pageNext() {
    setEventPage((prevPage) => prevPage + 1);
  }
  function pagePrev() {
    if (eventPage > 0) setEventPage((prevPage) => prevPage - 1);
  }

  return (
    <>
      <FlexBtw>
        <ChangePageBtn onClick={pagePrev}>
          <IcoBlue
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#anwoagbb9a)">
              <path d="M15.41 16.59 10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" />
            </g>
            <defs>
              <clipPath id="anwoagbb9a">
                <path fill="#fff" d="M0 0h24v24H0z" />
              </clipPath>
            </defs>
          </IcoBlue>
        </ChangePageBtn>
        <FlexVer>
          <h2>Matches</h2>
          <div>page: {eventPage}</div>
        </FlexVer>
        <ChangePageBtn onClick={pageNext}>
          <IcoBlue
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#idc0jjbrba)">
              <path d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
            </g>
            <defs>
              <clipPath id="idc0jjbrba">
                <path fill="#fff" d="M0 0h24v24H0z" />
              </clipPath>
            </defs>
          </IcoBlue>
        </ChangePageBtn>
      </FlexBtw>
      {/* <StyledLink href={`/event`}> */}
      {/* <EventData id={6756} /> */}
      <MatchesData matches={matches} />
      {/* </StyledLink> */}
    </>
  );
}
