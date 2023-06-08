import React from "react";
import { useEffect, useState, useContext } from "react";
import { NavStlyed, NavLink, StyledImg } from "./styles";
import { SportContext } from "@/utils/SportProvider";

import { useRouter } from "next/router";
import en from "../../../../locales/en/en";
import hr from "../../../../locales/hr/hr";

export default function Navigation() {
  //language
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : hr;

  //american football --> am.football on mobile
  const amFoot = t.amFoot;
  const americanFoot = t.americanFoot;

  const [text, setText] = useState(americanFoot);

  function ChangeText() {
    if (window.innerWidth < 991) setText(amFoot);
    else {
      setText(americanFoot);
    }
  }
  useEffect(() => {
    ChangeText();
  }, []);

  const { selectedSport, setSport } = useContext(SportContext);
  const handleFootballButtonClick = () => {
    setSport("football");
  };

  const handleBasketballButtonClick = () => {
    setSport("basketball");
  };

  const handleAmFootballButtonClick = () => {
    setSport("american-football");
  };

  return (
    <NavStlyed>
      <NavLink
        href="/"
        onClick={handleFootballButtonClick}
        className={selectedSport === "football" ? "active" : ""}
      >
        <StyledImg
          src="img/icon_football.svg"
          width="100"
          height="100"
          alt="footballico"
        />
        {t.football}
      </NavLink>
      <NavLink
        href="/"
        onClick={handleBasketballButtonClick}
        className={selectedSport === "basketball" ? "active" : ""}
      >
        <StyledImg
          src="img/icon_basketball.svg"
          width="100"
          height="100"
          alt="footballico"
        />
        {t.basketball}
      </NavLink>
      <NavLink
        href="/"
        onClick={handleAmFootballButtonClick}
        className={selectedSport === "american-football" ? "active" : ""}
      >
        <StyledImg
          src="img/icon_american_football.svg"
          width="100"
          height="100"
          alt="footballico"
        />
        {text}
      </NavLink>
    </NavStlyed>
  );
}
