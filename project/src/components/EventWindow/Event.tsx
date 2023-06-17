import React, { useContext } from "react";
import {
  StyledLink,
  FlexHor,
  FlexBtw,
  FlexVer,
  IcoBW,
  IcoBlue,
} from "../sharedstyles";
import { MatchContainer, MatchCell } from "./styles";
import { VisibleContext } from "../../utils/VisibleContext";

import { useRouter } from "next/router";
import en from "../../../locales/en/en";
import hr from "../../../locales/hr/hr";

const Event = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : hr;

  const { setVisible, showEventWindow } = useContext(VisibleContext);

  const handleClick = () => {
    setVisible(false);
  };

  return showEventWindow ? (
    <MatchContainer>
      <FlexBtw>
        <IcoBW
          style={{ cursor: "pointer" }}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={handleClick}
        >
          <g clipPath="url(#wmklf4a3la)">
            <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
          </g>
          <defs>
            <clipPath id="wmklf4a3la">
              <path fill="#fff" d="M0 0h24v24H0z" />
            </clipPath>
          </defs>
        </IcoBW>

        <StyledLink href="/event">
          <FlexHor>
            {t.fullPage}
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
          </FlexHor>
        </StyledLink>
      </FlexBtw>
      <MatchCell></MatchCell>
      <FlexVer>
        <StyledLink href="/player">{t.playerPage}</StyledLink>
        <StyledLink href="/team">{t.teamPage}</StyledLink>
      </FlexVer>
    </MatchContainer>
  ) : null;
};

export default Event;
