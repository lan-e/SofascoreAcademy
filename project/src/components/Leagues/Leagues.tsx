import React, { useContext } from "react";
import useSWR from "swr";
import Link from "next/link";
import Image from "next/image";
import OneLeague from "./OneLeague";
import { LeagueContainer, LoadMoreBtn } from "./styles";
import { SportContext } from "../../utils/SportProvider";
//{ tournament }
const Leagues = () => {
  const { selectedSport, setSport } = useContext(SportContext);
  const {
    data: leagues,
    error,
    isLoading,
  } = useSWR(
    `https://academy.dev.sofascore.com/sport/${selectedSport}/tournaments`
  );
  if (!leagues) {
    return (
      <LeagueContainer>
        <Image
          src="img/ic_loading.svg"
          width="20"
          height="20"
          alt="pointright"
        />
      </LeagueContainer>
    );
  }

  return (
    <LeagueContainer>
      <h2>Leagues</h2>
      <OneLeague leagues={leagues} />

      <Link href="/tournament">
        <LoadMoreBtn>View More</LoadMoreBtn>
      </Link>
    </LeagueContainer>
  );
};
export default Leagues;
