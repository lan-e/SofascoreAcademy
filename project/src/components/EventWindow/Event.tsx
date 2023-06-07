import React, { useContext } from "react";
import { StyledLink, FlexHor, FlexBtw, FlexVer, IcoBW } from "../sharedstyles";
import { MatchContainer, MatchCell } from "./styles";
import { VisibleContext } from "../../utils/VisibleContext";

const Event = () => {
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
            View Full Page
            <IcoBW
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
            </IcoBW>
          </FlexHor>
        </StyledLink>
      </FlexBtw>
      <MatchCell>
        <IcoBW
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#j46tvih8ba)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.15 4.2c4.236-4.314 11.153-4.314 15.417 0 4.235 4.286 4.235 11.286 0 15.6-4.264 4.314-11.153 4.286-15.416 0-4.236-4.286-4.236-11.314 0-15.6zm12-.657A9.35 9.35 0 0 0 5.225 5.286c-2.965 3-3.53 7.485-1.723 11.057l1.835-.772L8.33 18.6l-.762 1.857c3.53 1.829 7.962 1.229 10.927-1.743 2.937-3 3.501-7.514 1.723-11.085L18.38 8.4l-2.993-3.029.763-1.828zm.763 8.371 1.412 3.629-2.965 3-3.558-1.4.932-4.257 4.179-.972zM8.16 5.486 11.69 7l-.763 4.057-4.038.743-1.468-3.543L8.16 5.486z"
            />
          </g>
          <defs>
            <clipPath id="j46tvih8ba">
              <path fill="currentColor" d="M0 0h24v24H0z" />
            </clipPath>
          </defs>
        </IcoBW>
        Spain
      </MatchCell>
      <FlexVer>
        <StyledLink href="/player">Players</StyledLink>
        <StyledLink href="/team">Team</StyledLink>
      </FlexVer>
    </MatchContainer>
  ) : null;
};

export default Event;
