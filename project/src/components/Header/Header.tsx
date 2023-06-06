import React from "react";
import Link from "next/link";
import Navigation from "./Navigation/Navigation";
import { Logo } from "../sharedstyles";
import { HeaderStlyed, SettingsIco, MobileMatchIco } from "./styles";

export default function Header() {
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
}
