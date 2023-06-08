import React, { useContext } from "react";
import useSWR from "swr";
import Link from "next/link";
import Image from "next/image";
import OneLeague from "./OneLeague";
import { LeagueContainer, LoadMoreBtn } from "./styles";
import { SportContext } from "../../utils/SportProvider";
import { BulletList } from "react-content-loader";

import { useRouter } from "next/router";
import en from "../../../locales/en/en";
import hr from "../../../locales/hr/hr";

const Leagues = () => {
  //language
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : hr;

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
        <BulletList />
      </LeagueContainer>
    );
  }

  return (
    <LeagueContainer>
      <h2>{t.leagueTitle}</h2>
      <OneLeague leagues={leagues} />

      <Link href="/tournament">
        <LoadMoreBtn>{t.viewMore}</LoadMoreBtn>
      </Link>
    </LeagueContainer>
  );
};
export default Leagues;
