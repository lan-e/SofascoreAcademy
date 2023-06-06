import React from "react";
import Link from "next/link";
import { Logo } from "../sharedstyles";
import { FooterStlyed, FooterContent } from "./styles";

const Footer = () => {
  return (
    <FooterStlyed>
      <Link href="/">
        <Logo src="img/logoBlack.svg" alt="sofaLogo" width="100" height="100" />
      </Link>
      <FooterContent>© 2023 Sofascore – All Rights Reserved.</FooterContent>
    </FooterStlyed>
  );
};

export default Footer;
