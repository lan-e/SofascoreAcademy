import React, { useContext } from "react";
import { StyledLink, FlexHor, FlexBtw, FlexVer } from "../sharedstyles";
import {
  MatchContainer,
  MatchCellIco,
  Wrapper,
  MatchCell,
  MatchCellImg,
} from "./styles";
import { VisibleContext } from "../../utils/VisibleContext";

const Event = () => {
  const { setVisible, showEventWindow } = useContext(VisibleContext);

  const handleClick = () => {
    setVisible(false);
  };

  return showEventWindow ? (
    <MatchContainer>
      <FlexBtw>
        <MatchCellIco
          src="img/ic_close.svg"
          width="100"
          height="100"
          alt="closeico"
          onClick={handleClick}
        />
        <Wrapper>
          <FlexHor>
            <StyledLink href="/event">View Full Page</StyledLink>
            <MatchCellIco
              src="img/ic_chevron_right.svg"
              width="100"
              height="100"
              alt="viewpage"
            />
          </FlexHor>
        </Wrapper>
      </FlexBtw>
      <MatchCell>
        <MatchCellImg
          src="img/icon_football.svg"
          width="100"
          height="100"
          alt="footballico"
        />
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
