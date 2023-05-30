import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navigation from "./Navigation";
import { Logo } from "./sharedstyles";
import styled from "styled-components";

const Header = () => {
  return (
    <>
      <HeaderStlyed>
        <Link href="/">
          <Logo
            src="img/logoWhite.svg"
            width="100"
            height="100"
            alt="sofaLogo"
          />
        </Link>
        <Link href="/tournament">
          <MobileMatchIco
            src="img/ic_trophy.svg"
            height="100"
            width="100"
            alt="matchico"
          />
        </Link>
        <Link href="/settings">
          <SettingsIco
            src="img/ic_settings.svg"
            height="100"
            width="100"
            alt="settingsico"
          />
        </Link>
      </HeaderStlyed>
      <Navigation />
    </>
  );
};

export default Header;

const HeaderStlyed = styled.div`
  position: fixed;
  padding-top: 14px;
  width: 100%;
  height: 64px;
  display: flex;
  justify-content: center;
  background-color: #374df5;
  @media (max-width: 991px) {
    height: 48px;
    justify-content: start;
    padding-left: 16px;
    padding-top: 12px;
  }
`;
const SettingsIco = styled(Image)`
  position: absolute;
  right: 24px;
  width: 24px;
  height: 24px;
  filter: invert(97%) sepia(44%) saturate(0%) hue-rotate(277deg)
    brightness(106%) contrast(100%);
`;
const MobileMatchIco = styled(Image)`
  position: absolute;
  right: 48px;
  width: 24px;
  height: 24px;
  filter: invert(97%) sepia(44%) saturate(0%) hue-rotate(277deg)
    brightness(106%) contrast(100%);
  margin-right: 24px;
  @media (min-width: 991px) {
    display: none;
  }
`;
