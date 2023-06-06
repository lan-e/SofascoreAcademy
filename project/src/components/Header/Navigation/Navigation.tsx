import React from "react";
import { useEffect, useState, useContext } from "react";
import { NavStlyed, NavLink, StyledImg } from "./styles";
import { SportContext } from "@/utils/SportProvider";

export default function Navigation() {
  const [text, setText] = useState("American Football");
  function ChangeText() {
    if (window.innerWidth < 991) setText("Am. Football");
    else {
      setText("American Football");
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
        Football
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
        Basketball
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
        {/* {typeof window !== "undefined" && window.innerWidth < 991 ? (
          <div>Am. Football</div>
        ) : (
          <div>American Football</div>
        )} */}
      </NavLink>
    </NavStlyed>
  );
}
